/*
 * ATENEA-464-2026 tracking board.
 *
 * Single source of data for the rendered page. Edit `DATA` to update the board;
 * `docs/plan.md` is the authored narrative source of truth and must stay in sync.
 *
 * User-facing copy is Spanish on purpose: the stakeholder is a Colombian public
 * agency and every source document (minuta, proposal V3.0) is Spanish.
 */
"use strict";

const TOTAL_WEEKS = 22;

/* Rendered on GitHub Pages, so the plan links to the repository blob view: Pages
 * serves a bare .md file as a download rather than a readable page. */
const PLAN_URL =
  "https://github.com/LIAUNAL/atenea-seguimiento/blob/main/docs/plan.md";

/* M1 = S1-S4, M2 = S5-S9, M3 = S10-S13, M4 = S14-S18, M5 = S19-S22 */
const MONTHS = [
  { id: "M1", label: "Mes 1", from: 1, to: 4 },
  { id: "M2", label: "Mes 2", from: 5, to: 9 },
  { id: "M3", label: "Mes 3", from: 10, to: 13 },
  { id: "M4", label: "Mes 4", from: 14, to: 18 },
  { id: "M5", label: "Mes 5", from: 19, to: 22 },
];

const DATA = {
  contract: {
    code: "ATENEA-464-2026",
    objeto:
      "Prestar servicios para fortalecer las capacidades institucionales de la Agencia " +
      "para mejorar el ciclo de vida de la ingeniería de software, mediante el uso de " +
      "inteligencia artificial.",
    meta: [
      ["Contrato", "ATENEA-464-2026"],
      ["Partes", "Agencia ATENEA — Universidad Nacional de Colombia, Sede Manizales"],
      ["Plazo", "Hasta 5 meses desde el acta de inicio (22 semanas)"],
      ["Lugar de ejecución", "Bogotá D.C."],
      ["Supervisión", "Subgerente de TIC de ATENEA"],
      ["Dirección del proyecto", "Jorge Iván Montes Monsalve · Andrés Marino Álvarez Meza"],
      ["Ejecutor", "Laboratorio de Inteligencia Artificial, UNAL Sede Manizales (LIAUNAL)"],
    ],
  },

  /* status: "pending" | "in_progress" | "done" */
  activities: [
    { id: "A1", name: "Kickoff, acta de inicio, garantías y plan de trabajo", from: 1, to: 2, c: ["C1"], e: [], status: "pending" },
    { id: "A2", name: "Diagnóstico técnico, operativo y organizacional", from: 1, to: 2, c: ["C1"], e: ["E1"], status: "pending" },
    { id: "A3", name: "Definición de la metodología SDLC-IA", from: 2, to: 2, c: ["C2"], e: ["E2"], status: "pending" },
    { id: "A4", name: "Priorización y arquitectura del caso de uso institucional", from: 2, to: 3, c: ["C3"], e: ["E3"], status: "pending" },
    { id: "A5", name: "Entornos, herramientas y accesos", from: 3, to: 3, c: ["C3", "C4"], e: [], status: "pending" },
    { id: "A6", name: "Desarrollo del primer conjunto de agentes y skills", from: 3, to: 4, c: ["C4"], e: ["E4"], status: "pending" },
    { id: "A7", name: "Arneses de prueba iniciales y validación funcional", from: 4, to: 4, c: ["C4", "C6"], e: ["E4"], status: "pending" },
    { id: "A8", name: "Ingeniería de pruebas y validación", from: 5, to: 6, c: ["C6"], e: ["E5"], status: "pending" },
    { id: "A9", name: "Integración de agentes en los flujos de trabajo", from: 5, to: 7, c: ["C4", "C5"], e: ["E4"], status: "pending" },
    { id: "A10", name: "Puesta en marcha de agentes y skills", from: 7, to: 9, c: ["C5"], e: ["E4"], status: "pending" },
    { id: "A11", name: "Workshop de transferencia #1", from: 8, to: 8, c: ["C8"], e: ["E7"], status: "pending" },
    { id: "A12", name: "Despliegue piloto en el proceso misional", from: 10, to: 12, c: ["C7"], e: ["E5"], status: "pending" },
    { id: "A13", name: "Validación y ajustes del despliegue", from: 11, to: 13, c: ["C6", "C7"], e: ["E5"], status: "pending" },
    { id: "A14", name: "Ampliación del despliegue y endurecimiento", from: 14, to: 16, c: ["C7"], e: ["E5"], status: "pending" },
    { id: "A15", name: "Documentación técnica y operativa", from: 15, to: 17, c: ["C8"], e: ["E6"], status: "pending" },
    { id: "A16", name: "Workshop de transferencia #2", from: 18, to: 18, c: ["C8"], e: ["E7"], status: "pending" },
    { id: "A17", name: "Pruebas de aceptación y cierre técnico", from: 19, to: 20, c: ["C6", "C7"], e: ["E5"], status: "pending" },
    { id: "A18", name: "Documentación final y manuales de operación", from: 19, to: 21, c: ["C8"], e: ["E6"], status: "pending" },
    { id: "A19", name: "Workshop de transferencia #3", from: 21, to: 21, c: ["C8"], e: ["E7"], status: "pending" },
    { id: "A20", name: "Informe final, cierre y presentación de resultados", from: 22, to: 22, c: ["C8"], e: ["E8"], status: "pending" },
  ],

  milestones: [
    {
      id: "H1i",
      week: 4,
      label: "Hito 1 — meta interna",
      scope: "C1–C4 · E1–E4",
      kind: "internal",
      note: "Aceleración interna por decisión de la dirección del proyecto. El contrato lo ubica al cierre del Mes 3.",
    },
    {
      id: "H1c",
      week: 13,
      label: "Hito 1 — contractual",
      scope: "C1–C4 consolidados · E1–E4",
      kind: "contractual",
      note: "Fecha formal según la minuta y la propuesta V3.0.",
    },
    {
      id: "H2",
      week: 22,
      label: "Hito 2 — contractual",
      scope: "C5–C8 · E5–E8",
      kind: "contractual",
      note: "Cierre del contrato.",
    },
  ],

  /* Semanales durante los dos primeros meses (S1-S9), quincenales después, cierre en S22. */
  meetings: {
    weekly: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    biweekly: [11, 13, 15, 17, 19, 21],
    closing: [22],
    agenda: [
      "Avance por componente activo",
      "Entregables en curso",
      "Riesgos y bloqueos",
      "Decisiones requeridas de ATENEA",
      "Compromisos para el siguiente período",
    ],
    milestoneNote:
      "Las reuniones de hito (S4, S13 y S22) añaden la presentación formal de entregables.",
  },

  components: [
    ["C1", "Diagnóstico técnico, operativo y organizacional", 1],
    ["C2", "Metodología SDLC-IA", 1],
    ["C3", "Caso de uso institucional", 1],
    ["C4", "Agentes inteligentes", 1],
    ["C5", "Puesta en marcha de agentes y skills", 2],
    ["C6", "Ingeniería de pruebas y validación", 2],
    ["C7", "Despliegue en proceso misional", 2],
    ["C8", "Documentación técnica, operativa y transferencia metodológica", 2],
  ],

  deliverables: [
    ["E1", "Informe de diagnóstico", "Mes 1–2"],
    ["E2", "SDLC-IA para ATENEA", "Mes 2"],
    ["E3", "Arquitectura End-to-End", "Mes 2"],
    ["E4", "Sistema de agentes y skills", "Mes 3–4"],
    ["E5", "Despliegue y validación", "Mes 4–5"],
    ["E6", "Documentación técnica y operativa", "Mes 5"],
    ["E7", "Workshop de transferencia", "Mes 2–5"],
    ["E8", "Informe final y cierre", "Mes 5"],
  ],

  startupObligations: [
    [
      "Constitución de garantías (15 % cumplimiento / 20 % calidad / 5 % salarios)",
      "3 días hábiles desde la firma",
      "S1",
    ],
    ["Entrega del plan de trabajo", "8 días hábiles desde el acta de inicio", "S2"],
  ],

  risks: [
    [
      "El Anexo Técnico no está disponible, así que el mapeo actividad→componente es derivado",
      "Alto",
      "Validar el mapeo en la reunión S1 y corregir el plan",
    ],
    [
      "Hito 1 en S4 comprime tres meses de alcance contractual en uno",
      "Alto",
      "Alcance demostrable mínimo por componente en S4; consolidación hasta S13",
    ],
    [
      "La cláusula de confidencialidad prohíbe almacenar información confidencial fuera de las condiciones de seguridad de ATENEA",
      "Alto",
      "Ningún dato real de ATENEA en este repositorio público ni en servicios de modelos externos",
    ],
    [
      "Propiedad intelectual: derechos patrimoniales exclusivos de ATENEA sobre código, agentes y skills",
      "Medio",
      "Repositorios de entregables separados de este tablero y bajo control de ATENEA",
    ],
    [
      "Dependencia de accesos y entornos de ATENEA para A5",
      "Medio",
      "Solicitud de accesos en S1, antes de que A5 sea crítica",
    ],
  ],
};

