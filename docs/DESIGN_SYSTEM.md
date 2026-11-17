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

The supplied logo files are stored unchanged in `brand-assets/original/`. The site uses uniformly scaled WebP copies at `public/brand/lshbl-logo-horizontal.webp` and `public/brand/lshbl-logo-square.webp`. The artwork is not recolored. Design-page screenshots live in `brand-assets/reference/` and are not served as live events.

Motion is limited to a hero entrance, a ribbon sweep, and staggered cards. `prefers-reduced-motion: reduce` disables those animations.

The Linn Lanes banner sits above the footer on every public page. Its button uses `https://linnlanes.com/`.
