import { etiquette } from "../content/faq"
import { organization } from "../brand/organization"
import { PageHero } from "../components/PageHero"
import { PageMeta } from "../components/PageMeta"

export function Rules() {
  return (
    <>
      <PageMeta
        title={`Rules | ${organization.abbreviation}`}
        description="LSHBL competition rules are still being written. General bowling etiquette is listed separately."
      />
      <PageHero
        title="Rules"
        lede="League eligibility, fees, lineups, and competition rules are still being developed. Nothing on this page is a published requirement."
      />
      <section className="wrap prose">
        <h2>Still being written</h2>
        <ul>
          <li>Who may join</li>
          <li>What it costs</li>
          <li>Practice attendance</li>
          <li>Lineup and scoring format</li>
          <li>Uniforms and equipment</li>
          <li>Conduct and eligibility for events</li>
        </ul>
        <h2>General etiquette, not a league code</h2>
        <p>These are ordinary bowling-center manners. They are teaching notes, not penalties.</p>
        <ul>
          {etiquette.bowlers.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2>Families and spectators</h2>
        <ul>
          {etiquette.spectators.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </>
  )
}