const STATUS_LABEL = {
  pending: "Pendiente",
  in_progress: "En curso",
  done: "Completada",
};

/* ------------------------------------------------------------------ helpers */

function el(tag, attrs, children) {
  const node = document.createElement(tag);
  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      if (value === null || value === undefined || value === false) continue;
      if (key === "class") node.className = value;
      else if (key === "text") node.textContent = value;
      else node.setAttribute(key, value);
    }
  }
  for (const child of children || []) {
    if (child === null || child === undefined) continue;
    node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
  }
  return node;
}

function weekRange() {
  return Array.from({ length: TOTAL_WEEKS }, (_, i) => i + 1);
}

function monthOf(week) {
  return MONTHS.find((m) => week >= m.from && week <= m.to);
}

function allMeetingWeeks() {
  const m = DATA.meetings;
  return [...m.weekly, ...m.biweekly, ...m.closing].sort((a, b) => a - b);
}

function meetingKind(week) {
  const m = DATA.meetings;
  if (m.closing.includes(week)) return { key: "closing", label: "Cierre" };
  if (m.weekly.includes(week)) return { key: "weekly", label: "Semanal" };
  if (m.biweekly.includes(week)) return { key: "biweekly", label: "Quincenal" };
  return null;
}

function milestoneAt(week) {
  return DATA.milestones.find((h) => h.week === week) || null;
}

