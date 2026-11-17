# Original architecture audit

Audit date: November 17, 2026.

## Live site

`https://lshbl.netlify.app` was still serving the Albany High School Bowling React app. The document title was "Albany High School Bowling". The homepage hero read "Strike up support for our bowlers." Visible sections included a closed 2026–2027 registration notice, practices at Lakeshore Lanes in Albany, team gear moving to BSN SPORTS, a past Burgerville fundraiser on November 8, 2026, and a Lakeshore Lanes thank-you. The sitemap still listed `https://albany-hs-bowling.netlify.app/` URLs.

The rendered pages match the WAHSB source. This deployment is the previous club site on the LSHBL hostname.

## WAHSB source

Private repository `stellaroskens/WAHSB`, commit `32275146fb672f1d29125545752613b997e2a359` on `main`.

Stack confirmed in `package.json`: React 19, TypeScript 7, Vite 8, React Router 7, Node 22, `node --test`, Netlify build to `dist`. Dependencies also included `@netlify/identity` and `@netlify/functions`.

Public routes in `src/App.tsx`: `/`, `/our-club`, `/meet-the-bowlers`, `/practices`, `/tournaments`, `/sponsors`, `/donate`, `/sponsor-qr`, `/fundraisers`, `/resources`, `/volunteer`, `/contact`, `/faq`, `/bowl-a-thon`, `/team-gear`, `/sign-in`, `/family`. Staff and admin routes used Netlify Identity role gates and were default-off.

Content lived in `src/content/published/siteContent.json` and was validated by `src/lib/content/siteContent.ts`. That validator is tied to Albany coach ids, the Lakeshore logo path, and Burgerville or Panda as the active fundraiser. Bowler cards in the file were placeholders named "Bowler 1" through "Bowler 8", not named students. Coach biographies and portrait files were present and were not copied.

Useful reusable pieces: calendar links in `src/lib/calendar.ts` (America/Los_Angeles), fundraiser timing helpers, search scoring, security headers, SPA fallback, and the educational bowling resource directory.

Not copied into the running app: Netlify Identity, GitHub content-publishing functions, Stripe donation functions, staff dashboards, coach photos, old logos, flyers, and the Albany content JSON. Those functions write to the WAHSB GitHub repo when enabled. Copying them into LSHBL would make a mis-set token a path back into the original project.

## LSHBL repository before this work

`stellaroskens/LSHBL` contained only a README. Origin is that repository. WAHSB was cloned only under `/agent/repos/WAHSB` and was not modified.
