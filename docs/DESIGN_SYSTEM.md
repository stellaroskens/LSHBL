# Design system

Colors are CSS variables in `src/styles/global.css`.

| Token | Hex |
| --- | --- |
| Lebanon Red | `#C90020` |
| Lebanon Blue | `#003478` |
| Sweet Home Green | `#00492C` |
| Sweet Home Gold | `#FFCB05` |
| Midnight Navy | `#061C42` |
| Ice | `#F4F6FA` |
| White | `#FFFFFF` |

Headings use Barlow Condensed. Italic display type is used on the hero and the Linn Lanes banner. Body text uses Source Sans 3. Both are open-source fonts served by Google Fonts.

The header letter mark and the social preview image are temporary typography, not the league logo. Replace them with the supplied horizontal and square logo files, without recoloring or stretching the artwork. Suggested filenames: `lshbl-logo-horizontal.webp`, `lshbl-logo-square.webp`, `lshbl-favicon.png`.

Motion is limited to a hero entrance, a ribbon sweep, and staggered cards. `prefers-reduced-motion: reduce` disables those animations.

The Linn Lanes banner sits above the footer on every public page. Its button uses `https://linnlanes.com/`.