function activitiesAt(week) {
  return DATA.activities.filter((a) => week >= a.from && week <= a.to);
}

function codeList(codes, kind) {
  return el(
    "span",
    { class: "codes" },
    codes.map((c) => el("span", { class: "code code-" + kind, text: c }))
  );
}

/* -------------------------------------------------------------------- table */

function simpleTable(caption, headers, rows, opts) {
  const options = opts || {};
  const thead = el("thead", null, [
    el("tr", null, headers.map((h) => el("th", { scope: "col", text: h }))),
  ]);
  const tbody = el(
    "tbody",
    null,
    rows.map((row) =>
      el(
        "tr",
        null,
        row.map((cell, i) =>
          i === 0 && options.rowHeader
            ? el("th", { scope: "row", text: String(cell) })
            : el("td", { text: String(cell) })
        )
      )
    )
  );
  const table = el("table", { class: options.class || "data-table" }, [
    caption ? el("caption", { text: caption }) : null,
    thead,
    tbody,
  ]);
  /* Wide tables must scroll inside their own container instead of pushing the page. */
  return el(
    "div",
    {
      class: "table-scroll",
      tabindex: "0",
      role: "region",
      "aria-label": caption || "Tabla de datos",
    },
    [table]
  );
}

/* ------------------------------------------------------------------- render */

function renderHeader(root) {
  const c = DATA.contract;
  root.appendChild(
    el("section", { class: "card", id: "contrato" }, [
      el("h2", { text: "Contrato " + c.code }),
      el("p", { class: "objeto", text: c.objeto }),
      simpleTable(null, ["Campo", "Valor"], c.meta, { rowHeader: true }),
      el("p", { class: "note note-money" }, [
        el("strong", { text: "Nota. " }),
        "Este tablero no publica cifras monetarias. Las condiciones económicas se " +
          "gestionan por fuera de este repositorio.",
      ]),
    ])
  );
}

