# atenea-seguimiento

Tablero de seguimiento semanal del contrato **ATENEA-464-2026** entre la **Agencia ATENEA**
y la **Universidad Nacional de Colombia, Sede Manizales**.

🔗 **Tablero:** https://liaunal.github.io/atenea-seguimiento/
📄 **Plan (fuente de verdad):** [`docs/plan.md`](docs/plan.md)

---

## Qué hay aquí

| Ruta | Contenido |
|:--|:--|
| `docs/plan.md` | Plan narrativo de 22 semanas: actividades, hitos, reuniones, riesgos, procedencia. **Fuente de verdad.** |
| `assets/js/board.js` | Estructura de datos del tablero (`DATA`) y render en el navegador. |
| `assets/css/board.css` | Estilos. Sin dependencias externas. |
| `index.html` | Página del tablero. |
| `.nojekyll` | Desactiva el procesamiento Jekyll de GitHub Pages. |

El tablero es estático: HTML, CSS y JavaScript plano, sin paso de compilación y sin
dependencias de red. Se puede abrir directamente desde el disco.

## Aviso de cronograma

Hay dos cronogramas y conviene no confundirlos.

- El **cronograma contractual** (minuta y propuesta V3.0) ubica el hito 1 — componentes
  C1–C4 — al cierre del **Mes 3**, equivalente a la semana 13.
- El **cronograma de seguimiento** de este tablero adelanta el hito 1 a la **semana 4**
  por decisión de la dirección del proyecto. Es una **meta interna de aceleración**, no una
  modificación contractual.

Además, el **Anexo Técnico** del contrato no viene incluido en el PDF de la minuta, aunque
varias cláusulas lo declaran vinculante. Por lo tanto el mapeo actividad→componente de este
plan es **derivado** y debe validarse contra el Anexo Técnico cuando esté disponible.

## Cómo actualizar el avance

Cada actividad vive en el arreglo `DATA.activities` de `assets/js/board.js` y lleva un
campo `status` con tres valores posibles:

| Valor | Se muestra como |
|:--|:--|
| `"pending"` | Pendiente — barra slate apagada |
| `"in_progress"` | En curso — barra cian |
| `"done"` | Completada — barra verde con trama diagonal |

Para marcar una actividad como terminada, basta cambiar su `status`:

```js
{ id: "A2", name: "Diagnóstico técnico, operativo y organizacional",
  from: 1, to: 2, c: ["C1"], e: ["E1"], status: "done" },
```

El estado nunca se transmite solo por color: la etiqueta textual acompaña cada barra en la
columna de actividad y en el detalle semanal.

Si cambias fechas, actividades, hitos o reuniones, **actualiza también `docs/plan.md`**. El
plan es la fuente de verdad y el tablero debe reflejarlo, no al contrario.

## Diseño

El tablero sigue el lenguaje visual de [Archify](https://github.com/tt-a1i/archify) 3.0.1:
canvas slate oscuro con retícula de puntos y dos glows de ambiente —cian arriba a la
izquierda, violeta a la derecha—, paneles translúcidos, Georgia para la prosa y una pila
monoespaciada encabezada por JetBrains Mono para las micro-etiquetas en versalitas con
tracking ancho. Los tokens de `board.css` están transcritos de los bloques `:root` de la
plantilla de Archify, no aproximados.

La paleta de acentos codifica el dominio:

| Acento | Uso |
|:--|:--|
| Cian | Códigos de componente C1–C8, contadores, actividades en curso |
| Verde | Códigos de entregable E1–E8, reuniones, actividades completadas |
| Violeta | Hitos y sus columnas en el cronograma |
| Ámbar | Aviso de cronograma y el hito 1 como meta interna |
| Slate | Actividades pendientes y elementos externos |

**Tema.** Oscuro por defecto, como Archify. Un botón fijo arriba a la derecha alterna a
claro y guarda la elección en `localStorage`. Sin elección previa se respeta
`prefers-color-scheme`. Un script en línea en el `<head>` resuelve el tema antes del primer
pintado, así que no hay destello del tema equivocado.

**Contraste.** Los trazos de Archify están pensados para formas grandes de diagrama y a
9–13 px quedan bajo 4.5:1. Por eso `board.css` define variantes `--*-text` de cada acento
para el texto pequeño, mientras bordes y rellenos conservan los trazos originales. Medido
con composición alfa real sobre toda la cadena de ancestros: **0 fallas AA en ambos temas**.
Si tocas colores, vuelve a medir — un medidor que trate los fondos translúcidos como opacos
produce falsos positivos en masa.

No se empaqueta ninguna fuente web. JetBrains Mono se pide primero y cae a la pila
monoespaciada del sistema, así que la página mantiene cero dependencias de red.

## Desarrollo local

```sh
python3 -m http.server 8021
# http://localhost:8021
```

Tras editar `board.css` o `board.js`, sube el parámetro `?v=` del enlace correspondiente en
`index.html`. El navegador cachea por URL completa, así que un cambio sin ese ajuste puede
no aplicarse.

## Despliegue

GitHub Pages está configurado en modo **deploy from branch**: sirve la raíz de `main`, así
que cada push publica el tablero sin pasos intermedios. El archivo `.nojekyll` desactiva el
procesamiento Jekyll para que `assets/` y `docs/` se sirvan tal cual.

No hay workflow de Actions a propósito. Publicar vía `actions/deploy-pages` exigiría un
token con scope `workflow`, y el despliegue por rama cubre el caso de un sitio estático sin
compilación. Si en algún momento hace falta el workflow — por ejemplo para añadir un paso de
validación antes de publicar — primero hay que ampliar el scope:

```sh
gh auth refresh -s workflow
```

## Alcance y confidencialidad

Este repositorio es público y **no contiene información confidencial de ATENEA ni cifras
monetarias del contrato**. La cláusula de confidencialidad prohíbe almacenar información
confidencial fuera de las condiciones de seguridad de la Agencia, y los derechos
patrimoniales sobre código, agentes y skills son exclusivos de ATENEA. Los entregables
técnicos viven en repositorios aparte, bajo control de la Agencia.

## Procedencia

El contenido contractual proviene de la minuta ATENEA-464-2026 y de
`Propuesta_ATENEA_IA_UNAL_Manizales_V3.0.docx`. La propuesta V3.0 es la fuente oficial del
cronograma; la minuta es la fuente de los componentes C1–C8 y de las obligaciones. La
distribución semanal y el mapeo actividad→componente son derivados.
