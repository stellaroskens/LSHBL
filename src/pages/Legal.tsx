import { organization } from "../brand/organization"
import { PageHero } from "../components/PageHero"
import { PageMeta } from "../components/PageMeta"

export function Privacy() {
  return (
    <>
      <PageMeta
        title={`Privacy | ${organization.abbreviation}`}
        description="What the public LSHBL website does and does not collect."
      />
      <PageHero title="Privacy" lede="This is a public information site. It is not a place for student records." />
      <section className="wrap prose">
        <ul>
          <li>Interest and sponsorship forms are not stored on this website.</li>
          <li>A prepared email opens in your own email app. If you send it, that message leaves your device.</li>
          <li>The interest form asks for a parent or guardian. It does not ask for a student's name.</li>
          <li>There is no account system, payment form, or public roster.</li>
          <li>Administrative pages are not indexed.</li>
        </ul>
      </section>
    </>
  )
}

export function Terms() {
  return (
    <>
      <PageMeta title={`Terms of use | ${organization.abbreviation}`} description="How to use the LSHBL website." />
      <PageHero title="Terms of use" lede="The pages describe a league that is still being organized. Coming-soon notices are part of the content." />
      <section className="wrap prose">
        <ul>
          <li>Do not treat proposed sponsorship amounts as an approved benefit.</li>
          <li>Do not send payment to an account that this site has not published.</li>
          <li>External bowling centers and pro shops are listed for information. Call them to confirm hours.</li>
          <li>Photographs of students should not be shared without permission.</li>
        </ul>
      </section>
    </>
  )
}
