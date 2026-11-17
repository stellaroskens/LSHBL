import { bowlingCenters, directoryDisclaimer, learningLinks, proShops, serviceTags } from "../content/directory"
import { etiquette } from "../content/faq"
import { organization } from "../brand/organization"
import { PageHero } from "../components/PageHero"
import { PageMeta } from "../components/PageMeta"
import type { DirectoryPlace } from "../content/directory"

function PlaceCard({ place }: { place: DirectoryPlace }) {
  return (
    <article className="panel">
      <h3>{place.name}</h3>
      <p>{place.city}</p>
      {place.address ? <p>{place.address}</p> : null}
      {place.phone ? <p>{place.phone}</p> : null}
      {place.phoneNote ? <p>{place.phoneNote}</p> : null}
      {place.status ? <p>{place.status}</p> : null}
      {place.hoursNote ? <p>{place.hoursNote}</p> : null}
      {place.hours ? (
        <ul>
          {place.hours.map((row) => (
            <li key={row.day}>
              {row.day}: {row.text}
            </li>
          ))}
        </ul>
      ) : null}
      <ul>
        {place.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      {place.website ? (
        <p>
          <a href={place.website}>Website</a>
        </p>
      ) : null}
    </article>
  )
}

export function Resources() {
  return (
    <>
      <PageMeta
        title={`Bowling Resources | ${organization.abbreviation}`}
        description="Beginner bowling, equipment, etiquette, and regional bowling centers for LSHBL families."
      />
      <PageHero
        title="Bowling resources"
        lede="Educational notes and regional listings carried forward for families learning the sport. A listing is not a price quote or a required purchase."
      />
      <section className="wrap prose">
        <p>{directoryDisclaimer}</p>
        <h2>Topics</h2>
        <ul>
          <li>Beginner bowling and scoring</li>
          <li>Bowling ball selection, fitting, and drilling</li>
          <li>Shoes, maintenance, and repairs</li>
          <li>Terminology, practice ideas, and etiquette</li>
        </ul>
        <p>Service tags used by the pro shop notes: {serviceTags.join(", ")}.</p>
        <h2>Learning links</h2>
        <ul>
          {learningLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <h2>On the lanes</h2>
        <ul>
          {etiquette.bowlers.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="wrap">
        <h2>Pro shops</h2>
        <div className="card-grid">
          {proShops.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </section>
      <section className="wrap">
        <h2>Bowling centers</h2>
        <div className="card-grid">
          {bowlingCenters.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </section>
    </>
  )
}
