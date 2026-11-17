import { faqCategories } from "../content/faq"
import { organization } from "../brand/organization"
import { PageHero } from "../components/PageHero"
import { PageMeta } from "../components/PageMeta"

export function Faq() {
  return (
    <>
      <PageMeta
        title={`FAQ | ${organization.abbreviation}`}
        description="Questions about joining, equipment, costs, sponsorships, and tournaments for the new bowling league."
      />
      <PageHero
        title="Frequently asked questions"
        lede="If an answer says the league has not decided, that is the current fact. It is not a hidden rule."
      />
      <section className="wrap">
        {faqCategories.map((category) => (
          <article key={category.id} className="faq-block">
            <h2>{category.title}</h2>
            {category.intro ? <p>{category.intro}</p> : null}
            {category.items.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {item.points ? (
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
              </details>
            ))}
          </article>
        ))}
      </section>
    </>
  )
}
