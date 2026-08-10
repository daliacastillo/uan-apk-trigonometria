import { useState, useCallback } from 'react';

// La clave de almacenamiento sigue el esquema mx.uan.<app>_progreso
const CLAVE = 'mx.uan.trigonometria_progreso';

const INICIAL = {
  version: 2,
  temasVisitados: [],
  temasCompletados: [],
  quizHistorial: [],
  quizPorModulo: {},
  ultimoTema: null,
  ultimaCategoria: null,
};

/**
 * useProgreso — Persistencia del progreso del estudiante en localStorage.
 * NTE-UAN-APK-001 v1.0 — Trigonometría
 */
export function useProgreso() {
  const [progreso, setProgreso] = useState(() => {
    try {
      const guardado = JSON.parse(localStorage.getItem(CLAVE));
      if (!guardado) return INICIAL;
      if (!guardado.quizPorModulo) guardado.quizPorModulo = {};
      if (guardado.version < 2) guardado.version = 2;
      return guardado;
    } catch {
      return INICIAL;
    }
  });

  const guardar = useCallback((nuevo) => {
    try { localStorage.setItem(CLAVE, JSON.stringify(nuevo)); } catch { }
    setProgreso(nuevo);
  }, []);

  const marcarVisitado = useCallback((temaId, catId) => {
    guardar({
      ...progreso,
      temasVisitados: [...new Set([...progreso.temasVisitados, temaId])],
      ultimoTema: temaId,
      ultimaCategoria: catId,
    });
  }, [progreso, guardar]);

  const guardarQuiz = useCallback((aciertos, total, moduloId, modo) => {
    const entrada = {
      fecha: new Date().toISOString(),
      aciertos,
      total,
      modo: modo || 'desconocido',
    };
    const moduloPrev = progreso.quizPorModulo[moduloId] || [];
    guardar({
      ...progreso,
      quizHistorial: [...progreso.quizHistorial, { ...entrada, moduloId }],
      quizPorModulo: {
        ...progreso.quizPorModulo,
        ...(moduloId ? { [moduloId]: [...moduloPrev, entrada] } : {}),
      },
    });
  }, [progreso, guardar]);

  const mejorPuntaje = useCallback((moduloId) => {
    const hist = progreso.quizPorModulo[moduloId] || [];
    if (!hist.length) return null;
    return Math.max(...hist.map(h => h.aciertos / h.total));
  }, [progreso]);

  return { progreso, marcarVisitado, guardarQuiz, mejorPuntaje };
}
