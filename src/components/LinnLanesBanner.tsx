import { organization } from "../brand/organization"

export function LinnLanesBanner() {
  const lanes = organization.linnLanes
  return (
    <aside className="lanes-banner" aria-labelledby="lanes-banner-title">
      <div className="lanes-banner__art" aria-hidden="true">
        <span className="pin" />
        <span className="pin pin--short" />
        <span className="ball" />
      </div>
      <div className="lanes-banner__copy">
        <h2 id="lanes-banner-title">{lanes.headline}</h2>
        <p>{lanes.support}</p>
      </div>
      <a className="button button--gold" href={lanes.url}>
        Visit Linn Lanes
        <span className="visually-hidden"> (opens the Linn Lanes website)</span>
      </a>
    </aside>
  )
}
