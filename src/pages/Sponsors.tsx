import { formatDollars, organization } from "../brand/organization"
import { PageMeta } from "../components/PageMeta"
import { SponsorForm } from "../components/SponsorForm"

const shirt = formatDollars(organization.sponsorship.shirtRecognitionCents)
const homepage = formatDollars(organization.sponsorship.homepageRecognitionCents)

export function Sponsors() {
  return (
    <>
      <PageMeta
        title={`Sponsors | ${organization.abbreviation}`}
        description="Support the Lebanon and Sweet Home High School Bowling League. Sponsorship inquiries prepare an email and do not take payment."
      />
      <header className="support-hero">
        <p className="kicker">Sponsor the team</p>
        <h1>Support the team</h1>
        <p className="support-hero__org">{organization.name}</p>
        <p>
          Local businesses, individuals, and families can help establish the new bowling program. A conversation starts
          with an email draft. It does not charge a card or publish a name.
        </p>
      </header>

      <section className="wrap card-grid">
        <article className="panel">
          <h2>Sponsor the team</h2>
          <p>Support the league as a whole. This is the option available today.</p>
        </article>
        <article className="panel">
          <h2>Sponsor a bowler</h2>
          <p>Support for an individual eligible bowler is coming soon. Student names are not listed for sponsorship.</p>
        </article>
      </section>

      <section className="wrap">
        <h2>Sponsorship inquiry</h2>
        <SponsorForm />
      </section>

      <section className="wrap">
        <h2>Recognition, once a gift is verified</h2>
        <p className="lede">
          These levels are proposed until the league approves them. Public recognition also requires the sponsor's
          consent and club approval. The default is private.
        </p>
        <div className="card-grid card-grid--three">
          <article className="panel">
            <h3>Private support</h3>
            <p>Supporters may remain anonymous to the public.</p>
          </article>
          <article className="panel">
            <h3>Next-season t-shirt recognition</h3>
            <p>Verified contributions greater than {shirt} may qualify for sponsor-name recognition.</p>
          </article>
          <article className="panel">
            <h3>Homepage sponsor recognition</h3>
            <p>Verified contributions greater than {homepage} may qualify for a sponsor name or logo.</p>
          </article>
        </div>
      </section>

      <section className="wrap prose">
        <h2>Founding sponsors</h2>
        <p>
          Businesses that help launch the league can be recognized as founding sponsors after the contribution is
          verified. No founding sponsors are published yet, because none have been confirmed.
        </p>
      </section>
    </>
  )
}
