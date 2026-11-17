import directory from "./directory.json"

export type HoursRow = { day: string; text: string }

export type DirectoryPlace = {
  id: string
  name: string
  city: string
  address?: string
  phone?: string
  phoneNote?: string
  website?: string
  hours?: HoursRow[]
  hoursNote?: string
  status?: string
  points: string[]
}

export const directoryDisclaimer = directory.disclaimer
export const proShopsIntro = directory.proShopsIntro
export const centersIntro = directory.centersIntro
export const serviceTags = directory.serviceTags
export const proShops = directory.proShops as DirectoryPlace[]
export const bowlingCenters = directory.bowlingCenters as DirectoryPlace[]

export const learningLinks = [
  {
    href: "https://images.bowl.com/bowl/media/legacy/internap/bowl/rules/pdfs/ScoreHowto.pdf",
    label: "USBC: How to Score a Game",
  },
  {
    href: "https://images.bowl.com/bowl/media/assets/usbc/rules/general%20pdfs/usbc-tournament-managers-manual-(2026-update).pdf",
    label: "USBC Tournament Managers Manual, including the Baker system",
  },
] as const