function renderScheduleWarning(root) {
  root.appendChild(
    el("section", { class: "callout", id: "aviso", role: "note" }, [
      el("h2", { text: "⚠ Aviso de cronograma" }),
      el("p", null, [
        "Hay ",
        el("strong", { text: "dos cronogramas" }),
        " en este tablero y conviene no confundirlos.",
      ]),
      el("ul", null, [
        el("li", null, [
          el("strong", { text: "Cronograma contractual: " }),
          "la minuta y la propuesta V3.0 ubican el hito 1 (C1–C4) al cierre del ",
          el("strong", { text: "Mes 3 (S13)" }),
          ", y el hito 2 (C5–C8) al cierre del Mes 5.",
        ]),
        el("li", null, [
          el("strong", { text: "Cronograma de seguimiento: " }),
          "este tablero adelanta el hito 1 a la ",
          el("strong", { text: "semana 4" }),
          " por decisión de la dirección del proyecto. Es una ",
          el("strong", { text: "meta interna de aceleración" }),
          ", no una modificación contractual.",
        ]),
      ]),
      el("p", { class: "note" }, [
        "En la práctica, la semana 4 concentra en un mes actividades que el contrato " +
          "distribuye en tres. Las semanas 5 a 13 quedan dedicadas a profundizar, validar y " +
          "consolidar C1–C4 hasta la fecha contractual.",
      ]),
      el("p", { class: "note note-anexo" }, [
        el("strong", { text: "Trazabilidad. " }),
        "El ",
        el("strong", { text: "Anexo Técnico" }),
        " no viene incluido en el PDF de la minuta, aunque las cláusulas SEGUNDA, " +
          "SÉPTIMA y VIGÉSIMA SEGUNDA lo declaran vinculante. Por lo tanto el detalle de " +
          "actividades por componente y el mapeo actividad→componente de este tablero son ",
        el("strong", { text: "derivados" }),
        " y deben validarse contra el Anexo Técnico cuando esté disponible.",
      ]),
    ])
  );
}

function renderSummary(root) {
  const counters = [
    [TOTAL_WEEKS, "semanas"],
    [DATA.activities.length, "actividades"],
    [DATA.components.length, "componentes"],
    [DATA.deliverables.length, "entregables"],
    [allMeetingWeeks().length, "reuniones"],
    [DATA.milestones.length, "hitos"],
  ];
  root.appendChild(
    el("section", { class: "card", id: "resumen" }, [
      el("h2", { text: "Resumen de estado" }),
      el(
        "ul",
        { class: "counters" },
        counters.map(([n, label]) =>
          el("li", null, [
            el("span", { class: "counter-n", text: String(n) }),
            el("span", { class: "counter-label", text: label }),
          ])
        )
      ),
      el("p", { class: "legend-wrap" }, [
        el("span", { class: "legend-title", text: "Estado de las actividades: " }),
        el("span", { class: "legend" }, [
          el("span", { class: "legend-item" }, [
            el("span", { class: "swatch s-pending", "aria-hidden": "true" }),
            "Pendiente",
          ]),
          el("span", { class: "legend-item" }, [
            el("span", { class: "swatch s-in_progress", "aria-hidden": "true" }),
            "En curso",
          ]),
          el("span", { class: "legend-item" }, [
            el("span", { class: "swatch s-done", "aria-hidden": "true" }),
            "Completada",
          ]),
        ]),
      ]),
    ])
  );
}

