# Plan de seguimiento — ATENEA-464-2026

Contrato entre la **Agencia ATENEA** y la **Universidad Nacional de Colombia, Sede Manizales**.

**Objeto.** Prestar servicios para fortalecer las capacidades institucionales de la Agencia
para mejorar el ciclo de vida de la ingeniería de software, mediante el uso de inteligencia
artificial.

| | |
|:--|:--|
| Contrato | ATENEA-464-2026 |
| Plazo | Hasta 5 meses desde el acta de inicio (22 semanas) |
| Lugar de ejecución | Bogotá D.C. |
| Supervisión | Subgerente de TIC de ATENEA |
| Dirección del proyecto | Jorge Iván Montes Monsalve · Andrés Marino Álvarez Meza |
| Ejecutor | Laboratorio de Inteligencia Artificial, UNAL Sede Manizales (LIAUNAL) |

> Este tablero no publica cifras monetarias. Las condiciones económicas se gestionan por
> fuera de este repositorio.

---

## Advertencia sobre el cronograma

Hay **dos cronogramas** en este documento y conviene no confundirlos.

- El **cronograma contractual** proviene de la minuta y de la propuesta V3.0: el hito 1
  (componentes C1–C4) cierra al final del **Mes 3**, y el hito 2 (C5–C8) al final del Mes 5.
- El **cronograma de seguimiento** que rige este tablero adelanta el hito 1 a la
  **semana 4** por decisión de la dirección del proyecto. Es una **meta interna de
  aceleración**, no una modificación contractual.

En la práctica esto significa que la semana 4 concentra, en un mes, actividades que el
contrato distribuye en tres. Las semanas 5 a 13 quedan entonces dedicadas a profundizar,
validar y consolidar C1–C4 hasta la fecha contractual. Donde el tablero marca `⚠` es
exactamente donde las dos lecturas difieren.

Advertencia adicional de trazabilidad: el **Anexo Técnico** del contrato no viene incluido
en el PDF de la minuta, aunque las cláusulas SEGUNDA, SÉPTIMA y VIGÉSIMA SEGUNDA lo
declaran vinculante. Por lo tanto el detalle de actividades por componente y el mapeo
actividad→componente de este plan son **derivados**, y deben validarse contra el Anexo
Técnico cuando esté disponible.

---

## Componentes contractuales (C1–C8)

| Código | Componente | Hito |
|:--|:--|:--|
| C1 | Diagnóstico técnico, operativo y organizacional | 1 |
| C2 | Metodología SDLC-IA | 1 |
| C3 | Caso de uso institucional | 1 |
| C4 | Agentes inteligentes | 1 |
| C5 | Puesta en marcha de agentes y skills | 2 |
| C6 | Ingeniería de pruebas y validación | 2 |
| C7 | Despliegue en proceso misional | 2 |
| C8 | Documentación técnica, operativa y transferencia metodológica | 2 |

## Entregables (E1–E8)

| Código | Entregable | Momento estimado (propuesta V3.0) |
|:--|:--|:--|
| E1 | Informe de diagnóstico | Mes 1–2 |
| E2 | SDLC-IA para ATENEA | Mes 2 |
| E3 | Arquitectura End-to-End | Mes 2 |
| E4 | Sistema de agentes y skills | Mes 3–4 |
| E5 | Despliegue y validación | Mes 4–5 |
| E6 | Documentación técnica y operativa | Mes 5 |
| E7 | Workshop de transferencia | Mes 2–5 |
| E8 | Informe final y cierre | Mes 5 |

---

## Obligaciones de arranque

Dos plazos corren desde la firma y el acta de inicio, y conviene fijarlos antes que
cualquier actividad técnica.

| Obligación | Plazo | Semana |
|:--|:--|:--|
| Constitución de garantías (15 % cumplimiento / 20 % calidad / 5 % salarios) | 3 días hábiles desde la firma | S1 |
| Entrega del plan de trabajo | 8 días hábiles desde el acta de inicio | S2 |

---

## Cronograma de seguimiento por semana

Mapeo de meses a semanas: **M1** = S1–S4 · **M2** = S5–S9 · **M3** = S10–S13 ·
**M4** = S14–S18 · **M5** = S19–S22.

