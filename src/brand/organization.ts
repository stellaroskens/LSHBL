/**
 * Single source for public organization facts.
 * Amounts and partner wording that are still proposals stay flagged here.
 */

export const publicOrigin = "https://lshbl.netlify.app"

export const colors = {
  lebanonRed: "#C90020",
  lebanonBlue: "#003478",
  sweetHomeGreen: "#00492C",
  sweetHomeGold: "#FFCB05",
  midnightNavy: "#061C42",
  ice: "#F4F6FA",
  white: "#FFFFFF",
} as const

export const organization = {
  name: "Lebanon & Sweet Home High School Bowling League",
  abbreviation: "LSHBL",
  place: "Lebanon and Sweet Home, Oregon",
  tagline: "Two Schools. One League. One Community.",
  mission:
    "Build a community bowling club for local high school students, bringing together student athletes, families, coaches, volunteers, local businesses, and community supporters.",
  /**
   * Official public email is not published yet.
   * Set VITE_CONTACT_EMAIL at build time only after the league confirms the address.
   * An empty value keeps email drafts from being addressed to a guessed inbox.
   */
  contactEmail: import.meta.env?.VITE_CONTACT_EMAIL?.trim() || null,
  schools: [
    {
      id: "lebanon",
      name: "Lebanon High School",
      shortName: "Lebanon",
      city: "Lebanon, Oregon",
      colors: [colors.lebanonRed, colors.lebanonBlue, colors.white],
    },
    {
      id: "sweet-home",
      name: "Sweet Home High School",
      shortName: "Sweet Home",
      city: "Sweet Home, Oregon",
      colors: [colors.sweetHomeGreen, colors.sweetHomeGold, colors.white],
    },
  ],
  linnLanes: {
    name: "Linn Lanes",
    url: "https://linnlanes.com/",
    address: "2250 S. Main Road, Lebanon, OR 97355",
    phone: "(541) 451-3900",
    phoneHref: "tel:+15414513900",
    headline: "Support the Linn Lanes bowling alley",
    support:
      "Linn Lanes is an important community partner and home for our team's practices and events. We encourage our families and community supporters to keep Linn Lanes in mind, as their support gives our bowlers a place to practice, compete, and grow.",
    relationshipNote:
      "Practice days, lane agreements, and event dates are not published yet. This banner uses the league's requested partner wording while those details are confirmed.",
  },
  social: [] as { label: string; href: string }[],
  sponsorship: {
    status: "proposed" as const,
    shirtRecognitionCents: 15000,
    homepageRecognitionCents: 20000,
  },
  features: {
    payments: false,
    merchandiseCheckout: false,
    bowlerSponsorship: false,
    admin: false,
    database: false,
    raffleSales: false,
  },
} as const

export const nav = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Our League", end: false },
  { to: "/join", label: "Join the League", end: false },
  { to: "/team", label: "Team Information", end: false },
  { to: "/practices", label: "Practices", end: false },
  { to: "/tournaments", label: "Tournaments", end: false },
  { to: "/fundraisers", label: "Fundraisers", end: false },
  { to: "/sponsors", label: "Sponsors", end: false },
  { to: "/donate", label: "Donate", end: false },
  { to: "/resources", label: "Bowling Resources", end: false },
  { to: "/team-gear", label: "Team Gear", end: false },
  { to: "/faq", label: "FAQ", end: false },
  { to: "/rules", label: "Rules", end: false },
  { to: "/contact", label: "Contact Us", end: false },
] as const

export function formatDollars(cents: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(
    cents / 100,
  )
}

export const schools = ["Lebanon High School", "Sweet Home High School", "Not sure yet"] as const
export const grades = ["9", "10", "11", "12", "Other"] as const
export const experienceLevels = ["New to bowling", "Some experience", "Experienced"] as const
export const sponsorKinds = ["Business", "Individual", "Family"] as const
