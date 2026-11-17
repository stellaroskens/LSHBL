import { Link } from "react-router-dom"
import { organization } from "../brand/organization"
import { PageMeta } from "../components/PageMeta"

const actions = [
  { title: "Become a Bowler", text: "Tell us your family is interested. No experience is required to ask.", to: "/join", label: "Join the league" },
  { title: "Become a Sponsor", text: "Local businesses and families can help establish the new program.", to: "/sponsors", label: "See sponsorships" },
  { title: "Make a Donation", text: "Payment instructions are not live yet. Read what a gift could support.", to: "/donate", label: "Donation information" },
  { title: "Attend a Fundraiser", text: "No community event is on the calendar yet. The page will list one when it is real.", to: "/fundraisers", label: "Fundraising page" },
]

export function Home() {
  return (
    <>
      <PageMeta
        title={`${organization.name}`}
        description="Two schools. One league. One community. Help build a high school bowling league for Lebanon and Sweet Home students."
      />
      <section className="hero">
        <div className="hero__ribbons" aria-hidden="true" />
        <img
          className="hero-logo"
          src="/brand/lshbl-logo-horizontal.webp"
          alt="Lebanon and Sweet Home bowling logo"
          width={280}
          height={280}
        />
        <p className="kicker">Lebanon & Sweet Home, Oregon</p>
        <h1>Two schools. One league. One community.</h1>
        <p className="hero__support">Help us build the future of high school bowling.</p>
        <p>
          We're bringing Lebanon and Sweet Home students together to build a new high school bowling league. Join us in
          creating opportunities for local teenagers to learn, compete, develop friendships, and become part of a
          supportive bowling community.
        </p>
        <div className="button-row">
          <Link className="button button--red" to="/join">
            Join the League
          </Link>
          <Link className="button button--gold" to="/sponsors">
            Support Our League
          </Link>
        </div>
      </section>

      <section className="recruit">
        <div>
          <h2>High school bowlers wanted!</h2>
          <p>
            New to bowling? Already have experience? We're building a league for students who want to learn, improve,
            compete, and have fun.
          </p>
          <Link className="button button--white" to="/join">
            I'm interested in joining
          </Link>
        </div>
      </section>

      <section className="wrap">
        <h2>Ways to take part</h2>
        <div className="card-grid">
          {actions.map((action) => (
            <article className="action-card" key={action.title}>
              <h3>{action.title}</h3>
              <p>{action.text}</p>
              <Link to={action.to}>{action.label}</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap">
        <h2>Our schools</h2>
        <div className="school-grid">
          {organization.schools.map((school) => (
            <article className={`school-panel school-panel--${school.id}`} key={school.id}>
              <p className="kicker">{school.city}</p>
              <h3>{school.name}</h3>
              <p>Official bowling artwork for this school will be added when the league supplies an approved logo.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap prose">
        <h2>Building a new bowling league</h2>
        <p>
          Lebanon and Sweet Home students do not yet have a shared high school bowling league. This site is the public
          start of that effort: a place for families to ask about joining, and a place for the community to help.
        </p>
        <p>Community support may eventually help with:</p>
        <ul>
          <li>Equipment</li>
          <li>Practice fees</li>
          <li>Tournament entry fees</li>
          <li>Jerseys</li>
          <li>Coaching resources</li>
          <li>Reducing financial barriers for students</li>
        </ul>
        <p>Those needs are goals, not a published budget or a fee schedule.</p>
      </section>

      <section className="wrap card-grid">
        <article className="panel">
          <h2>Upcoming events</h2>
          <p>No practices, tournaments, or fundraisers are scheduled on this site yet.</p>
          <Link to="/tournaments">Tournament page</Link>
        </article>
        <article className="panel">
          <h2>Fundraising</h2>
          <p>There is no active campaign. When the league schedules one, the date and instructions will be posted here.</p>
          <Link to="/fundraisers">Fundraising page</Link>
        </article>
        <article className="panel">
          <h2>Founding sponsors</h2>
          <p>No sponsors are listed yet. A business is added only after a verified contribution and league approval.</p>
          <Link to="/sponsors">Become a founding sponsor</Link>
        </article>
        <article className="panel">
          <h2>Volunteers</h2>
          <p>Adults who want to help can read the contact page. Roles and screening rules are still being developed.</p>
          <Link to="/contact">Contact the league</Link>
        </article>
      </section>

      <section className="wrap prose">
        <h2>Bowling resources</h2>
        <p>Scoring, equipment, etiquette, and local centers are collected for families who are new to the sport.</p>
        <Link className="button button--navy" to="/resources">
          Open bowling resources
        </Link>
      </section>
    </>
  )
}
