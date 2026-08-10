// NTE-UAN-APK-001 v1.1 — Trigonometría
// Dr. Pablo Eduardo Cancino Marentes — UAN 2026

export const META = {
  materia: "trigonometria",
  nombreCompleto: "Trigonometría",
  version: "1.1.0",
  autor: "Dr. Pablo Eduardo Cancino Marentes",
  anio: "2026",
  descripcion: "Aplicación educativa de Trigonometría — Licenciatura en Matemáticas, UAN",
  unidad: "Unidad Académica de Ciencias Básicas e Ingenierías",
  programa: "Licenciatura en Matemáticas",
  norma: "NTE-UAN-APK-001 v1.0",
};

export const CREDITOS = [
  {
    rol: "Docentes Investigadores",
    icono: "🎓",
    personas: [
      { nombre: "Dra. Dalia Imelda Castillo Márquez", detalle: "Investigadora responsable / Diseño Teórico" },
      { nombre: "Dr. Pablo Eduardo Cancino Marentes", detalle: "Investigador colaborador / Desarrollo APK" },
    ],
  },
  {
    rol: "Colaboradores en el Desarrollo",
    icono: "💻",
    personas: [
      { nombre: "Por definir", detalle: "Estudiantes — Licenciatura en Matemáticas" },
    ],
  },
];

