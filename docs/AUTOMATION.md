# Automation

No production job is enabled. Run these manually only after a database exists, and record the result in `automation_logs`.

| Job | Manual idea | Rule |
| --- | --- | --- |
| Backup | Use the database host's backup command | Test a restore before relying on it |
| Health report | Check constraints and recent errors | Read-only |
| Migrations | Apply the next versioned SQL file | Do not edit an applied file in place |
| Duplicate check | Look for repeated interest emails or sponsor names | Report only |
| Event classification | Compare `starts_at` with the current time in America/Los_Angeles | Update status, do not delete |
| Fundraising totals | Sum `donations` and `sponsorships` where `verified` is true | Ignore unverified rows |
| Recognition eligibility | Compare verified cents with the approved thresholds | Do not publish a sponsor automatically |
| Failed jobs | Insert an `automation_logs` row with status `failed` | Notify a person; do not delete financial or student rows |

None of these jobs may delete donations, sponsorships, or bowler records.
