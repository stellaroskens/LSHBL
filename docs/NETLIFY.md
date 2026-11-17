# Netlify

The intended site is the existing `https://lshbl.netlify.app` project, pointed at `stellaroskens/LSHBL` after review.

- Build command: `npm run build`
- Publish directory: `dist`
- Node 22, set in `netlify.toml`
- Client-side routes fall through to `index.html`
- Headers ship from `public/_headers`
- Old paths `/our-club`, `/meet-the-bowlers`, and `/volunteer` redirect to the new pages

This repository does not change the WAHSB Netlify site. Production deployment of this redesign still needs a human to connect the LSHBL repository and publish from a preview.

`netlify.toml` does not set `VITE_CONTACT_EMAIL`. Add it in the Netlify UI only after the address is official, then redeploy.
