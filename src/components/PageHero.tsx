type PageHeroProps = {
  kicker?: string
  title: string
  lede: string
}

export function PageHero({ kicker, title, lede }: PageHeroProps) {
  return (
    <header className="page-hero">
      {kicker ? <p className="kicker">{kicker}</p> : null}
      <h1>{title}</h1>
      <p>{lede}</p>
    </header>
  )
}