| # | Actividad | Semanas | C | E |
|:--|:--|:--|:--|:--|
| A1 | Kickoff, acta de inicio, garantías y plan de trabajo | S1–S2 | C1 | — |
| A2 | Diagnóstico técnico, operativo y organizacional | S1–S2 | C1 | E1 |
| A3 | Definición de la metodología SDLC-IA | S2 | C2 | E2 |
| A4 | Priorización y arquitectura del caso de uso institucional | S2–S3 | C3 | E3 |
| A5 | Entornos, herramientas y accesos | S3 | C3 · C4 | — |
| A6 | Desarrollo del primer conjunto de agentes y skills | S3–S4 | C4 | E4 |
| A7 | Arneses de prueba iniciales y validación funcional | S4 | C4 · C6 | E4 |
| A8 | Ingeniería de pruebas y validación | S5–S6 | C6 | E5 |
| A9 | Integración de agentes en los flujos de trabajo | S5–S7 | C4 · C5 | E4 |
| A10 | Puesta en marcha de agentes y skills | S7–S9 | C5 | E4 |
| A11 | Workshop de transferencia #1 | S8 | C8 | E7 |
| A12 | Despliegue piloto en el proceso misional | S10–S12 | C7 | E5 |
| A13 | Validación y ajustes del despliegue | S11–S13 | C6 · C7 | E5 |
| A14 | Ampliación del despliegue y endurecimiento | S14–S16 | C7 | E5 |
| A15 | Documentación técnica y operativa | S15–S17 | C8 | E6 |
| A16 | Workshop de transferencia #2 | S18 | C8 | E7 |
| A17 | Pruebas de aceptación y cierre técnico | S19–S20 | C6 · C7 | E5 |
| A18 | Documentación final y manuales de operación | S19–S21 | C8 | E6 |
| A19 | Workshop de transferencia #3 | S21 | C8 | E7 |
| A20 | Informe final, cierre y presentación de resultados | S22 | C8 | E8 |

### Hitos

| Hito | Semana | Alcance | Naturaleza |
|:--|:--|:--|:--|
| **Hito 1 — meta interna** | **S4** | C1–C4 · E1–E4 | ⚠ Aceleración interna. El contrato lo ubica al cierre del Mes 3. |
| Hito 1 — contractual | S13 | C1–C4 consolidados · E1–E4 | Fecha formal según minuta y propuesta V3.0. |
| **Hito 2 — contractual** | **S22** | C5–C8 · E5–E8 | Cierre del contrato. |

---

## Reuniones de seguimiento con ATENEA

Semanales durante los dos primeros meses, quincenales después.

| Cadencia | Semanas | Reuniones |
|:--|:--|:--|
| Semanal | S1, S2, S3, S4, S5, S6, S7, S8, S9 | 9 |
| Quincenal | S11, S13, S15, S17, S19, S21 | 6 |
| Cierre | S22 | 1 |
| | **Total** | **16** |

Agenda estándar de cada reunión: avance por componente activo, entregables en curso,
riesgos y bloqueos, decisiones requeridas de ATENEA, y compromisos para el siguiente
período. Las reuniones de hito (S4, S13, S22) añaden la presentación formal de entregables.

---

## Riesgos abiertos

| Riesgo | Impacto | Mitigación |
|:--|:--|:--|
| El Anexo Técnico no está disponible, así que el mapeo actividad→componente es derivado | Alto | Validar el mapeo en la reunión S1 y corregir este plan |
| Hito 1 en S4 comprime tres meses de alcance contractual en uno | Alto | Alcance demostrable mínimo por componente en S4; consolidación hasta S13 |
| La cláusula de confidencialidad prohíbe almacenar información confidencial fuera de las condiciones de seguridad de ATENEA | Alto | Ningún dato real de ATENEA en este repositorio público ni en servicios de modelos externos |
| Propiedad intelectual: derechos patrimoniales exclusivos de ATENEA sobre código, agentes y skills | Medio | Repositorios de entregables separados de este tablero y bajo control de ATENEA |
| Dependencia de accesos y entornos de ATENEA para A5 | Medio | Solicitud de accesos en S1, antes de que A5 sea crítica |

---

## Procedencia de este plan

El contenido contractual proviene de la minuta ATENEA-464-2026 y de la propuesta
`Propuesta_ATENEA_IA_UNAL_Manizales_V3.0.docx`, extraídos en una sesión previa y
conservados en Engram (observaciones 1298, 1302 y 1304). La propuesta V3.0 es la fuente
oficial del cronograma; la minuta es la fuente de los componentes C1–C8 y de las
obligaciones. El mapeo actividad→componente y la distribución semanal son derivados.
