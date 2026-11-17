import { Link } from "react-router-dom"
import { organization } from "../brand/organization"
import { PageHero } from "../components/PageHero"
import { PageMeta } from "../components/PageMeta"

const templates = [
  { title: "Community bowling events", text: "A public bowling night with a date, a center, and instructions." },
  { title: "Bowl-a-Thons", text: "Flat gifts or per-pin pledges, calculated only after pins are verified." },
  { title: "Business partnerships", text: "A restaurant or shop night, posted only when the business and the date are confirmed." },
  { title: "Approved raffles", text: "Ticket sales stay off until authorization and compliance review are complete." },
  { title: "Donation campaigns", text: "A described need, without a payment form on this site." },
]

export function Fundraisers() {
  return (
    <>
      <PageMeta
        title={`Fundraisers | ${organization.abbreviation}`}
        description="No LSHBL fundraiser is scheduled. Future events will be posted with a real date and location."
      />
      <PageHero
        kicker="Community support"
        title="Fundraisers"
        lede="No fundraiser is currently scheduled. When one is, this page will show the date, the place, and how to take part."
      />
      <section className="wrap empty-banner">
        <h2>The lanes are open for a future event.</h2>
        <p>
          Design references for raffles and flyers are not live campaigns. Dates, codes, and QR codes from those
          mockups are not published here.
        </p>
        <Link className="button button--red" to="/donate">
          Donation information
        </Link>
      </section>
      <section className="wrap">
        <h2>Event types this page can hold</h2>
        <div className="card-grid">
          {templates.map((item) => (
            <article className="panel" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="wrap prose">
        <h2>Volunteers</h2>
        <p>Volunteer roles for a future event are not assigned yet. {organization.name} will describe them with the event.</p>
      </section>
    </>
  )
}
