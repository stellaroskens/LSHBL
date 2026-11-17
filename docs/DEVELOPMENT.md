# Development

```bash
npm install
npm test
npm run build
npm run preview
```

Public organization facts belong in `src/brand/organization.ts`. Page routes are listed in `src/App.tsx` and `src/content/search.ts`. Add a public route to `public/sitemap.xml` at the same time, and keep `/admin` and `/sign-in` out of the sitemap.

Forms call `validateInterest` and `validateSponsor` in `src/lib/forms.ts`. A successful check does not mean the league received anything. The "Prepare email" link appears only when validation passes and `VITE_CONTACT_EMAIL` is set.

Calendar helpers in `src/lib/calendar.ts` are ready for a future published event. Do not add an event until the date and place are confirmed.