// ════════════════════════════════════════════════════════════════════════════
// CATEGORÍAS Y TEMAS
// ════════════════════════════════════════════════════════════════════════════
export const CATEGORIAS = [

  // ──────────────────────────────────────────────────────────────────────────
  // MÓDULO 1 — ÁNGULOS Y MEDICIÓN
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "angulos",
    nombre: "Ángulos y Medición",
    icon: "📐",
    color: "#f78166",
    temas: [
      {
        id: "definicion_angulo",
        titulo: "Definición de Ángulo",
        definicion: "Un ángulo es la figura formada por dos semirrectas (lados) que comparten un mismo punto de origen llamado vértice. Su medida cuantifica la apertura entre los dos lados.\n\nÁngulo en posición normal (estándar):\n• El vértice se coloca en el origen del plano cartesiano.\n• El lado inicial está sobre el semieje x positivo.\n• Los ángulos positivos se generan con giro antihorario.\n• Los ángulos negativos, con giro horario.\n\nÁngulos co-terminales: dos ángulos son co-terminales si, en posición normal, comparten el mismo lado terminal. Se obtienen sumando o restando múltiplos enteros de 360°.\nEjemplo: 400° y 40° son co-terminales (400° − 360° = 40°).",
        formula: "\\alpha \\text{ y } \\alpha \\pm 360°\\cdot n \\text{ son co-terminales}, \\quad n \\in \\mathbb{Z}",
        notas: [
          "El lado inicial siempre está sobre el eje X positivo en posición normal.",
          "Ángulo positivo: rotación antihoraria. Ángulo negativo: rotación horaria.",
          "Ejemplo: 400° y 40° son co-terminales (400° − 360° = 40°).",
          "Ejemplo: −320° y 40° son co-terminales (−320° + 360° = 40°).",
        ],
        tabla: {
          titulo: "Clasificación de ángulos",
          encabezados: ["Tipo", "Condición", "Ejemplo"],
          filas: [
            ["Agudo", "0° < θ < 90°", "45°"],
            ["Recto", "θ = 90°", "90°"],
            ["Obtuso", "90° < θ < 180°", "135°"],
            ["Llano", "θ = 180°", "180°"],
            ["Reflejo", "180° < θ < 360°", "270°"],
            ["Completo", "θ = 360°", "360°"],
          ],
          resaltadas: [1, 3],
          colorAuto: false,
        },
      },
      {
        id: "grados_radianes",
        titulo: "Grados y Radianes",
        definicion: "El radián (rad) es la medida del ángulo central que subtiende un arco de longitud igual al radio.\n1 rad = 180°/π ≈ 57.296° — una vuelta completa = 2π rad = 360°\n\nConversión:\n• De grados a radianes: multiplicar por π/180\n• De radianes a grados: multiplicar por 180/π\n\nLongitud de arco (θ en radianes): L = r·θ\nÁrea del sector circular: A = r²·θ / 2\n\nEjemplo: aspa de 50 cm, θ = 120° = 2π/3 rad\n→ L = 0.50 × (2π/3) = π/3 ≈ 1.047 m",
        formula: "L = r\\,\\theta \\qquad A = \\frac{r^2\\,\\theta}{2} \\qquad \\theta[\\text{rad}] = \\theta[°] \\cdot \\frac{\\pi}{180}",
        notas: [
          "180° = π rad ≈ 3.1416 rad",
          "Velocidad angular: ω = θ/t [rad/s]; velocidad lineal: v = r·ω [m/s].",
          "Los radianes son adimensionales (cociente de dos longitudes).",
          "En cálculo se usa radianes como convenio estándar.",
        ],
        tabla: {
          titulo: "Conversión grados ↔ radianes",
          encabezados: ["Grados", "Radianes (exacto)", "Radianes (aprox.)"],
          filas: [
            ["30°", "π/6", "0.5236"],
            ["45°", "π/4", "0.7854"],
            ["60°", "π/3", "1.0472"],
            ["90°", "π/2", "1.5708"],
            ["120°", "2π/3", "2.0944"],
            ["180°", "π", "3.1416"],
            ["270°", "3π/2", "4.7124"],
            ["360°", "2π", "6.2832"],
          ],
          resaltadas: [2, 4],
          colorAuto: false,
        },
      },
      {

        id: "sistema_sexagesimal",
        titulo: "Sistema Sexagesimal",
        definicion: "El grado (°) es la unidad del sistema sexagesimal, equivalente a 1/360 de una vuelta completa. Cada grado se divide en:\n• 60 minutos (') → 1° = 60'\n• 60 segundos ('') → 1' = 60''\n\nConversión a forma decimal:\n47° 30' 18'' = 47 + 30/60 + 18/3600 = 47.505°\n\nConversión de decimal a grados-minutos-segundos:\n1. La parte entera son los grados.\n2. Multiplicar el decimal por 60 → parte entera son los minutos.\n3. Multiplicar el nuevo decimal por 60 → segundos.",
        formula: "\\alpha[°] = G + \\frac{M}{60} + \\frac{S}{3600}",
        notas: [
          "Ejemplo: 52° 45' 36'' = 52 + 45/60 + 36/3600 = 52.76°",
          "Ejemplo inverso: 118.76° → 118° 45' 36''",
          "Los minutos de arco (') son distintos a los minutos de tiempo.",
          "En calculadoras científicas: usar la tecla DMS o °'\".",
        ],
        tabla: {
          titulo: "Conversión D°M'S'' ↔ decimal ↔ radianes",
          encabezados: ["Forma D°M'S''", "Decimal", "Radianes (aprox.)"],
          filas: [
            ["30° 0' 0''", "30°", "π/6 ≈ 0.5236"],
            ["45° 0' 0''", "45°", "π/4 ≈ 0.7854"],
            ["47° 30' 18''", "47.505°", "≈ 0.8294"],
            ["90° 0' 0''", "90°", "π/2 ≈ 1.5708"],
            ["171° 53' 13''", "≈ 171.887°", "≈ 3.0000"],
          ],
          resaltadas: [2],
          colorAuto: false,
        },
      },
      {
        id: "angulos_referencia",
        titulo: "Ángulos de Referencia",
        definicion: "El ángulo de referencia (α') de un ángulo θ en posición normal es el ángulo agudo positivo formado entre el lado terminal y el eje x más cercano.\n\nRegla por cuadrante:\n• Q I: α' = θ\n• Q II: α' = 180° − θ\n• Q III: α' = θ − 180°\n• Q IV: α' = 360° − θ\n\nEjemplo: θ = −250°\n1. Co-terminal positivo: −250° + 360° = 110°\n2. 90° < 110° < 180° → cuadrante II\n3. Ángulo de referencia: 180° − 110° = 70°\n\nAplicación — regla CSCA:\nQ I todos +; Q II solo sen/csc +; Q III solo tan/cot +; Q IV solo cos/sec +.",
        formula: "\\text{Q II: } \\alpha' = 180°-\\theta \\quad \\text{Q III: } \\alpha' = \\theta-180° \\quad \\text{Q IV: } \\alpha' = 360°-\\theta",
        notas: [
          "El ángulo de referencia siempre es positivo y ≤ 90°.",
          "Ejemplo: sen(150°) = sen(30°) = 1/2 (Q II, sen positivo).",
          "Ejemplo: cos(210°) = −cos(30°) = −√3/2 (Q III, cos negativo).",
          "Ejemplo: tan(315°) = −tan(45°) = −1 (Q IV, tan negativo).",
        ],
        tabla: {
          titulo: "Signos por cuadrante (regla CSCA)",
          encabezados: ["Función", "Q I", "Q II", "Q III", "Q IV"],
          filas: [
            ["sen θ / csc θ", "+", "+", "−", "−"],
            ["cos θ / sec θ", "+", "−", "−", "+"],
            ["tan θ / cot θ", "+", "−", "+", "−"],
          ],
          resaltadas: [0],
          colorAuto: false,
        },
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // MÓDULO 2 — RAZONES TRIGONOMÉTRICAS
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "razones_trig",
    nombre: "Razones Trigonométricas",
    icon: "📏",
    color: "#58a6ff",
    temas: [
      {
        id: "sen_cos_tan",
        titulo: "Seno, Coseno y Tangente",
        definicion: "En un triángulo rectángulo con ángulo θ, las razones trigonométricas principales se definen como cocientes entre los lados:\n\n• Seno (sen): cociente entre el lado opuesto y la hipotenusa.\n• Coseno (cos): cociente entre el lado adyacente y la hipotenusa.\n• Tangente (tan): cociente entre el lado opuesto y el adyacente.",
        formula: "\\sen\\theta = \\frac{\\text{opuesto}}{\\text{hip}} \\qquad \\cos\\theta = \\frac{\\text{adyacente}}{\\text{hip}} \\qquad \\tan\\theta = \\frac{\\text{opuesto}}{\\text{adyacente}}",
        visual: "triangulo",
        notas: [
          "La hipotenusa siempre es el lado más largo (frente al ángulo recto).",
          "El lado opuesto es el que no forma el ángulo θ.",
          "sen θ y cos θ siempre están entre −1 y 1.",
          "tan θ puede ser cualquier número real (incluso infinito cuando cos θ = 0).",
        ],
      },
      {
        id: "csc_sec_cot",
        titulo: "Cosecante, Secante y Cotangente",
        definicion: "Las tres razones trigonométricas recíprocas son:\n\n• Cosecante (csc): recíproco del seno.\n• Secante (sec): recíproco del coseno.\n• Cotangente (cot): recíproco de la tangente.",
        formula: "\\csc\\theta = \\frac{1}{\\sen\\theta} \\quad \\sec\\theta = \\frac{1}{\\cos\\theta} \\quad \\cot\\theta = \\frac{1}{\\tan\\theta}",
        notas: [
          "csc θ no está definida cuando sen θ = 0 (θ = 0°, 180°, …).",
          "sec θ no está definida cuando cos θ = 0 (θ = 90°, 270°, …).",
          "cot θ no está definida cuando tan θ = 0 (θ = 0°, 180°, …).",
        ],
        tabla: {
          titulo: "Ángulos notables",
          encabezados: ["θ", "sen θ", "cos θ", "tan θ"],
          filas: [
            ["0°", "0", "1", "0"],
            ["30°", "1/2", "√3/2", "1/√3"],
            ["45°", "√2/2", "√2/2", "1"],
            ["60°", "√3/2", "1/2", "√3"],
            ["90°", "1", "0", "∞"],
          ],
          resaltadas: [2, 4],
          colorAuto: false,
        },
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // MÓDULO 3 — CÍRCULO UNITARIO
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "circulo_unitario",
    nombre: "Círculo Unitario",
    icon: "⭕",
    color: "#7ee787",
    temas: [
      {
        id: "definicion_circulo",
        titulo: "El Círculo Unitario",
        definicion: "El círculo unitario es la circunferencia de radio 1 centrada en el origen del plano cartesiano.\n\nPara cualquier ángulo θ, el punto P = (cos θ, sen θ) es el punto de intersección del rayo terminal con el círculo.\n\nArrastra el punto azul en el gráfico para explorar los valores.",
        formula: "x^2 + y^2 = 1 \\qquad P=(\\cos\\theta,\\, \\sen\\theta)",
        visual: "circulo",
        notas: [
          "La coordenada x siempre es igual a cos θ.",
          "La coordenada y siempre es igual a sen θ.",
          "El radio es 1, por eso sen²θ + cos²θ = 1.",
          "Los cuatro cuadrantes determinan el signo de cada razón.",
        ],
      },
      {
        id: "cuadrantes",
        titulo: "Signos por Cuadrante",
        definicion: "El signo de las razones trigonométricas depende del cuadrante en que se encuentre el ángulo terminal.\n\nMnemotecnia: 'Todos los Sabios Conocen Trigonometría'\n• I: Todas positivas\n• II: Solo Sen positiva\n• III: Solo Cos negativa / Tan positiva\n• IV: Solo Cos positiva",
        formula: "\\text{I: sen}+,\\cos+ \\quad \\text{II: sen}+,\\cos- \\quad \\text{III: sen}-,\\cos- \\quad \\text{IV: sen}-,\\cos+",
        visual: "circulo",
        notas: [
          "Cuadrante I: 0° < θ < 90° — todas las razones son positivas.",
          "Cuadrante II: 90° < θ < 180° — solo seno es positivo.",
          "Cuadrante III: 180° < θ < 270° — solo tangente es positiva.",
          "Cuadrante IV: 270° < θ < 360° — solo coseno es positivo.",
        ],
      },
      {
        id: "forma_general_sinusoidal",
        titulo: "Forma General de Seno y Coseno",
        definicion: "La forma general de las funciones sinusoidales es:\ny = A·sen(Bx + C) + D\n\n• |A| = amplitud (distancia del eje al máximo/mínimo)\n• T = 2π/|B| = periodo (longitud de un ciclo completo)\n• −C/B = desfasamiento horizontal (>0 desplaza a la derecha)\n• D = desplazamiento vertical (eje de oscilación)\n\nLa función oscila entre D − |A| y D + |A|.\n\nEjemplo: y = 3·sen(2x − π/3) + 1\n• Amplitud = 3  |  Periodo = π  |  Fase = π/6 (derecha)  |  Oscila: −2 a 4",
        formula: "y = A\\,\\sen(Bx+C)+D \\qquad |A|=\\text{amplitud}, \\quad T=\\frac{2\\pi}{|B|}, \\quad \\text{fase}=\\frac{-C}{B}",
        visual: "grafica",
        graficaFn: "sen",
        notas: [
          "Si A < 0, la gráfica queda invertida (reflexión respecto al eje x).",
          "El periodo depende solo de |B|, no del signo de B.",
          "La amplitud es siempre positiva: |A|.",
          "Identificar primero A, luego B, luego −C/B, luego D.",
        ],
        tabla: {
          titulo: "Parámetros de y = A·sen(Bx + C) + D",
          encabezados: ["Parámetro", "Significado", "Fórmula"],
          filas: [
            ["|A|", "Amplitud", "máx − D = D − mín"],
            ["T", "Periodo", "T = 2π / |B|"],
            ["−C/B", "Desfasamiento horizontal", "> 0: desplaza a la derecha"],
            ["D", "Desplazamiento vertical", "Eje de oscilación"],
          ],
          resaltadas: [0, 1],
          colorAuto: false,
        },
      },
      {
        id: "angulos_elevacion_depresion",
        titulo: "Ángulos de Elevación y Depresión",
        definicion: "Los ángulos de elevación y depresión se miden desde la horizontal.\n\n• Elevación: ángulo hacia arriba desde la horizontal hacia un objeto superior.\n• Depresión: ángulo hacia abajo desde la horizontal hacia un objeto inferior.\n\nAmbos son siempre positivos y agudos (< 90°).\n\nEjemplo 1 — Elevación:\nPoste con sombra de 12 m, ángulo solar de 35°.\n→ tan(35°) = h/12  →  h = 12·tan(35°) ≈ 8.40 m\n\nEjemplo 2 — Depresión:\nFaro de 80 m, ángulo de depresión a barco = 22°.\n→ tan(22°) = 80/d  →  d ≈ 198 m",
        formula: "\\tan(\\text{elevación}) = \\frac{\\text{altura}}{\\text{distancia horizontal}}",
        notas: [
          "El ángulo de elevación e igual ángulo de depresión son alternos interiores.",
          "Siempre identificar el triángulo rectángulo antes de aplicar la razón.",
          "Aplicaciones: topografía, arquitectura, navegación, astronomía.",
          "El observador se ubica en el vértice del ángulo.",
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // MÓDULO 4 — IDENTIDADES TRIGONOMÉTRICAS
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "identidades",
    nombre: "Identidades Trigonométricas",
    icon: "🔄",
    color: "#d2a8ff",
    temas: [
      {
        id: "identidades_pitagoricas",
        titulo: "Identidades Pitagóricas",
        definicion: "Las identidades pitagóricas se derivan directamente del Teorema de Pitágoras aplicado al círculo unitario.\n\nSon las identidades más fundamentales de la trigonometría y permiten transformar una razón en términos de otra.",
        formula: "\\sen^2\\theta + \\cos^2\\theta = 1",
        notas: [
          "Derivada 1: dividiendo entre cos²θ → tan²θ + 1 = sec²θ",
          "Derivada 2: dividiendo entre sen²θ → 1 + cot²θ = csc²θ",
          "Estas identidades son válidas para todo ángulo θ.",
          "Se usan para simplificar expresiones y resolver ecuaciones.",
        ],
        tabla: {
          titulo: "Las tres identidades pitagóricas",
          encabezados: ["Identidad", "Forma equivalente"],
          filas: [
            ["sen²θ + cos²θ = 1", "sen²θ = 1 − cos²θ"],
            ["1 + tan²θ = sec²θ", "tan²θ = sec²θ − 1"],
            ["1 + cot²θ = csc²θ", "cot²θ = csc²θ − 1"],
          ],
          resaltadas: [0],
          colorAuto: false,
        },
      },
      {
        id: "identidades_suma",
        titulo: "Suma y Diferencia de Ángulos",
        definicion: "Las fórmulas de suma y diferencia permiten calcular las razones trigonométricas de la suma o resta de dos ángulos conocidos.\n\nSon especialmente útiles para obtener valores de ángulos no estándar (p.ej. 15°, 75°).",
        formula: "\\sen(\\alpha \\pm \\beta) = \\sen\\alpha\\cos\\beta \\pm \\cos\\alpha\\sen\\beta",
        notas: [
          "cos(α ± β) = cos α cos β ∓ sen α sen β",
          "tan(α + β) = (tan α + tan β) / (1 − tan α tan β)",
          "Ejemplo: sen 75° = sen(45° + 30°)",
          "Las fórmulas de doble ángulo son casos especiales con α = β.",
        ],
      },
      {
        id: "doble_angulo",
        titulo: "Fórmulas de Doble Ángulo",
        definicion: "Las fórmulas de doble ángulo se obtienen de las de suma cuando α = β, y son herramientas clave en integración y simplificación trigonométrica.",
        formula: "\\sen(2\\theta) = 2\\sen\\theta\\cos\\theta \\qquad \\cos(2\\theta) = \\cos^2\\theta - \\sen^2\\theta",
        notas: [
          "Tres formas equivalentes de cos(2θ): cos²θ − sen²θ = 1 − 2sen²θ = 2cos²θ − 1.",
          "tan(2θ) = 2 tan θ / (1 − tan²θ)",
          "Se usan en integrales de potencias de sen y cos.",
        ],
      },
      {
        id: "identidades_reciprocidad_cociente",
        titulo: "Identidades de Reciprocidad y Cociente",
        definicion: "Las identidades de reciprocidad definen cada función recíproca:\n• csc θ = 1/sen θ\n• sec θ = 1/cos θ\n• cot θ = 1/tan θ\n\nLas identidades de cociente relacionan tan y cot con sen y cos:\n• tan θ = sen θ / cos θ\n• cot θ = cos θ / sen θ\n\nEstrategias de demostración de identidades:\n1. Trabajar solo en un lado (el más complejo).\n2. Expresar todo en términos de sen y cos.\n3. Factorizar cuando sea posible.\n4. Multiplicar por el conjugado (1 ± sen θ o 1 ± cos θ).\n5. Sustituir con identidades pitagóricas.",
        formula: "\\tan\\theta = \\frac{\\sen\\theta}{\\cos\\theta} \\qquad \\cot\\theta = \\frac{\\cos\\theta}{\\sen\\theta} \\qquad \\csc\\theta = \\frac{1}{\\sen\\theta}",
        notas: [
          "Son identidades: se cumplen para todos los valores del dominio.",
          "Difieren de ecuaciones, que solo se cumplen para ciertos valores.",
          "Ejemplo: (sec θ − tan θ)(sec θ + tan θ) = sec²θ − tan²θ = 1.",
          "Siempre verificar el dominio al transformar (evitar dividir entre cero).",
        ],
      },
      {
        id: "identidades_angulo_mitad",
        titulo: "Fórmulas de Ángulo Mitad",
        definicion: "Las fórmulas de ángulo mitad se derivan de las de ángulo doble despejando la función del ángulo simple:\n\nsen(A/2) = ±√[(1 − cos A)/2]\ncos(A/2) = ±√[(1 + cos A)/2]\ntan(A/2) = (1 − cos A)/sen A = sen A/(1 + cos A)\n\nEl signo de sen(A/2) y cos(A/2) depende del cuadrante donde se encuentre A/2.\n\nEjemplo: sen(22.5°) = sen(45°/2)\n= √[(1 − cos 45°)/2] = √[(2−√2)/4]",
        formula: "\\sen\\!\\left(\\frac{A}{2}\\right) = \\pm\\sqrt{\\frac{1-\\cos A}{2}} \\qquad \\cos\\!\\left(\\frac{A}{2}\\right) = \\pm\\sqrt{\\frac{1+\\cos A}{2}}",
        notas: [
          "El signo (±) depende del cuadrante de A/2, no de A.",
          "tan(A/2) = (1−cos A)/sen A — siempre válida sin ambigüedad de signo.",
          "Se usan en integración trigonométrica y en geometría analítica.",
          "Ejemplo: tan(A/2) = sen A / (1 + cos A) — forma alternativa equivalente.",
        ],
      },
      {
        id: "identidades_producto_suma",
        titulo: "Producto a Suma y Suma a Producto",
        definicion: "Identidades Producto → Suma:\n2 sen A cos B = sen(A+B) + sen(A−B)\n2 cos A cos B = cos(A−B) + cos(A+B)\n2 sen A sen B = cos(A−B) − cos(A+B)\n2 cos A sen B = sen(A+B) − sen(A−B)\n\nIdentidades Suma → Producto:\nsen P + sen Q = 2 sen((P+Q)/2) cos((P−Q)/2)\nsen P − sen Q = 2 cos((P+Q)/2) sen((P−Q)/2)\ncos P + cos Q = 2 cos((P+Q)/2) cos((P−Q)/2)\ncos P − cos Q = −2 sen((P+Q)/2) sen((P−Q)/2)",
        formula: "2\\sen A\\cos B = \\sen(A+B)+\\sen(A-B)",
        notas: [
          "Útiles para simplificar productos en integración trigonométrica.",
          "Las fórmulas suma→producto se usan para resolver ecuaciones como sen P + sen Q = 0.",
          "Aplicación: batido de señales en ingeniería (señales AM/FM).",
          "Ejemplo: 2 sen 3x cos x = sen 4x + sen 2x.",
        ],
        tabla: {
          titulo: "Identidades suma → producto",
          encabezados: ["Expresión", "Equivalente"],
          filas: [
            ["sen P + sen Q", "2 sen((P+Q)/2) cos((P−Q)/2)"],
            ["sen P − sen Q", "2 cos((P+Q)/2) sen((P−Q)/2)"],
            ["cos P + cos Q", "2 cos((P+Q)/2) cos((P−Q)/2)"],
            ["cos P − cos Q", "−2 sen((P+Q)/2) sen((P−Q)/2)"],
          ],
          resaltadas: [0, 2],
          colorAuto: false,
        },
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // MÓDULO 5 — FUNCIONES TRIGONOMÉTRICAS
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "funciones_trig",
    nombre: "Funciones Trigonométricas",
    icon: "〰️",
    color: "#ffa657",
    temas: [
      {
        id: "grafica_seno",
        titulo: "Función Seno",
        definicion: "La función seno y = sen(θ) es una función periódica de periodo 2π.\n\nCaracterísticas:\n• Dominio: ℝ (todos los reales)\n• Rango: [−1, 1]\n• Periodo: 2π\n• Amplitud: 1\n• Ceros: en θ = nπ, n ∈ ℤ",
        formula: "y = A\\sen(B\\theta + C) + D",
        visual: "grafica",
        graficaFn: "sen",
        notas: [
          "A es la amplitud (escala vertical).",
          "2π/B es el periodo de la función.",
          "C/B es el desplazamiento de fase horizontal.",
          "D es el desplazamiento vertical.",
        ],
      },
      {
        id: "grafica_coseno",
        titulo: "Función Coseno",
        definicion: "La función coseno y = cos(θ) es una función par (simétrica respecto al eje Y) y periódica de periodo 2π.\n\n• Dominio: ℝ\n• Rango: [−1, 1]\n• Periodo: 2π\n• Máximo en θ = 2nπ, mínimo en θ = (2n+1)π",
        formula: "y = \\cos(\\theta) = \\sen\\!\\left(\\theta + \\frac{\\pi}{2}\\right)",
        visual: "grafica",
        graficaFn: "cos",
        notas: [
          "cos(θ) es la versión desplazada de sen(θ) en π/2.",
          "Es una función par: cos(−θ) = cos(θ).",
          "La gráfica empieza en su máximo (1) cuando θ = 0.",
        ],
      },
      {
        id: "grafica_tangente",
        titulo: "Función Tangente",
        definicion: "La función tangente y = tan(θ) tiene asíntotas verticales donde cos θ = 0 y es periódica de periodo π.\n\n• Dominio: ℝ − {π/2 + nπ}\n• Rango: ℝ (todos los reales)\n• Periodo: π\n• Función impar: tan(−θ) = −tan(θ)",
        formula: "y = \\tan\\theta = \\frac{\\sen\\theta}{\\cos\\theta}",
        visual: "grafica",
        graficaFn: "tan",
        notas: [
          "Asíntotas verticales en θ = π/2 + nπ.",
          "Es una función impar: tan(−θ) = −tan(θ).",
          "El periodo es π (la mitad que sen y cos).",
          "Crece sin límite cerca de las asíntotas.",
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // MÓDULO 6 — TRIÁNGULOS OBLICUOS
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "triangulos",
    nombre: "Triángulos Oblicuos",
    icon: "🔺",
    color: "#79c0ff",
    temas: [
      {
        id: "ley_senos",
        titulo: "Ley de Senos",
        definicion: "La ley de senos establece que en cualquier triángulo, el cociente entre cada lado y el seno del ángulo opuesto es constante.\n\nSe aplica cuando se conoce:\n• Un ángulo y el lado opuesto a él, más otro dato (ALA o LAL).",
        formula: "\\frac{a}{\\sen A} = \\frac{b}{\\sen B} = \\frac{c}{\\sen C} = 2R",
        notas: [
          "R es el radio de la circunferencia circunscrita al triángulo.",
          "Caso ALA (ángulo-lado-ángulo): se puede resolver directamente.",
          "Caso LAA puede tener 0, 1 o 2 soluciones (caso ambiguo).",
          "Siempre verificar si el triángulo existe antes de resolver.",
        ],
        tabla: {
          titulo: "Cuándo usar la Ley de Senos",
          encabezados: ["Datos conocidos", "Incógnita", "Aplicable"],
          filas: [
            ["ALA (2 ángulos + lado)", "lados restantes", "✓"],
            ["LAA (lado + 2 ángulos)", "otros lados", "✓ (revisar caso ambiguo)"],
            ["LLL (3 lados)", "ángulos", "✗ (usar Ley de Cosenos)"],
            ["LAL (2 lados + ángulo)", "lado restante", "✗ (usar Ley de Cosenos)"],
          ],
          resaltadas: [0, 1],
          colorAuto: false,
        },
      },
      {
        id: "ley_cosenos",
        titulo: "Ley de Cosenos",
        definicion: "La ley de cosenos generaliza el Teorema de Pitágoras a cualquier triángulo.\n\nSe aplica cuando se conoce:\n• Dos lados y el ángulo comprendido (LAL).\n• Los tres lados (LLL).",
        formula: "a^2 = b^2 + c^2 - 2bc\\cos A",
        notas: [
          "Cuando A = 90°, se reduce al Teorema de Pitágoras.",
          "Existen tres formas según cuál lado se despeja: a, b o c.",
          "Para encontrar ángulos: cos A = (b² + c² − a²) / (2bc).",
          "Siempre da una única solución (no hay ambigüedad).",
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // MÓDULO 7 — TRIGONOMETRÍA INVERSA
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "inversa",
    nombre: "Trigonometría Inversa",
    icon: "↩️",
    color: "#ff7b72",
    temas: [
      {
        id: "arcsen_arccos",
        titulo: "Arcoseno y Arcocoseno",
        definicion: "Las funciones inversas arcoseno y arcocoseno recuperan el ángulo a partir de una razón trigonométrica.\n\nSu dominio es restringido para que sean funciones (cada valor de entrada produce un único ángulo de salida).",
        formula: "y = \\arcsen(x) \\Leftrightarrow \\sen(y) = x, \\quad y \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]",
        notas: [
          "arcsen tiene dominio [−1, 1] y rango [−π/2, π/2].",
          "arccos tiene dominio [−1, 1] y rango [0, π].",
          "arcsen(−x) = −arcsen(x) (función impar).",
          "arccos(−x) = π − arccos(x).",
        ],
        tabla: {
          titulo: "Valores notables de arcoseno",
          encabezados: ["arcsen(x)", "x", "Ángulo"],
          filas: [
            ["arcsen(0)", "0", "0°"],
            ["arcsen(1/2)", "0.5", "30°"],
            ["arcsen(√2/2)", "0.7071", "45°"],
            ["arcsen(√3/2)", "0.8660", "60°"],
            ["arcsen(1)", "1", "90°"],
          ],
          resaltadas: [2],
          colorAuto: false,
        },
      },
      {
        id: "arctan",
        titulo: "Arcotangente",
        definicion: "La función arcotangente es la inversa de la tangente, con rango restringido a (−π/2, π/2).\n\nEs especialmente útil en coordenadas polares y cálculo de ángulos de dirección.",
        formula: "y = \\arctan(x) \\Leftrightarrow \\tan(y) = x, \\quad y \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)",
        notas: [
          "El dominio de arctan es ℝ (todos los reales).",
          "lim(x→+∞) arctan(x) = π/2",
          "lim(x→−∞) arctan(x) = −π/2",
          "arctan(1) = π/4 = 45°",
          "En programación se usa atan2(y, x) para preservar el cuadrante.",
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // MÓDULO 8 — ECUACIONES TRIGONOMÉTRICAS  [NUEVO]
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "ecuaciones_trig",
    nombre: "Ecuaciones Trigonométricas",
    icon: "⚖️",
    color: "#e3b341",
    temas: [
      {
        id: "ecuaciones_basicas",
        titulo: "Ecuaciones Trigonométricas Básicas",
        definicion: "Una ecuación trigonométrica es una igualdad que involucra funciones trigonométricas y es verdadera solo para ciertos valores de la variable. Difiere de una identidad, que es válida para todo el dominio.\n\nSolución general — por la periodicidad, si θ₀ es solución, también lo es θ₀ + nT:\n• sen x = k → x = arcsen(k) + 2nπ   o   x = π − arcsen(k) + 2nπ\n• cos x = k → x = ±arccos(k) + 2nπ\n• tan x = k → x = arctan(k) + nπ\n\nSoluciones en [0,2π): buscar la solución general y seleccionar los valores de n que caen en el intervalo.",
        formula: "\\sen x = k \\Rightarrow x = \\arcsen(k)+2n\\pi \\quad \\text{o} \\quad x = \\pi-\\arcsen(k)+2n\\pi",
        notas: [
          "Ejemplo: sen x = √3/2 → x = π/3 y x = 2π/3 en [0,2π).",
          "Ejemplo: cos x = −1/2 → x = 2π/3 y x = 4π/3 en [0,2π).",
          "Si |k| > 1 para seno o coseno, no hay soluciones reales.",
          "La tangente tiene periodo π; su solución general usa nπ.",
        ],
        tabla: {
          titulo: "Soluciones en [0, 2π) para ecuaciones básicas",
          encabezados: ["Ecuación", "Soluciones en [0, 2π)"],
          filas: [
            ["sen x = 1/2", "π/6,  5π/6"],
            ["cos x = √3/2", "π/6,  11π/6"],
            ["tan x = 1", "π/4,  5π/4"],
            ["sen x = −1", "3π/2"],
            ["cos x = 0", "π/2,  3π/2"],
          ],
          resaltadas: [0, 2],
          colorAuto: false,
        },
      },
      {
        id: "ecuaciones_factorizacion",
        titulo: "Ecuaciones por Factorización",
        definicion: "Cuando la ecuación contiene un producto de factores trigonométricos, se iguala a cero y se aplica la propiedad del cero.\n\nMétodo:\n1. Llevar todo al primer miembro.\n2. Factorizar la expresión.\n3. Igualar cada factor a cero.\n4. Resolver cada ecuación básica resultante.\n\nEjemplo: 2 sen x cos x − sen x = 0\n→ sen x(2 cos x − 1) = 0\n→ sen x = 0 → x = 0, π\n→ cos x = 1/2 → x = π/3, 5π/3\n\nHomogeneización — expresar todo en una sola función mediante identidades.\nEjemplo: cos(2x) = sen x → 1 − 2sen²x = sen x",
        formula: "\\sen x(2\\cos x - 1) = 0 \\Rightarrow \\sen x = 0 \\quad \\text{o} \\quad \\cos x = \\frac{1}{2}",
        notas: [
          "Ejemplo: sen x · cos x = 0 → sen x = 0 o cos x = 0.",
          "Nunca dividir ambos lados por sen x o cos x (se pierden soluciones).",
          "Siempre verificar las soluciones en la ecuación original.",
          "La homogeneización con identidades de doble ángulo es muy frecuente.",
        ],
      },
      {
        id: "ecuaciones_cuadraticas",
        titulo: "Ecuaciones Trigonométricas Cuadráticas",
        definicion: "Una ecuación cuadrática trigonométrica tiene la forma:\nau² + bu + c = 0  donde u = sen x, cos x o tan x.\n\nMétodo:\n1. Sustituir u = sen x (o cos x, tan x).\n2. Resolver la cuadrática para u.\n3. Descartar |u| > 1 si u = sen x o cos x.\n4. Resolver la ecuación trigonométrica básica para x.\n\nEjemplo: 2cos²x − cos x − 1 = 0\n→ (2cos x + 1)(cos x − 1) = 0\n→ cos x = −1/2 → x = 2π/3, 4π/3\n→ cos x = 1 → x = 0\nSoluciones: {0, 2π/3, 4π/3}",
        formula: "2\\cos^2 x - \\cos x - 1 = 0 \\Rightarrow (2\\cos x+1)(\\cos x-1) = 0",
        notas: [
          "sen x = −2 no tiene solución (|−2| > 1).",
          "Siempre considerar los dos factores de la cuadrática.",
          "Ejemplo: 2sen²x + 3 sen x − 2 = 0 → sen x = 1/2 (la raíz −2 se descarta).",
          "Se puede usar la fórmula cuadrática si no factoriza fácilmente.",
        ],
      },
      {
        id: "ecuaciones_argumento_multiple",
        titulo: "Ecuaciones con Argumento Múltiple",
        definicion: "Cuando la variable aparece multiplicada: sen(nx) = k.\n\nMétodo:\n1. Sustituir u = nx.\n2. Ampliar el intervalo: si x ∈ [0,2π) → u ∈ [0, 2nπ).\n3. Encontrar todas las soluciones en [0, 2nπ).\n4. Dividir entre n.\n→ El número de soluciones en [0,2π) es 2n (para |k| < 1).\n\nEjemplo: sen(3x) = 1/2, x ∈ [0,2π)\n→ u = 3x ∈ [0,6π)\n→ u = π/6, 5π/6, π/6+2π, 5π/6+2π, π/6+4π, 5π/6+4π\n→ x = π/18, 5π/18, 13π/18, 17π/18, 25π/18, 29π/18 (6 soluciones)",
        formula: "\\sen(nx) = k \\Rightarrow u = nx,\\quad u \\in [0, 2n\\pi), \\quad x = u/n",
        notas: [
          "Hay 2n soluciones en [0,2π) para |k| < 1 con argumento nx.",
          "Ejemplo: sen(2x) = cos x → sen x(2cos x − 1) = 0.",
          "En problemas de aplicación (temperatura, olas), descartar t < 0.",
          "También aplica a cos(nx) = k y tan(nx) = k con período adaptado.",
        ],
      },
    ],
  },
];

// ════════════════════════════════════════════════════════════════════════════
// BANCO DE QUIZZES
// ════════════════════════════════════════════════════════════════════════════
export const QUIZZES = [
  // ── Ángulos y Medición ────────────────────────────────────────────────────
  {
    nivel: "Ángulos y Medición",
    pregunta: "¿Cuántos radianes equivalen a 180°?",
    opciones: ["2π", "π/2", "π", "3π/2"],
    correcta: 2,
    explicacion: "180° × (π/180°) = π radianes.",
  },
  {
    nivel: "Ángulos y Medición",
    pregunta: "¿Cuántos grados equivalen a π/3 radianes?",
    opciones: ["30°", "45°", "60°", "90°"],
    correcta: 2,
    explicacion: "π/3 × (180°/π) = 60°.",
  },
  {
    nivel: "Ángulos y Medición",
    pregunta: "Un ángulo de 450° es co-terminal con:",
    opciones: ["360°", "45°", "90°", "270°"],
    correcta: 2,
    explicacion: "450° − 360° = 90°. Los ángulos co-terminales difieren en múltiplos de 360°.",
  },
  {
    nivel: "Ángulos y Medición",
    pregunta: "¿Qué tipo de ángulo mide exactamente 90°?",
    opciones: ["Agudo", "Obtuso", "Recto", "Llano"],
    correcta: 2,
    explicacion: "Un ángulo recto mide exactamente 90°.",
  },
  {
    nivel: "Ángulos y Medición",
    pregunta: "¿Cuántos radianes equivalen a 270°?",
    opciones: ["π", "2π", "3π/2", "π/2"],
    correcta: 2,
    explicacion: "270° × (π/180°) = 3π/2 radianes.",
  },
  // ── Razones Trigonométricas ───────────────────────────────────────────────
  {
    nivel: "Razones Trigonométricas",
    pregunta: "En un triángulo rectángulo, sen θ se define como:",
    opciones: ["adyacente/hipotenusa", "opuesto/hipotenusa", "opuesto/adyacente", "hipotenusa/opuesto"],
    correcta: 1,
    explicacion: "sen θ = opuesto / hipotenusa (lado opuesto al ángulo entre la hipotenusa).",
  },
  {
    nivel: "Razones Trigonométricas",
    pregunta: "¿Cuál es el valor de sen 30°?",
    opciones: ["√3/2", "√2/2", "1", "1/2"],
    correcta: 3,
    explicacion: "sen 30° = 1/2. Es uno de los ángulos notables fundamentales.",
  },
  {
    nivel: "Razones Trigonométricas",
    pregunta: "¿Cuál es el valor de cos 60°?",
    opciones: ["√3/2", "1/2", "√2/2", "0"],
    correcta: 1,
    explicacion: "cos 60° = 1/2.",
  },
  {
    nivel: "Razones Trigonométricas",
    pregunta: "¿Cuál es el valor de tan 45°?",
    opciones: ["√3", "√3/3", "1", "√2/2"],
    correcta: 2,
    explicacion: "tan 45° = sen 45° / cos 45° = (√2/2) / (√2/2) = 1.",
  },
  {
    nivel: "Razones Trigonométricas",
    pregunta: "La secante de un ángulo es el recíproco de:",
    opciones: ["seno", "coseno", "tangente", "cotangente"],
    correcta: 1,
    explicacion: "sec θ = 1/cos θ. La secante es el recíproco del coseno.",
  },
  {
    nivel: "Razones Trigonométricas",
    pregunta: "¿Cuál es el valor de sen 90°?",
    opciones: ["0", "√2/2", "√3/2", "1"],
    correcta: 3,
    explicacion: "sen 90° = 1, que corresponde al máximo de la función seno.",
  },
  // ── Círculo Unitario ──────────────────────────────────────────────────────
  {
    nivel: "Círculo Unitario",
    pregunta: "En el círculo unitario, la coordenada x de un punto corresponde a:",
    opciones: ["sen θ", "tan θ", "cos θ", "csc θ"],
    correcta: 2,
    explicacion: "En el círculo unitario, P = (cos θ, sen θ), por lo que x = cos θ.",
  },
  {
    nivel: "Círculo Unitario",
    pregunta: "¿En qué cuadrante es el coseno negativo y el seno positivo?",
    opciones: ["Cuadrante I", "Cuadrante II", "Cuadrante III", "Cuadrante IV"],
    correcta: 1,
    explicacion: "En el cuadrante II, x < 0 (cos negativo) y y > 0 (sen positivo).",
  },
  {
    nivel: "Círculo Unitario",
    pregunta: "¿Cuál es la ecuación del círculo unitario?",
    opciones: ["x + y = 1", "x² + y² = 1", "x² − y² = 1", "x·y = 1"],
    correcta: 1,
    explicacion: "El círculo unitario tiene radio 1 centrado en el origen: x² + y² = 1.",
  },
  {
    nivel: "Círculo Unitario",
    pregunta: "El punto en el círculo unitario para θ = 0° es:",
    opciones: ["(0, 1)", "(1, 0)", "(0, −1)", "(−1, 0)"],
    correcta: 1,
    explicacion: "Para θ = 0°: cos 0° = 1, sen 0° = 0. Entonces P = (1, 0).",
  },
  // ── Identidades ───────────────────────────────────────────────────────────
  {
    nivel: "Identidades Trigonométricas",
    pregunta: "La identidad pitagórica principal es:",
    opciones: ["sen²θ − cos²θ = 1", "sen²θ + cos²θ = 1", "tan²θ + 1 = sen²θ", "cos²θ − sen²θ = 0"],
    correcta: 1,
    explicacion: "sen²θ + cos²θ = 1 se deriva directamente del Teorema de Pitágoras en el círculo unitario.",
  },
  {
    nivel: "Identidades Trigonométricas",
    pregunta: "¿Cuál es la fórmula de doble ángulo para sen(2θ)?",
    opciones: ["sen²θ + cos²θ", "2sen²θ", "2 sen θ cos θ", "cos²θ − sen²θ"],
    correcta: 2,
    explicacion: "sen(2θ) = 2 sen θ cos θ. Esta fórmula se deriva de la adición de ángulos con α = β = θ.",
  },
  {
    nivel: "Identidades Trigonométricas",
    pregunta: "¿Cuál es equivalente a 1 + tan²θ?",
    opciones: ["csc²θ", "sec²θ", "cos²θ", "cot²θ"],
    correcta: 1,
    explicacion: "Dividiendo la identidad pitagórica entre cos²θ: sen²θ/cos²θ + 1 = 1/cos²θ → tan²θ + 1 = sec²θ.",
  },
  // ── Funciones Trigonométricas ─────────────────────────────────────────────
  {
    nivel: "Funciones Trigonométricas",
    pregunta: "¿Cuál es el periodo de la función y = sen(θ)?",
    opciones: ["π/2", "π", "2π", "4π"],
    correcta: 2,
    explicacion: "La función seno tiene periodo 2π: sen(θ + 2π) = sen(θ).",
  },
  {
    nivel: "Funciones Trigonométricas",
    pregunta: "¿Cuál es el rango de y = cos(θ)?",
    opciones: ["[0, 1]", "[−1, 1]", "(−∞, ∞)", "[0, π]"],
    correcta: 1,
    explicacion: "El coseno siempre está entre −1 y 1: −1 ≤ cos(θ) ≤ 1.",
  },
  {
    nivel: "Funciones Trigonométricas",
    pregunta: "¿Cuál es el periodo de la función tangente?",
    opciones: ["2π", "π/2", "π", "4π"],
    correcta: 2,
    explicacion: "La función tangente tiene periodo π: tan(θ + π) = tan(θ).",
  },
  // ── Triángulos Oblicuos ───────────────────────────────────────────────────
  {
    nivel: "Triángulos Oblicuos",
    pregunta: "La Ley de Senos establece que a/sen A es igual a:",
    opciones: ["b·sen B", "b/sen B", "c/cos C", "2·area"],
    correcta: 1,
    explicacion: "a/sen A = b/sen B = c/sen C = 2R. Cada lado dividido entre el seno del ángulo opuesto es constante.",
  },
  {
    nivel: "Triángulos Oblicuos",
    pregunta: "La Ley de Cosenos generaliza al Teorema de Pitágoras cuando el ángulo A es:",
    opciones: ["45°", "60°", "30°", "90°"],
    correcta: 3,
    explicacion: "Cuando A = 90°, cos 90° = 0, así a² = b² + c² − 2bc(0) = b² + c² (Teorema de Pitágoras).",
  },
  {
    nivel: "Triángulos Oblicuos",
    pregunta: "¿Cuándo se usa la Ley de Cosenos en lugar de la Ley de Senos?",
    opciones: ["ALA", "LAA", "LLL", "Nunca"],
    correcta: 2,
    explicacion: "La Ley de Cosenos se usa con LLL (3 lados) o LAL (2 lados y ángulo incluido).",
  },
  // ── Trigonometría Inversa ─────────────────────────────────────────────────
  {
    nivel: "Trigonometría Inversa",
    pregunta: "¿Cuál es el rango de la función arcoseno?",
    opciones: ["[0, π]", "[−π, π]", "[−π/2, π/2]", "(−π/2, π/2)"],
    correcta: 2,
    explicacion: "arcsen tiene rango [−π/2, π/2] para que sea biyectiva (una salida por entrada).",
  },
  {
    nivel: "Trigonometría Inversa",
    pregunta: "¿Cuánto vale arctan(1)?",
    opciones: ["π/6", "π/3", "π/4", "π/2"],
    correcta: 2,
    explicacion: "arctan(1) = π/4 porque tan(π/4) = 1.",
  },
  {
    nivel: "Trigonometría Inversa",
    pregunta: "¿Cuál es el dominio de arcsen(x)?",
    opciones: ["ℝ", "[0, π]", "[−1, 1]", "(−∞, −1] ∪ [1, ∞)"],
    correcta: 2,
    explicacion: "arcsen solo está definida para x ∈ [−1, 1], que es el rango del seno.",
  },

  // Sistema Sexagesimal
  {
    nivel: "Angulos y Medicion",
    pregunta: "Cuanto mide en forma decimal el angulo 47 grados 30' 18''?",
    opciones: ["47.33", "47.505", "47.56", "47.3"],
    correcta: 1,
    explicacion: "47 + 30/60 + 18/3600 = 47.505 grados.",
  },
  {
    nivel: "Angulos y Medicion",
    pregunta: "Una aspa de 50 cm gira 120 grados (2pi/3 rad). Que longitud de arco describe?",
    opciones: ["pi/2 m", "pi/3 m", "2pi/3 m", "pi m"],
    correcta: 1,
    explicacion: "L = r*theta = 0.50 x (2pi/3) = pi/3 aprox 1.047 m.",
  },
  { nivel: "Angulos y Medicion", pregunta: "En que cuadrante se ubica el angulo -250?", opciones: ["Cuadrante I", "Cuadrante II", "Cuadrante III", "Cuadrante IV"], correcta: 1, explicacion: "Co-terminal positivo: -250 + 360 = 110. Como 90 < 110 < 180, esta en Q II." },
  { nivel: "Angulos y Medicion", pregunta: "Cual es el angulo de referencia de 210 grados?", opciones: ["30", "60", "150", "210"], correcta: 0, explicacion: "210 en Q III: angulo de referencia = 210 - 180 = 30 grados." },
  { nivel: "Circulo Unitario", pregunta: "Para y = 3*sen(2x - pi/3) + 1, cual es la amplitud?", opciones: ["1", "2", "3", "pi/3"], correcta: 2, explicacion: "|A| = |3| = 3. La amplitud es el coeficiente absoluto." },
  { nivel: "Circulo Unitario", pregunta: "Para y = 2*cos(pi*x) - 1, cual es el periodo?", opciones: ["pi", "2", "2pi", "1"], correcta: 1, explicacion: "T = 2pi / |B| = 2pi / pi = 2." },
  { nivel: "Circulo Unitario", pregunta: "En y = A*sen(Bx+C)+D, el desplazamiento vertical es:", opciones: ["A", "B", "C", "D"], correcta: 3, explicacion: "D determina el eje de oscilacion." },
  { nivel: "Identidades Trigonometricas", pregunta: "La formula de sen(A/2) es:", opciones: ["+-sqrt((1+cosA)/2)", "+-sqrt((1-cosA)/2)", "senA/2", "cosA/2"], correcta: 1, explicacion: "sen(A/2) = +-sqrt((1-cos A)/2). El signo depende del cuadrante de A/2." },
  { nivel: "Identidades Trigonometricas", pregunta: "tan(A/2) sin ambiguedad de signo es:", opciones: ["+-sqrt((1-cosA)/(1+cosA))", "(1-cosA)/senA", "senA/(1-cosA)", "cosA/senA"], correcta: 1, explicacion: "tan(A/2) = (1-cos A)/sen A." },
  { nivel: "Identidades Trigonometricas", pregunta: "El resultado de 2*sen(3x)*cos(x) usando producto->suma es:", opciones: ["cos4x+cos2x", "sen4x+sen2x", "sen4x-sen2x", "cos2x-cos4x"], correcta: 1, explicacion: "2 sen A cos B = sen(A+B)+sen(A-B) = sen4x+sen2x." },
  { nivel: "Circulo Unitario", pregunta: "Un poste tiene sombra de 12 m con angulo de elevacion solar de 35. Su altura es aprox:", opciones: ["6.88 m", "8.40 m", "17.1 m", "14.3 m"], correcta: 1, explicacion: "tan(35) = h/12 ? h = 12*tan(35) � 8.40 m." },
  { nivel: "Ecuaciones Trigonometricas", pregunta: "Cuantas soluciones tiene sen(x) = sqrt(3)/2 en [0, 2pi)?", opciones: ["0", "1", "2", "Infinitas"], correcta: 2, explicacion: "x = pi/3 (Q I) y x = 2pi/3 (Q II)." },
  { nivel: "Ecuaciones Trigonometricas", pregunta: "La solucion general de tan(x) = k es:", opciones: ["x = arctan(k) + 2n*pi", "x = arctan(k) + n*pi", "x = +-arctan(k) + n*pi", "x = arctan(k)"], correcta: 1, explicacion: "Tangente tiene periodo pi; solucion general x = arctan(k) + n*pi." },
  { nivel: "Ecuaciones Trigonometricas", pregunta: "Al resolver 2cos^2(x) - cos(x) - 1 = 0, la factorizacion da:", opciones: ["(cos(x)-1)(2cos(x)+1)=0", "(cos(x)+1)(2cos(x)-1)=0", "cos(x)(2cos(x)-1)=0", "(cos(x)-1)^2=0"], correcta: 0, explicacion: "2cos^2(x) - cos(x) - 1 = (2cos(x)+1)(cos(x)-1) = 0." },
  { nivel: "Ecuaciones Trigonometricas", pregunta: "Cuantas soluciones tiene sen(3x) = 1/2 en [0, 2pi)?", opciones: ["2", "3", "6", "4"], correcta: 2, explicacion: "Para argumento 3x hay 2x3=6 soluciones cuando |k| < 1." },
  { nivel: "Ecuaciones Trigonometricas", pregunta: "Para resolver 2*sen(x)*cos(x) - sen(x) = 0, el primer paso es:", opciones: ["Dividir entre sen(x)", "Factorizar: sen(x)(2cos(x)-1)=0", "Usar identidad doble angulo", "Elevar al cuadrado"], correcta: 1, explicacion: "Factorizamos sen(x)(2cos(x)-1)=0. No dividir por sen(x)." },
  { nivel: "Ecuaciones Trigonometricas", pregunta: "La solucion de cos(x) = -1/2 en [0, 2pi) es:", opciones: ["pi/3, 5pi/3", "2pi/3, 4pi/3", "pi/6, 5pi/6", "pi/4, 3pi/4"], correcta: 1, explicacion: "Coseno negativo ? Q II (2pi/3) y Q III (4pi/3)." },
  { nivel: "Ecuaciones Trigonometricas", pregunta: "2*sen^2(x) + 3*sen(x) - 2 = 0 tiene soluciones validas:", opciones: ["sen(x)=2 y sen(x)=-1/2", "sen(x)=1/2 (la raiz -2 se descarta)", "sen(x)=-2 y sen(x)=1/2", "No tiene soluciones"], correcta: 1, explicacion: "(2sen(x)-1)(sen(x)+2)=0. Como |-2|>1 se descarta." },
  { nivel: "Ecuaciones Trigonometricas", pregunta: "Para resolver sen(2x) = sen(x), el metodo correcto es:", opciones: ["Dividir entre sen(x)", "Usar sen(2x)=2sen(x)cos(x) y factorizar", "Elevar al cuadrado", "Sustituir u=2x"], correcta: 1, explicacion: "2sen(x)cos(x)=sen(x) ? sen(x)(2cos(x)-1)=0." },
];
