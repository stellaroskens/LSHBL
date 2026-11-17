# Database architecture

The public site does not connect to a database.

`db/migrations/001_future_schema.sql` is a starting schema for a future independent LSHBL Postgres project. Supabase is a candidate and is not provisioned.

The migration covers league settings, schools, seasons, teams, roles, coaches, bowlers, interest submissions, tournaments, results, campaigns, events, sponsors, sponsorships, donations, volunteers, announcements, merchandise, media, and logs.

Amounts are integer cents. Bowler rows can stay unpublished. Sponsorship public recognition defaults to false. Do not load WAHSB production data into this schema.

Access control, row-level security, and server-side validation belong with the real database project. The SQL file does not grant public access.
