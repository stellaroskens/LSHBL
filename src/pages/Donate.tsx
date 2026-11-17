import { organization } from "../brand/organization"
import { PageHero } from "../components/PageHero"
import { PageMeta } from "../components/PageMeta"

const channels = [
  "Bank or credit union instructions",
  "A donation processing service",
  "Online payment options",
  "Check instructions",
  "A verified donation QR code",
  "A fundraising progress total",
]

export function Donate() {
  return (
    <>
      <PageMeta
        title={`Donate | ${organization.abbreviation}`}
        description="How contributions could help build the Lebanon and Sweet Home bowling league. Payment instructions are not published yet."
      />
      <PageHero
        title="Donate"
        lede="Contributions can help build a new bowling club for local high school students. This page does not collect card numbers, and it does not claim that a gift is tax deductible."
      />
      <section className="wrap card-grid">
        {channels.map((channel) => (
          <article className="panel" key={channel}>
            <h2>{channel}</h2>
            <p>Coming soon. The league has not published instructions for this method.</p>
          </article>
        ))}
      </section>
      <section className="wrap prose">
        <p>
          Do not send money to an address or account that is not listed on this page. Older payment destinations from
          another club are not used here.
        </p>
        <p>This website does not state that the league is a nonprofit or an official school program.</p>
      </section>
    </>
  )
}
