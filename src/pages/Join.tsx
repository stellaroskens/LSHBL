import { organization } from "../brand/organization"
import { InterestForm } from "../components/InterestForm"
import { PageHero } from "../components/PageHero"
import { PageMeta } from "../components/PageMeta"

export function Join() {
  return (
    <>
      <PageMeta
        title={`Join the League | ${organization.abbreviation}`}
        description="Parents and guardians can prepare an interest email for the Lebanon and Sweet Home bowling league."
      />
      <PageHero
        kicker="Recruiting"
        title="Your next strike starts here."
        lede="For high school students, parents and guardians, beginners, experienced bowlers, and families who want to support the club."
      />
      <section className="wrap prose">
        <p>
          The form asks for a parent or guardian, not for a student's name. Sending is not available until the league
          publishes a contact email. Checking the form only validates it in your browser.
        </p>
        <InterestForm />
      </section>
    </>
  )
}
