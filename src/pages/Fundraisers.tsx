import { Link } from "react-router-dom"
import { organization } from "../brand/organization"
import { PageMeta } from "../components/PageMeta"

const lanes = organization.linnLanes

export function Fundraisers() {
  return (
    <>
      <PageMeta
        title={`Fundraisers | ${organization.abbreviation}`}
        description="No Lebanon and Sweet Home bowling fundraiser is scheduled. The page is ready for a future community event."
      />
      <header className="fund-hero">
        <div>
          <p className="fund-hero__pill">Support the team</p>
          <h1>Fundraisers</h1>
          <p className="fund-hero__status">No event is scheduled</p>
          <p>Lebanon & Sweet Home High School Bowling Team</p>
          <a className="button button--red" href={lanes.url}>
            Linn Lanes
          </a>
        </div>
        <img src="/brand/lshbl-logo-square.webp" alt="" width={220} height={220} />
      </header>

      <section className="wrap fund-layout">
        <figure className="flyer-card">
          <img src="/brand/lshbl-logo-square.webp" alt="Lebanon and Sweet Home bowling logo" width={280} height={280} />
          <figcaption>
            <strong>A flyer will go here when an event is real.</strong>
            The raffle layout in the design reference is not an upcoming event. Its date, participation code, and QR
            code are not published.
          </figcaption>
        </figure>

        <div className="fund-detail">
          <div className="date-badge" aria-label="Event date">
            <span>Date</span>
            <strong>TBA</strong>
          </div>
          <div>
            <h2>Community fundraiser</h2>
            <p>Waiting for a confirmed date, time, and host.</p>
          </div>
          <p>Nothing is scheduled for the Lebanon & Sweet Home High School Bowling Team.</p>

          <div className="info-grid">
            <article className="panel">
              <h3>Location</h3>
              <p>{lanes.name}</p>
              <p>{lanes.address}</p>
            </article>
            <article className="panel">
              <h3>How to participate</h3>
              <p>Instructions will be posted with a confirmed event. No ticket code is active.</p>
            </article>
          </div>

          <div className="fund-actions">
            <p>Can't make it? No problem — you can still support the team.</p>
            <Link className="button button--red" to="/donate">
              Donate now
            </Link>
          </div>

          <section className="volunteer-card">
            <h3>Volunteers</h3>
            <p>When an event is scheduled, the league can ask for help with setup, guests, and cleanup.</p>
            <p>Students, parents, and families are welcome to ask about volunteering. Roles are not assigned yet.</p>
            <p>An official email address has not been published, so this page does not show a contact button for a guessed inbox.</p>
          </section>
        </div>
      </section>
    </>
  )
}
