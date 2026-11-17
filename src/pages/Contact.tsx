import { Link } from "react-router-dom"
import { organization } from "../brand/organization"
import { PageHero } from "../components/PageHero"
import { PageMeta } from "../components/PageMeta"

export function Contact() {
  return (
    <>
      <PageMeta
        title={`Contact Us | ${organization.abbreviation}`}
        description="How to reach the Lebanon and Sweet Home High School Bowling League."
      />
      <PageHero
        title="Contact us"
        lede="Questions about joining, volunteering, sponsorships, and donations can come to the league once an official email is published."
      />
      <section className="wrap prose" id="volunteer">
        <h2>Email</h2>
        {organization.contactEmail ? (
          <p>
            <a href={`mailto:${organization.contactEmail}`}>{organization.contactEmail}</a>
          </p>
        ) : (
          <p>An official league email has not been published. This site will not guess one or reuse another club's inbox.</p>
        )}
        <h2>What to use instead</h2>
        <ul>
          <li>
            <Link to="/join">Interest form for parents and guardians</Link>
          </li>
          <li>
            <Link to="/sponsors">Sponsorship email draft</Link>
          </li>
          <li>
            <Link to="/donate">Donation information</Link>
          </li>
        </ul>
        <h2>Volunteering</h2>
        <p>
          Adults who want to help are welcome to ask. Background checks, driving students, and volunteer roles have not
          been defined. This website does not collect screening documents.
        </p>
        <h2>Bowling center</h2>
        <p>
          {organization.linnLanes.name}, {organization.linnLanes.address}, {organization.linnLanes.phone}. Calling the
          center reaches the bowling alley, not the league office.
        </p>
      </section>
    </>
  )
}
