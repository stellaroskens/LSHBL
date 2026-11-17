# Environment variables

See `.env.example`.

| Name | Where | Purpose |
| --- | --- | --- |
| `VITE_CONTACT_EMAIL` | Build | Official inbox for mailto drafts. Leave unset until confirmed. |
| `ADMIN_AUTH_ENABLED` | Server, future | Must stay off until an LSHBL login exists |
| `GITHUB_CONTENT_REPO` | Server, future | Must be `LSHBL` if content publishing is ever enabled |
| `SUPABASE_URL` | Server, future | Independent LSHBL project |
| `SUPABASE_SERVICE_ROLE_KEY` | Server, future | Never a `VITE_` variable |

Do not copy WAHSB tokens, Identity settings, or Stripe keys into this project.
