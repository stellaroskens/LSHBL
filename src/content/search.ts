export type SearchEntry = {
  to: string
  label: string
  detail: string
  keywords: string
}

export const searchEntries: SearchEntry[] = [
  { to: "/", label: "Home", detail: "League introduction", keywords: "lebanon sweet home community recruitment bowling" },
  { to: "/about", label: "About Our League", detail: "Why the league is forming", keywords: "about mission schools community" },
  { to: "/join", label: "Join the League", detail: "Parent or guardian interest form", keywords: "join recruit beginner student parent interest" },
  { to: "/team", label: "Team Information", detail: "Rosters are not published yet", keywords: "team roster coaches coming soon" },
  { to: "/practices", label: "Practices", detail: "Practice schedule is not published yet", keywords: "practice schedule linn lanes" },
  { to: "/tournaments", label: "Tournaments", detail: "Tournament schedule is not published yet", keywords: "tournament schedule calendar" },
  { to: "/fundraisers", label: "Fundraisers", detail: "No fundraiser is scheduled", keywords: "fundraiser raffle bowl-a-thon community" },
  { to: "/sponsors", label: "Sponsors", detail: "Sponsorship inquiry", keywords: "sponsor business recognition donation" },
  { to: "/donate", label: "Donate", detail: "Payment instructions are not published yet", keywords: "donate contribution gift" },
  { to: "/resources", label: "Bowling Resources", detail: "Learning links and local centers", keywords: "equipment shoes ball fitting etiquette usbc pro shop" },
  { to: "/team-gear", label: "Team Gear", detail: "Merchandise is not for sale yet", keywords: "gear jersey shirt hoodie hat" },
  { to: "/faq", label: "FAQ", detail: "Questions about joining and support", keywords: "faq questions eligibility cost equipment" },
  { to: "/rules", label: "Rules", detail: "League rules are still being written", keywords: "rules etiquette conduct" },
  { to: "/contact", label: "Contact Us", detail: "How to reach the league", keywords: "contact email volunteer" },
  { to: "/bowl-a-thon", label: "Bowl-a-Thon", detail: "Future fundraising template", keywords: "bowlathon pledge pins" },
  { to: "/privacy", label: "Privacy", detail: "What this public site collects", keywords: "privacy student information" },
  { to: "/terms", label: "Terms of use", detail: "How to use this website", keywords: "terms of use" },
]

export function searchSite(query: string, limit = 8) {
  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
  if (words.length === 0) return []
  return searchEntries
    .map((entry) => {
      const label = entry.label.toLowerCase()
      const haystack = `${label} ${entry.detail.toLowerCase()} ${entry.keywords.toLowerCase()}`
      if (!words.every((word) => haystack.includes(word))) return null
      const score = words.reduce((sum, word) => sum + (label.startsWith(word) ? 3 : label.includes(word) ? 2 : 1), 0)
      return { entry, score }
    })
    .filter((hit): hit is { entry: SearchEntry; score: number } => hit !== null)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((hit) => hit.entry)
}
