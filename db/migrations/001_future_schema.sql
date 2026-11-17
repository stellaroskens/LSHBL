-- Future LSHBL schema. Not applied to any database.
-- Do not schedule the jobs in this file until a separate LSHBL database is approved.
-- Monetary amounts are integer cents. Do not import another organization's data.

create table league_settings (
  id uuid primary key,
  name text not null,
  contact_email text,
  updated_at timestamptz not null default now()
);

create table schools (
  id uuid primary key,
  name text not null unique,
  created_at timestamptz not null default now()
);

create table seasons (
  id uuid primary key,
  name text not null,
  starts_on date,
  ends_on date,
  created_at timestamptz not null default now()
);

create table teams (
  id uuid primary key,
  season_id uuid not null references seasons (id),
  school_id uuid references schools (id),
  name text not null,
  created_at timestamptz not null default now()
);

create table user_roles (
  id uuid primary key,
  email text not null,
  role text not null check (role in ('administrator', 'coach', 'volunteer')),
  created_at timestamptz not null default now(),
  unique (email, role)
);

create table coaches (
  id uuid primary key,
  display_name text not null,
  public_bio text,
  created_at timestamptz not null default now()
);

create table bowlers (
  id uuid primary key,
  school_id uuid references schools (id),
  team_id uuid references teams (id),
  public_display_name text,
  publish boolean not null default false,
  created_at timestamptz not null default now()
);

create table bowler_interest_submissions (
  id uuid primary key,
  guardian_name text not null,
  email text not null,
  phone text,
  school_name text not null,
  grade_level text not null,
  experience text not null,
  message text,
  consent_at timestamptz not null,
  created_at timestamptz not null default now()
);

create table tournaments (
  id uuid primary key,
  season_id uuid references seasons (id),
  name text not null,
  starts_at timestamptz,
  ends_at timestamptz,
  location text,
  status text not null default 'draft' check (status in ('draft', 'published', 'past')),
  created_at timestamptz not null default now()
);

create table tournament_results (
  id uuid primary key,
  tournament_id uuid not null references tournaments (id),
  team_id uuid references teams (id),
  score integer,
  created_at timestamptz not null default now()
);

create table fundraising_campaigns (
  id uuid primary key,
  name text not null,
  status text not null default 'draft',
  created_at timestamptz not null default now()
);

create table fundraising_events (
  id uuid primary key,
  campaign_id uuid references fundraising_campaigns (id),
  name text not null,
  starts_at timestamptz,
  ends_at timestamptz,
  location text,
  status text not null default 'draft',
  created_at timestamptz not null default now()
);

create table sponsors (
  id uuid primary key,
  name text not null,
  kind text not null check (kind in ('business', 'individual', 'family')),
  public_recognition boolean not null default false,
  approved boolean not null default false,
  created_at timestamptz not null default now()
);

create table sponsorships (
  id uuid primary key,
  sponsor_id uuid not null references sponsors (id),
  bowler_id uuid references bowlers (id),
  amount_cents integer not null check (amount_cents >= 0),
  verified boolean not null default false,
  created_at timestamptz not null default now()
);

create table donations (
  id uuid primary key,
  amount_cents integer not null check (amount_cents >= 0),
  method text,
  verified boolean not null default false,
  created_at timestamptz not null default now()
);

create table volunteers (
  id uuid primary key,
  name text not null,
  email text not null,
  notes text,
  created_at timestamptz not null default now()
);

create table announcements (
  id uuid primary key,
  title text not null,
  body text not null,
  published boolean not null default false,
  created_at timestamptz not null default now()
);

create table merchandise (
  id uuid primary key,
  name text not null,
  available boolean not null default false,
  price_cents integer check (price_cents >= 0),
  created_at timestamptz not null default now()
);

create table media_assets (
  id uuid primary key,
  path text not null,
  alt_text text,
  created_at timestamptz not null default now()
);

create table audit_logs (
  id uuid primary key,
  actor text,
  action text not null,
  subject text,
  created_at timestamptz not null default now()
);

create table automation_logs (
  id uuid primary key,
  job_name text not null,
  status text not null,
  detail text,
  created_at timestamptz not null default now()
);

create index sponsorships_verified_idx on sponsorships (verified);
create index donations_verified_idx on donations (verified);
create index tournaments_starts_idx on tournaments (starts_at);