function renderGantt(root) {
  const weeks = weekRange();

  const monthRow = el("div", { class: "g-row g-months" }, [
    el("div", { class: "g-label g-corner", text: "" }),
    el("div", { class: "g-codes g-corner", text: "" }),
    ...MONTHS.map((m) =>
      el("div", {
        class: "g-month",
        style: "grid-column: span " + (m.to - m.from + 1),
        text: m.label,
      })
    ),
  ]);

  const weekRow = el("div", { class: "g-row g-weeks" }, [
    el("div", { class: "g-label", text: "Actividad" }),
    el("div", { class: "g-codes", text: "C · E" }),
    ...weeks.map((w) => {
      const classes = ["g-week"];
      if (milestoneAt(w)) classes.push("has-hito");
      if (meetingKind(w)) classes.push("has-meeting");
      return el("div", { class: classes.join(" ") }, [
        el("span", { class: "g-week-n", text: "S" + w }),
        meetingKind(w)
          ? el("span", {
              class: "g-pin g-pin-meeting",
              title: "Reunión " + meetingKind(w).label.toLowerCase() + " · S" + w,
              text: "●",
            })
          : null,
        milestoneAt(w)
          ? el("span", {
              class: "g-pin g-pin-hito",
              title: milestoneAt(w).label + " · S" + w,
              text: "◆",
            })
          : null,
      ]);
    }),
  ]);

  const activityRows = DATA.activities.map((a) => {
    const cells = weeks.map((w) => {
      const active = w >= a.from && w <= a.to;
      const classes = ["g-cell"];
      if (milestoneAt(w)) classes.push("col-hito");
      if (!active) return el("div", { class: classes.join(" ") });
      classes.push("g-bar", "s-" + a.status);
      if (w === a.from) classes.push("g-bar-start");
      if (w === a.to) classes.push("g-bar-end");
      return el("div", {
        class: classes.join(" "),
        title:
          a.id +
          " · " +
          a.name +
          " · S" +
          a.from +
          (a.to > a.from ? "–S" + a.to : "") +
          " · " +
          STATUS_LABEL[a.status],
      });
    });
    return el("div", { class: "g-row g-activity" }, [
      el("div", { class: "g-label" }, [
        el("span", { class: "g-id", text: a.id }),
        el("span", { class: "g-name", text: a.name }),
        el("span", { class: "g-status s-text-" + a.status, text: STATUS_LABEL[a.status] }),
      ]),
      el("div", { class: "g-codes" }, [
        codeList(a.c, "c"),
        a.e.length ? codeList(a.e, "e") : el("span", { class: "code code-none", text: "—" }),
      ]),
      ...cells,
    ]);
  });

  const grid = el("div", { class: "gantt", style: "--weeks:" + TOTAL_WEEKS }, [
    monthRow,
    weekRow,
    ...activityRows,
  ]);

  root.appendChild(
    el("section", { class: "card", id: "tablero" }, [
      el("h2", { text: "Vista semanal" }),
      el("p", { class: "note" }, [
        "Cada fila es una actividad; cada columna, una semana del plazo. ",
        el("span", { class: "inline-pin", text: "●" }),
        " marca reunión de seguimiento y ",
        el("span", { class: "inline-pin", text: "◆" }),
        " marca hito. En pantallas angostas el tablero se desplaza en horizontal.",
      ]),
      el("div", { class: "gantt-scroll", tabindex: "0", role: "region", "aria-label": "Cronograma semanal de 22 semanas con 20 actividades" }, [grid]),
    ])
  );

  renderWeekList(root);
}

function renderWeekList(root) {
  const items = weekRange().map((w) => {
    const month = monthOf(w);
    const meeting = meetingKind(w);
    const hito = milestoneAt(w);
    const acts = activitiesAt(w);
    const classes = ["week-card"];
    if (hito) classes.push("is-hito");
    if (hito && hito.kind === "internal") classes.push("is-hito-internal");

    return el("li", { class: classes.join(" ") }, [
      el("div", { class: "week-head" }, [
        el("span", { class: "week-n", text: "S" + w }),
        el("span", { class: "week-month", text: month ? month.label : "" }),
      ]),
      hito
        ? el("p", { class: "week-hito" }, [
            el("strong", { text: "◆ " + hito.label }),
            el("span", { class: "week-hito-scope", text: hito.scope }),
          ])
        : null,
      meeting
        ? el("p", { class: "week-meeting", text: "● Reunión con ATENEA — " + meeting.label })
        : null,
      acts.length
        ? el(
            "ul",
            { class: "week-acts" },
            acts.map((a) =>
              el("li", { class: "s-text-" + a.status }, [
                el("span", { class: "g-id", text: a.id }),
                " " + a.name + " ",
                codeList(a.c, "c"),
                a.e.length ? codeList(a.e, "e") : null,
              ])
            )
          )
        : el("p", { class: "week-empty", text: "Sin actividades programadas" }),
    ]);
  });

  root.appendChild(
    el("section", { class: "card", id: "semanas" }, [
      el("h2", { text: "Detalle semana por semana" }),
      el("ul", { class: "week-grid" }, items),
    ])
  );
}

function renderMilestones(root) {
  root.appendChild(
    el("section", { class: "card", id: "hitos" }, [
      el("h2", { text: "Hitos" }),
      el(
        "ul",
        { class: "hito-list" },
        DATA.milestones.map((h) =>
          el("li", { class: "hito hito-" + h.kind }, [
            el("div", { class: "hito-week" }, [
              el("span", { class: "hito-week-n", text: "S" + h.week }),
              el("span", {
                class: "hito-kind",
                text: h.kind === "internal" ? "meta interna" : "contractual",
              }),
            ]),
            el("div", { class: "hito-body" }, [
              el("h3", { text: h.label }),
              el("p", { class: "hito-scope", text: "Alcance: " + h.scope }),
              el("p", { class: "hito-note", text: h.note }),
            ]),
          ])
        )
      ),
    ])
  );
}

