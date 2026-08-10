import { useState, useEffect, useContext, createContext } from "react";
import { useProgreso } from "./hooks/useProgreso";
import { CATEGORIAS, QUIZZES, META } from "./data/contenido.js";
import { DARK, ThemeCtx } from "./ThemeCtx";
import { Sidebar } from "./components/Sidebar";
import { VistaTema } from "./components/VistaTema";
import { Creditos } from "./components/Creditos";

// ── PALETA MODO CLARO ─────────────────────────────────────────────────────────
const LIGHT = {
  bg: "#ffffff", surface: "#f6f8fa", surface2: "#eaeef2",
  border: "#d0d7de", accent: "#0969da", accentSoft: "#0969da15",
  green: "#1a7f37", greenSoft: "#dafbe1", orange: "#bc4c00",
  red: "#cf222e", text: "#1f2328", muted: "#656d76",
  purple: "#8250df", yellow: "#9a6700", teal: "#0f6e31",
  nombre: "claro",
};

// ── CONTEXTO DE TAMAÑO DE FUENTE ──────────────────────────────────────────────
const FONT_SCALES = [1, 1.2, 1.4];
const FontSizeCtx = createContext({ scaleIdx: 0, aumentar: () => { }, reducir: () => { } });
const useFontSize = () => useContext(FontSizeCtx);

function FontSizeProvider({ children }) {
  const [scaleIdx, setScaleIdx] = useState(() => {
    try { return Number(localStorage.getItem("uan_trig_font_scale")) || 0; } catch { return 0; }
  });
  const aumentar = () => setScaleIdx(i => Math.min(i + 1, FONT_SCALES.length - 1));
  const reducir = () => setScaleIdx(i => Math.max(i - 1, 0));
  useEffect(() => {
    document.documentElement.style.setProperty("--font-scale", FONT_SCALES[scaleIdx]);
    try { localStorage.setItem("uan_trig_font_scale", scaleIdx); } catch { }
  }, [scaleIdx]);
  return (
    <FontSizeCtx.Provider value={{ scaleIdx, aumentar, reducir }}>
      {children}
    </FontSizeCtx.Provider>
  );
}

// ── CONTEXTO DE TEMA ───────────────────────────────────────────────────────────
const useTheme = () => useContext(ThemeCtx);

function ThemeProvider({ children }) {
  const [modo, setModo] = useState(() => {
    try { return localStorage.getItem("uan_trig_tema") || "oscuro"; } catch { return "oscuro"; }
  });
  const C = modo === "claro" ? LIGHT : DARK;
  const toggleTema = () => setModo(m => {
    const nuevo = m === "oscuro" ? "claro" : "oscuro";
    try { localStorage.setItem("uan_trig_tema", nuevo); } catch { }
    return nuevo;
  });
  useEffect(() => {
    document.body.style.background = C.bg;
    document.body.style.color = C.text;
  }, [C.bg, C.text]);
  return (
    <ThemeCtx.Provider value={{ C, toggleTema }}>
      {children}
    </ThemeCtx.Provider>
  );
}

// ── TODOS LOS TEMAS ───────────────────────────────────────────────────────────
const TODOS_TEMAS = CATEGORIAS.flatMap(c =>
  c.temas.map(t => ({ ...t, categoria: c.id, catNombre: c.nombre, catColor: c.color }))
);

// ── MÓDULOS → niveles de quiz ─────────────────────────────────────────────────
const MODULO_NIVELES = {
  angulos: ["Ángulos y Medición"],
  razones_trig: ["Razones Trigonométricas"],
  circulo_unitario: ["Círculo Unitario"],
  identidades: ["Identidades Trigonométricas"],
  funciones_trig: ["Funciones Trigonométricas"],
  triangulos: ["Triángulos Oblicuos"],
  inversa: ["Trigonometría Inversa"],
};
const N_PREGUNTAS = 10;

