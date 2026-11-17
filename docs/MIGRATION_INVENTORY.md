# Migration inventory

| Area | Decision |
| --- | --- |
| React, TypeScript, Vite, React Router, npm, Node 22, Netlify `dist` | Kept |
| `src/lib/calendar.ts` | Copied and pointed at a local venue type |
| Search behavior | Rewritten against LSHBL routes |
| Security headers and SPA fallback | Kept, without Identity role gates |
| Public page set | Rebuilt for LSHBL routes, with redirects from `/our-club`, `/meet-the-bowlers`, and `/volunteer` |
| Educational pro shops, centers, scoring, etiquette | Kept, with Albany club rules removed |
| Coach portraits, old logos, flyers, hero photos, placeholder bowlers | Not copied |
| Identity, Stripe, GitHub publishing functions, admin UI | Not activated. Documented as a later phase |
| Package lock | Regenerated from the same React, Vite, and TypeScript generation without Identity or Functions |
| Database | New SQL file only. No connection |
