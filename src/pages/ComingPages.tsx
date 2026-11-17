import { Link } from "react-router-dom"
import { organization } from "../brand/organization"
import { PageHero } from "../components/PageHero"
import { PageMeta } from "../components/PageMeta"

export function Team() {
  return (
    <>
      <PageMeta
        title={`Team Information | ${organization.abbreviation}`}
        description="Team rosters, coaches, and achievements will be published when the league confirms them."
      />
      <PageHero
        title="Team information coming soon."
        lede="Rosters, coaches, announcements, and achievements will live here. Student names and photographs stay off the public site until a guardian and the league approve them."
      />
      <section className="wrap card-grid">
        {["Rosters", "Coaches", "Announcements", "Achievements"].map((item) => (
          <article className="panel" key={item}>
            <h2>{item}</h2>
            <p>Nothing is listed yet.</p>
          </article>
        ))}
      </section>
    </>
  )
}

export function Practices() {
  return (
    <>
      <PageMeta
        title={`Practices | ${organization.abbreviation}`}
        description="The LSHBL practice schedule has not been published."
      />
      <PageHero
        title="Practice schedule coming soon."
        lede="Days, times, and what to bring will be posted after the league confirms them with the bowling center."
      />
      <section className="wrap prose">
        <p>
          {organization.linnLanes.name} at {organization.linnLanes.address} is the community center associated with the
          league. A published practice is a confirmed date, not a general invitation to show up.
        </p>
        <p>
          <a href={organization.linnLanes.url}>Linn Lanes website</a>
          {" · "}
          <a href={organization.linnLanes.phoneHref}>{organization.linnLanes.phone}</a>
        </p>
      </section>
    </>
  )
}

export function Tournaments() {
  return (
    <>
      <PageMeta
        title={`Tournaments | ${organization.abbreviation}`}
        description="The LSHBL tournament schedule has not been published."
      />
      <PageHero
        title="Our tournament schedule is coming soon."
        lede="Future events will show the date, time, location, directions, and an add-to-calendar link. Times use America/Los_Angeles."
      />
      <section className="wrap prose">
        <p>No events are listed. This page does not carry over another club's tournament calendar.</p>
        <p>When an event has both a start and an end time, families will be able to add it to a calendar. A missing time will stay blank rather than being guessed.</p>
      </section>
    </>
  )
}

export function TeamGear() {
  return (
    <>
      <PageMeta
        title={`Team Gear | ${organization.abbreviation}`}
        description="LSHBL merchandise is not for sale yet."
      />
      <PageHero
        title="LSHBL team gear — coming soon."
        lede="Jerseys, t-shirts, hoodies, hats, and bowling accessories will be shown here after an approved merchandise program exists."
      />
      <section className="wrap prose">
        <p>There is no shopping cart, price list, or checkout on this website.</p>
      </section>
    </>
  )
}

export function Bowlathon() {
  return (
    <>
      <PageMeta
        title={`Bowl-a-Thon | ${organization.abbreviation}`}
        description="A future Bowl-a-Thon template. No pledge is being collected."
      />
      <PageHero
        kicker="Future fundraiser template"
        title="Bowl-a-Thon"
        lede="This page is reserved for a future event. It does not accept a pledge, calculate a payment, or save a name."
      />
      <section className="wrap prose">
        <p>A typical Bowl-a-Thon lets a supporter choose a flat gift or an amount per pin. The pin total has to be verified after the event. None of that is active.</p>
        <p>
          <Link to="/fundraisers">See current fundraisers</Link>
        </p>
      </section>
    </>
  )
}

export function SignIn() {
  return (
    <>
      <PageMeta
        title={`Sign In | ${organization.abbreviation}`}
        description="The LSHBL league portal is not open."
        index={false}
      />
      <PageHero
        title="League portal"
        lede="Sign-in is not available. This page does not create an account, accept a password, or connect to another organization's login."
      />
      <section className="wrap prose">
        <p>Families who want information can use the interest form on the join page.</p>
        <p>
          <Link to="/join">Join the league</Link>
        </p>
      </section>
    </>
  )
}

export function FutureAdmin() {
  return (
    <>
      <PageMeta
        title={`Administration | ${organization.abbreviation}`}
        description="The administrative dashboard is not enabled."
        index={false}
      />
      <PageHero
        title="Administrative tools are not enabled."
        lede="Rosters, announcements, events, sponsors, and donations will be managed here only after authentication is implemented. There is no login on this page."
      />
    </>
  )
}

export function NotFound() {
  return (
    <>
      <PageMeta title={`Page not found | ${organization.abbreviation}`} description="That page is not part of the LSHBL site." />
      <PageHero title="Page not found" lede="The link does not match a public page." />
      <section className="wrap">
        <Link to="/">Back to the homepage</Link>
      </section>
    </>
  )
}