// ── SESIÓN DE QUIZ ────────────────────────────────────────────────────────────
function SesionQuiz({ pool, nPreguntas, guardarQuiz, onVolver, moduloId, modo }) {
  const { C } = useTheme();
  const [fase, setFase] = useState("quiz");
  const [qIdx, setQIdx] = useState(0);
  const [resp, setResp] = useState({});
  const [sel, setSel] = useState(null);
  const [exp, setExp] = useState(false);

  const buildQs = () => nPreguntas === pool.length
    ? [...pool]
    : [...pool].sort(() => 0.5 - Math.random()).slice(0, nPreguntas);
  const [qs, setQs] = useState(buildQs);

  const q = qs[qIdx];
  const aciertos = qs.filter((qz, i) => resp[i] === qz.correcta).length;

  const reiniciar = () => {
    setQs(buildQs()); setFase("quiz"); setQIdx(0); setResp({}); setSel(null); setExp(false);
  };

  if (fase === "resultado") return (
    <div className="fade-slide-in" style={{ maxWidth: 820, padding: "28px 32px" }}>
      <h3 style={{ color: C.text, marginBottom: 6 }}>Resultado: {aciertos}/{qs.length}</h3>
      <div style={{ width: "100%", height: 8, background: C.border, borderRadius: 4, marginBottom: 20 }}>
        <div style={{
          width: `${(aciertos / qs.length) * 100}%`, height: "100%", borderRadius: 4, transition: "width 1s",
          background: aciertos >= qs.length * 0.7 ? C.green : aciertos >= qs.length * 0.5 ? C.yellow : C.red
        }} />
      </div>
      <div style={{ fontSize: 13, color: C.muted, marginBottom: 20 }}>
        {aciertos >= qs.length * 0.7 ? "✅ Aprobado" : aciertos >= qs.length * 0.5 ? "⚠️ Suficiente" : "❌ Necesita refuerzo"}
        {" — "}{Math.round((aciertos / qs.length) * 100)}%
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
        {qs.map((quiz, i) => (
          <div key={i} style={{
            display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 14px",
            borderRadius: 8, background: C.surface,
            border: `1px solid ${resp[i] === quiz.correcta ? C.green + "44" : C.red + "33"}`
          }}>
            <span style={{ color: resp[i] === quiz.correcta ? C.green : C.red, fontSize: 16, minWidth: 20 }}>
              {resp[i] === quiz.correcta ? "✓" : "✗"}
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ color: C.text, fontSize: 12, marginBottom: 4 }}>{quiz.pregunta}</div>
              {resp[i] !== quiz.correcta && (
                <div style={{ color: C.muted, fontSize: 11 }}>✔ Correcto: {quiz.opciones[quiz.correcta]}</div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button onClick={reiniciar}
          style={{ padding: "10px 24px", borderRadius: 10, border: `1px solid ${C.accent}`, background: "transparent", color: C.accent, fontSize: 13, cursor: "pointer" }}>
          🔄 Repetir
        </button>
        <button onClick={onVolver}
          style={{ padding: "10px 24px", borderRadius: 10, border: `1px solid ${C.border}`, background: "transparent", color: C.muted, fontSize: 13, cursor: "pointer" }}>
          ← Volver
        </button>
      </div>
    </div>
  );

  return (
    <div className="fade-slide-in" style={{ maxWidth: 640, padding: "28px 32px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <span style={{ color: C.muted, fontSize: 12 }}>Pregunta {qIdx + 1} / {qs.length}</span>
        <button onClick={onVolver}
          style={{ background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, color: C.muted, fontSize: 11, padding: "3px 10px", cursor: "pointer" }}>← Módulos</button>
      </div>
      <div style={{ height: 3, background: C.border, borderRadius: 2, marginBottom: 20 }}>
        <div style={{ width: `${((qIdx + 1) / qs.length) * 100}%`, height: "100%", background: C.accent, borderRadius: 2, transition: "width .4s" }} />
      </div>
      <p style={{ color: C.text, fontSize: 14, lineHeight: 1.75, marginBottom: 20, fontWeight: 500 }}>{q.pregunta}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
        {q.opciones.map((op, i) => {
          const esCor = i === q.correcta, esSel = sel === i;
          return (
            <button key={i} onClick={() => !exp && setSel(i)}
              style={{
                padding: "12px 16px", borderRadius: 10, border: "1px solid", textAlign: "left",
                borderColor: exp && esCor ? C.green : exp && esSel && !esCor ? C.red : esSel ? C.accent : C.border,
                background: exp && esCor ? `${C.green}22` : exp && esSel && !esCor ? `${C.red}22` : esSel ? C.accentSoft : "transparent",
                color: C.text, fontSize: 13, cursor: exp ? "default" : "pointer", transition: "all .2s",
              }}>
              <span style={{ fontFamily: "monospace", color: C.muted, marginRight: 10 }}>{String.fromCharCode(65 + i)}.</span>{op}
            </button>
          );
        })}
      </div>
      {sel !== null && !exp && (
        <button onClick={() => setExp(true)}
          style={{ padding: "8px 18px", borderRadius: 8, border: `1px solid ${C.border}`, background: "transparent", color: C.muted, fontSize: 12, cursor: "pointer", marginRight: 10, marginBottom: 10 }}>
          Ver explicación
        </button>
      )}
      {exp && (
        <div style={{ padding: "12px 16px", borderRadius: 10, background: `${C.yellow}11`, border: `1px solid ${C.yellow}33`, color: C.muted, fontSize: 12, lineHeight: 1.7, marginBottom: 16 }}>
          <strong style={{ color: C.yellow }}>Explicación: </strong>{q.explicacion}
        </div>
      )}
      <button
        onClick={() => {
          const newResp = { ...resp, [qIdx]: sel };
          setResp(newResp);
          if (qIdx < qs.length - 1) {
            setQIdx(qIdx + 1); setSel(null); setExp(false);
          } else {
            const total = qs.filter((qz, i) => newResp[i] === qz.correcta).length;
            guardarQuiz(total, qs.length, moduloId, modo);
            setFase("resultado");
          }
        }}
        disabled={sel === null}
        style={{
          width: "100%", padding: "12px", borderRadius: 10, border: "none", fontSize: 14, fontWeight: "bold",
          background: sel !== null ? C.accent : C.border,
          color: sel !== null ? C.bg : C.muted,
          cursor: sel !== null ? "pointer" : "default", marginTop: 4
        }}>
        {qIdx < qs.length - 1 ? "Siguiente →" : "Ver resultado"}
      </button>
    </div>
  );
}

// ── QUIZ (selección de módulo) ────────────────────────────────────────────────
function Quiz({ guardarQuiz, moduloInicial }) {
  const { C } = useTheme();
  const [moduloActivo, setModuloActivo] = useState(null);
  const [modoSesion, setModoSesion] = useState(null);

  const getPool = (catId) => {
    const niveles = MODULO_NIVELES[catId];
    if (!niveles) return QUIZZES;
    return QUIZZES.filter(q => niveles.includes(q.nivel));
  };

  if (moduloActivo && modoSesion === null) {
    const pool = getPool(moduloActivo);
    const cat = CATEGORIAS.find(c => c.id === moduloActivo);
    return (
      <div className="fade-slide-in" style={{ maxWidth: 640, padding: "28px 32px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <span style={{ fontSize: 24 }}>{cat?.icon}</span>
          <div>
            <div style={{ color: C.text, fontWeight: 700, fontSize: 16 }}>{cat?.nombre}</div>
            <div style={{ color: C.muted, fontSize: 12 }}>{pool.length} reactivos en el banco</div>
          </div>
        </div>
        <div style={{ color: C.muted, fontSize: 13, marginBottom: 20 }}>Elige el modo de evaluación:</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 24 }}>
          <button onClick={() => setModoSesion(Math.min(N_PREGUNTAS, pool.length))}
            style={{ background: C.surface, border: `2px solid ${cat?.color || C.accent}`, borderRadius: 14, padding: "20px 16px", textAlign: "left", cursor: "pointer" }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>🎲</div>
            <div style={{ color: C.text, fontWeight: 700, fontSize: 14, marginBottom: 6 }}>Muestra aleatoria</div>
            <div style={{ color: C.muted, fontSize: 12 }}><strong style={{ color: cat?.color }}>{Math.min(N_PREGUNTAS, pool.length)} preguntas</strong> seleccionadas al azar</div>
          </button>
          <button onClick={() => setModoSesion(pool.length)}
            style={{ background: C.surface, border: `2px solid ${C.border}`, borderRadius: 14, padding: "20px 16px", textAlign: "left", cursor: "pointer" }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>📋</div>
            <div style={{ color: C.text, fontWeight: 700, fontSize: 14, marginBottom: 6 }}>Banco completo</div>
            <div style={{ color: C.muted, fontSize: 12 }}><strong style={{ color: C.text }}>{pool.length} preguntas</strong> en orden del banco</div>
          </button>
        </div>
        <button onClick={() => setModuloActivo(null)}
          style={{ background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, color: C.muted, fontSize: 12, padding: "6px 16px", cursor: "pointer" }}>
          ← Volver a módulos
        </button>
      </div>
    );
  }

  if (moduloActivo && modoSesion !== null) {
    const pool = getPool(moduloActivo);
    const cat = CATEGORIAS.find(c => c.id === moduloActivo);
    return (
      <div>
        <div style={{ padding: "14px 32px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 18 }}>{cat?.icon}</span>
          <span style={{ color: C.text, fontWeight: 700, fontSize: 14 }}>{cat?.nombre}</span>
          <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 10, background: `${cat?.color || C.accent}22`, color: cat?.color || C.accent }}>
            {modoSesion === pool.length ? `${pool.length} reactivos · Completo` : `${modoSesion} aleatorias`}
          </span>
        </div>
        <SesionQuiz pool={pool} nPreguntas={modoSesion} guardarQuiz={guardarQuiz}
          moduloId={moduloActivo} modo={modoSesion === pool.length ? "completo" : "aleatorio"}
          onVolver={() => setModoSesion(null)} />
      </div>
    );
  }

  return (
    <div className="fade-slide-in" style={{ maxWidth: 860, padding: "28px 32px" }}>
      <h2 style={{ color: C.text, fontSize: 20, fontWeight: 700, marginBottom: 6 }}>🎯 Evaluación por Módulo</h2>
      <p style={{ color: C.muted, fontSize: 13, marginBottom: 28, lineHeight: 1.7 }}>
        Selecciona un módulo para comenzar la evaluación.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 12 }}>
        {CATEGORIAS.map(cat => {
          const pool = getPool(cat.id);
          const suficiente = pool.length >= 3;
          return (
            <button key={cat.id}
              onClick={() => suficiente && (setModuloActivo(cat.id), setModoSesion(null))}
              disabled={!suficiente}
              style={{
                background: C.surface, border: `2px solid ${moduloInicial === cat.id ? cat.color : C.border}`,
                borderRadius: 14, padding: "20px 16px", textAlign: "left",
                cursor: suficiente ? "pointer" : "not-allowed",
                opacity: suficiente ? 1 : 0.5, transition: "border-color .2s",
                position: "relative", overflow: "hidden",
              }}
              onMouseEnter={e => { if (suficiente) e.currentTarget.style.borderColor = cat.color; }}
              onMouseLeave={e => { if (moduloInicial !== cat.id) e.currentTarget.style.borderColor = C.border; }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: 60, height: 60, background: `radial-gradient(circle at top right, ${cat.color}18 0%, transparent 70%)` }} />
              <div style={{ fontSize: 28, marginBottom: 10 }}>{cat.icon}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 6, lineHeight: 1.3 }}>{cat.nombre}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ flex: 1, height: 4, background: C.border, borderRadius: 2 }}>
                  <div style={{ width: `${Math.min((pool.length / 15) * 100, 100)}%`, height: "100%", background: cat.color, borderRadius: 2 }} />
                </div>
                <span style={{ fontSize: 11, color: C.muted, whiteSpace: "nowrap" }}>{pool.length} reactivos</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── APP PRINCIPAL ─────────────────────────────────────────────────────────────
export default function App() {
  return (
    <FontSizeProvider>
      <ThemeProvider>
        <AppInner />
      </ThemeProvider>
    </FontSizeProvider>
  );
}

function AppInner() {
  const { C, toggleTema } = useTheme();
  const { scaleIdx, aumentar, reducir } = useFontSize();
  const { progreso, marcarVisitado, guardarQuiz } = useProgreso();

  const [catActiva, setCatActiva] = useState(progreso.ultimaCategoria || CATEGORIAS[0]?.id);
  const [temaActivo, setTemaActivo] = useState(progreso.ultimoTema || CATEGORIAS[0]?.temas[0]?.id);
  const [vista, setVista] = useState("teoria");
  const [busqueda, setBusqueda] = useState("");
  const [sidebarAbierto, setSidebarAbierto] = useState(false);

  const tema = TODOS_TEMAS.find(t => t.id === temaActivo);

  const handleSetTema = (id, catId) => {
    setTemaActivo(id);
    setVista("teoria");
    marcarVisitado(id, catId);
    setSidebarAbierto(false);
  };

  useEffect(() => {
    if (tema) marcarVisitado(tema.id, tema.categoria);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const BtnTema = () => (
    <button onClick={toggleTema} title="Cambiar tema"
      style={{ background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, color: C.muted, fontSize: 16, width: 36, height: 36, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      {C.nombre === "oscuro" ? "🌙" : "☀️"}
    </button>
  );

  const BtnFuente = () => (
    <div style={{ display: "flex", gap: 3, flexShrink: 0 }}>
      <button onClick={reducir} disabled={scaleIdx === 0} title="Reducir letra"
        style={{ background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, color: scaleIdx === 0 ? C.border : C.muted, fontSize: 12, fontWeight: 700, width: 32, height: 36, cursor: scaleIdx === 0 ? "default" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>A-</button>
      <button onClick={aumentar} disabled={scaleIdx === FONT_SCALES.length - 1} title="Aumentar letra"
        style={{ background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, color: scaleIdx === FONT_SCALES.length - 1 ? C.border : C.muted, fontSize: 14, fontWeight: 700, width: 32, height: 36, cursor: scaleIdx === FONT_SCALES.length - 1 ? "default" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>A+</button>
    </div>
  );

  const navItems = [["teoria", "🎓 Teoría"], ["quiz", "✍️ Evaluación"], ["creditos", "©️ Créditos"]];

  return (
    <div style={{ display: "flex", height: "100vh", background: C.bg, fontFamily: "'IBM Plex Sans','Helvetica Neue',sans-serif", color: C.text, position: "relative", transition: "background .3s, color .3s" }}>
      {/* Overlay móvil */}
      <div className="sidebar-overlay" onClick={() => setSidebarAbierto(false)}
        style={{ display: "none", position: "fixed", inset: 0, background: "#00000077", zIndex: 199, opacity: sidebarAbierto ? 1 : 0, pointerEvents: sidebarAbierto ? "auto" : "none", transition: "opacity 0.28s" }} />

      <Sidebar catActiva={catActiva} setCatActiva={setCatActiva} temaActivo={temaActivo}
        setTemaActivo={handleSetTema} busqueda={busqueda} setBusqueda={setBusqueda}
        progreso={progreso} abierto={sidebarAbierto} onCerrar={() => setSidebarAbierto(false)} />

      <div style={{ flex: 1, minWidth: 0, minHeight: 0, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Topbar escritorio */}
        <div className="topbar-desktop" style={{ background: C.surface, borderBottom: `1px solid ${C.border}`, padding: "10px 20px", display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          {navItems.map(([k, v]) => (
            <button key={k} onClick={() => setVista(k)}
              style={{ padding: "6px 16px", borderRadius: 8, border: `1px solid ${vista === k ? C.accent : C.border}`, background: vista === k ? C.accentSoft : "transparent", color: vista === k ? C.accent : C.muted, fontSize: 12, cursor: "pointer", flex: 1, minWidth: 90 }}>
              {v}
            </button>
          ))}
          <BtnFuente /><BtnTema />
        </div>

        {/* Topbar móvil */}
        <div className="topbar-mobile" style={{ display: "none", background: C.surface, borderBottom: `1px solid ${C.border}`, padding: "10px 14px", alignItems: "center", gap: 8 }}>
          <button onClick={() => setSidebarAbierto(v => !v)}
            style={{ background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, color: C.text, fontSize: 18, width: 38, height: 38, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            {sidebarAbierto ? "✕" : "☰"}
          </button>
          <span style={{ color: C.text, fontSize: 13, fontWeight: 600, flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {tema ? tema.titulo : META.nombreCompleto}
          </span>
          <div style={{ display: "flex", gap: 5, flexShrink: 0 }}>
            {[["teoria", "🎓"], ["quiz", "✍️"], ["creditos", "©️"]].map(([k, icon]) => (
              <button key={k} onClick={() => setVista(k)}
                style={{ padding: "5px 8px", borderRadius: 8, border: `1px solid ${vista === k ? C.accent : C.border}`, background: vista === k ? C.accentSoft : "transparent", color: vista === k ? C.accent : C.muted, fontSize: 14, cursor: "pointer" }}>
                {icon}
              </button>
            ))}
            <BtnFuente /><BtnTema />
          </div>
        </div>

        {/* Contenido principal */}
        <div style={{ flex: 1, minHeight: 0, overflowY: "auto" }}>
          {vista === "teoria" && tema && <VistaTema tema={tema} />}
          {vista === "teoria" && !tema && (
            <div style={{ padding: "40px 32px" }}>
              <h2 style={{ color: C.text, marginBottom: 8 }}>Bienvenido</h2>
              <p style={{ color: C.muted }}>Selecciona un tema en el panel lateral.</p>
            </div>
          )}
          {vista === "quiz" && <Quiz guardarQuiz={guardarQuiz} moduloInicial={catActiva} />}
          {vista === "creditos" && <Creditos />}
        </div>
      </div>
    </div>
  );
}
