import { Link } from "react-router-dom"
import { formatDollars, organization } from "../brand/organization"
import { PageMeta } from "../components/PageMeta"
import { SponsorForm } from "../components/SponsorForm"

const shirt = formatDollars(organization.sponsorship.shirtRecognitionCents)
const homepage = formatDollars(organization.sponsorship.homepageRecognitionCents)

const channels = [
  "Approved bank or credit union payment instructions",
  "Official donation processor",
  "Approved online payment service",
  "Instructions for checks or other contributions",
]

export function Sponsors() {
  return (
    <>
      <PageMeta
        title={`Support the Team | ${organization.abbreviation}`}
        description="Support the Lebanon and Sweet Home High School Bowling League. This page prepares an email and does not take payment."
      />
      <header className="support-hero support-hero--logo">
        <img src="/brand/lshbl-logo-square.webp" alt="" width={180} height={180} />
        <div>
          <h1>Support the team</h1>
          <p className="support-hero__org">Lebanon & Sweet Home High School Bowling Team</p>
          <p>
            There are two ways to help support the club, or sponsor a bowler. Every contribution helps create
            opportunities for local students to learn, grow, and compete. You can support the entire Lebanon & Sweet
            Home bowling program or direct your support toward a specific bowler when that option is available. The
            league confirms what that support includes. This website does not take payment, and a gift here is not
            described as tax deductible.
          </p>
        </div>
      </header>

      <section className="wrap choice-grid">
        <article className="choice choice--team">
          <h2>Sponsor the team</h2>
          <p>Support the Lebanon & Sweet Home Bowling Team as a whole.</p>
          <a className="button button--red" href="#sponsorship-form">
            Support the team
          </a>
        </article>
        <article className="choice choice--bowler">
          <h2>Sponsor a bowler</h2>
          <p>Choose a bowler to direct your support toward.</p>
          <p className="choice__soon">Coming soon. No student names are listed.</p>
        </article>
      </section>

      <section className="wrap sponsor-split" id="sponsorship-form">
        <div>
          <h2>Sponsorship form</h2>
          <SponsorForm />
          <p>
            <Link to="/contact">Contact us</Link>
          </p>
        </div>
        <div>
          <h2 className="recognition-title">Sponsor recognition</h2>
          <p>
            Choose how you'd like your support to be recognized. Recognition is private by default, and public
            recognition requires permission and approval. A contribution is not recognized until it is received, the
            sponsor choices are verified, and the club approves. An email draft is not a verified contribution. These
            amounts are proposed until the league approves them.
          </p>
          <div className="recognition-grid">
            <article className="recognition recognition--private">
              <h3>Keep your support private</h3>
              <p>Your contribution can remain private. Public recognition is optional.</p>
              <p>
                <strong>Private by default</strong>
              </p>
            </article>
            <article className="recognition recognition--shirt">
              <h3>Next-season t-shirt recognition</h3>
              <p className="recognition__amount">More than {shirt}</p>
              <p>Verified contributions greater than {shirt} may qualify for sponsor-name recognition on next season's team T-shirt, subject to sponsor consent and print approval.</p>
            </article>
            <article className="recognition recognition--home">
              <h3>Homepage sponsor recognition</h3>
              <p className="recognition__amount">More than {homepage}</p>
              <p>Verified contributions greater than {homepage} may qualify for sponsor-name or logo recognition on the website homepage, subject to permission and approval.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="wrap">
        <h2>Ways to contribute</h2>
        <div className="card-grid">
          {channels.map((channel) => (
            <article className="panel" key={channel}>
              <h3>{channel}</h3>
              <p>Not available until the club verifies an official destination.</p>
            </article>
          ))}
        </div>
        <p>Do not send credit card or banking details through this website. This form does not have fields for them.</p>
        <p>The sponsorship form is available above. It does not submit, save, or receive a payment.</p>
      </section>

      <section className="wrap prose">
        <h2>Founding sponsors</h2>
        <p>No sponsors are published yet. A name or logo is added only after a verified contribution, sponsor consent, and league approval.</p>
      </section>
    </>
  )
}