function renderMeetings(root) {
  const m = DATA.meetings;
  const rows = [
    ["Semanal", m.weekly.map((w) => "S" + w).join(", "), m.weekly.length],
    ["Quincenal", m.biweekly.map((w) => "S" + w).join(", "), m.biweekly.length],
    ["Cierre", m.closing.map((w) => "S" + w).join(", "), m.closing.length],
    ["Total", "—", allMeetingWeeks().length],
  ];
  root.appendChild(
    el("section", { class: "card", id: "reuniones" }, [
      el("h2", { text: "Reuniones de seguimiento con ATENEA" }),
      el("p", { class: "note" }, [
        "Semanales durante los dos primeros meses (S1–S9) y quincenales después, con una " +
          "reunión de cierre en S22.",
      ]),
      simpleTable(null, ["Cadencia", "Semanas", "Reuniones"], rows, { rowHeader: true }),
      el("h3", { text: "Agenda estándar" }),
      el("ol", { class: "agenda" }, m.agenda.map((a) => el("li", { text: a }))),
      el("p", { class: "note", text: m.milestoneNote }),
    ])
  );
}

function renderReference(root) {
  root.appendChild(
    el("section", { class: "card", id: "componentes" }, [
      el("h2", { text: "Componentes contractuales" }),
      simpleTable(
        null,
        ["Código", "Componente", "Hito"],
        DATA.components.map(([code, name, hito]) => [code, name, hito]),
        { rowHeader: true }
      ),
    ])
  );
  root.appendChild(
    el("section", { class: "card", id: "entregables" }, [
      el("h2", { text: "Entregables" }),
      simpleTable(
        null,
        ["Código", "Entregable", "Momento estimado (propuesta V3.0)"],
        DATA.deliverables,
        { rowHeader: true }
      ),
    ])
  );
  root.appendChild(
    el("section", { class: "card", id: "arranque" }, [
      el("h2", { text: "Obligaciones de arranque" }),
      simpleTable(null, ["Obligación", "Plazo", "Semana"], DATA.startupObligations, {
        rowHeader: true,
      }),
    ])
  );
  root.appendChild(
    el("section", { class: "card", id: "riesgos" }, [
      el("h2", { text: "Riesgos abiertos" }),
      simpleTable(null, ["Riesgo", "Impacto", "Mitigación"], DATA.risks, { rowHeader: true }),
    ])
  );
}

function renderProvenance(root) {
  root.appendChild(
    el("section", { class: "card", id: "procedencia" }, [
      el("h2", { text: "Procedencia" }),
      el("p", null, [
        "El contenido contractual proviene de la minuta ATENEA-464-2026 y de la propuesta ",
        el("code", { text: "Propuesta_ATENEA_IA_UNAL_Manizales_V3.0.docx" }),
        ". La propuesta V3.0 es la fuente oficial del cronograma; la minuta es la fuente de " +
          "los componentes C1–C8 y de las obligaciones. El mapeo actividad→componente y la " +
          "distribución semanal son ",
        el("strong", { text: "derivados" }),
        " y están pendientes de validación contra el Anexo Técnico.",
      ]),
      el("p", { class: "note" }, [
        "La narrativa completa de este tablero vive en ",
        el("a", { href: PLAN_URL, text: "docs/plan.md" }),
        ", que es la fuente de verdad editable.",
      ]),
    ])
  );
}

/* --------------------------------------------------------------------- theme */

const THEME_KEY = "atenea-board-theme";

function currentTheme() {
  return document.documentElement.getAttribute("data-theme") || "dark";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const btn = document.querySelector(".theme-toggle");
  if (!btn) return;
  const next = theme === "dark" ? "claro" : "oscuro";
  btn.textContent = theme === "dark" ? "◐ Tema claro" : "◑ Tema oscuro";
  btn.setAttribute("aria-label", "Cambiar a tema " + next);
}

function renderThemeToggle() {
  const btn = el("button", {
    class: "theme-toggle",
    type: "button",
    "aria-live": "polite",
  });
  btn.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch (e) {
      /* Private browsing blocks storage; the toggle still works for this visit. */
    }
  });
  document.body.appendChild(btn);
  applyTheme(currentTheme());
}

function main() {
  const root = document.getElementById("board");
  if (!root) return;
  renderThemeToggle();
  renderHeader(root);
  renderScheduleWarning(root);
  renderSummary(root);
  renderGantt(root);
  renderMilestones(root);
  renderMeetings(root);
  renderReference(root);
  renderProvenance(root);
}

document.addEventListener("DOMContentLoaded", main);
