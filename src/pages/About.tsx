import { organization } from "../brand/organization"
import { PageHero } from "../components/PageHero"
import { PageMeta } from "../components/PageMeta"

export function About() {
  return (
    <>
      <PageMeta
        title={`About Our League | ${organization.abbreviation}`}
        description="Why Lebanon and Sweet Home are building a shared high school bowling league."
      />
      <PageHero
        kicker={organization.abbreviation}
        title="About our league"
        lede="A new community bowling club for high school students in Lebanon and Sweet Home, Oregon."
      />
      <section className="wrap prose">
        <p>{organization.mission}</p>
        <p>
          The league is in its founding stage. Rosters, coaches, fees, and schedules are not published because they are
          not confirmed. This website will not invent them.
        </p>
        <h2>Both schools, equal billing</h2>
        <p>
          Lebanon High School and Sweet Home High School are represented together. Neither school is a guest program of
          the other.
        </p>
        <h2>What this site is not</h2>
        <ul>
          <li>It is not a student information system.</li>
          <li>It does not take credit cards.</li>
          <li>It does not claim to be a school district site or a registered nonprofit.</li>
          <li>It does not list sponsors, donations, or athletes until those facts are real.</li>
        </ul>
      </section>
    </>
  )
}
