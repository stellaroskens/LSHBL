import { experienceLevels, grades, schools, sponsorKinds } from "../brand/organization.ts"

export type InterestInput = {
  guardianName: string
  email: string
  phone: string
  school: string
  grade: string
  experience: string
  message: string
  consent: boolean
}

export type SponsorInput = {
  recipient: "league" | "bowler"
  recognition: "private" | "public"
  kind: string
  name: string
  email: string
  phone: string
  amount: string
  message: string
  consent: boolean
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateInterest(input: InterestInput) {
  const errors: Record<string, string> = {}
  if (input.guardianName.trim().length < 2) errors.guardianName = "Enter the parent or guardian name."
  if (!emailPattern.test(input.email.trim())) errors.email = "Enter a valid email address."
  if (input.phone.trim() && input.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Enter a 10-digit phone number, or leave the phone blank."
  }
  if (!schools.includes(input.school as (typeof schools)[number])) errors.school = "Choose a school."
  if (!grades.includes(input.grade as (typeof grades)[number])) errors.grade = "Choose a grade level."
  if (!experienceLevels.includes(input.experience as (typeof experienceLevels)[number])) {
    errors.experience = "Choose a bowling experience level."
  }
  if (input.message.length > 1000) errors.message = "Keep the message under 1,000 characters."
  if (!input.consent) errors.consent = "Consent is required before a draft can be prepared."
  return errors
}

export function validateSponsor(input: SponsorInput) {
  const errors: Record<string, string> = {}
  if (input.recipient !== "league") {
    errors.recipient = "Sponsoring an individual bowler is not open yet."
  }
  if (input.recognition !== "private" && input.recognition !== "public") {
    errors.recognition = "Choose private or public recognition."
  }
  if (!sponsorKinds.includes(input.kind as (typeof sponsorKinds)[number])) errors.kind = "Choose a sponsor type."
  if (input.name.trim().length < 2) errors.name = "Enter the sponsor or business name."
  if (!emailPattern.test(input.email.trim())) errors.email = "Enter a valid email address."
  if (input.phone.trim() && input.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Enter a 10-digit phone number, or leave the phone blank."
  }
  if (input.amount.trim()) {
    const value = Number(input.amount)
    if (!Number.isFinite(value) || value <= 0) errors.amount = "Enter a contribution amount above zero, or leave it blank."
  }
  if (input.message.length > 1000) errors.message = "Keep the message under 1,000 characters."
  if (!input.consent) errors.consent = "Consent is required before a draft can be prepared."
  return errors
}

export function interestBody(input: InterestInput) {
  return [
    "Expression of interest — parent or guardian",
    "",
    "This email was prepared by the public website. It is not a completed registration, a saved application, or a payment.",
    "",
    `Parent or guardian: ${input.guardianName.trim()}`,
    `Email: ${input.email.trim()}`,
    `Phone: ${input.phone.trim() || "Not provided"}`,
    `Student school: ${input.school}`,
    `Student grade: ${input.grade}`,
    `Bowling experience: ${input.experience}`,
    `Message: ${input.message.trim() || "None"}`,
    "",
    "The parent or guardian consented to being contacted about the league.",
    "This form does not include the student's name.",
  ].join("\n")
}

export function sponsorBody(input: SponsorInput) {
  return [
    "Sponsorship inquiry",
    "",
    "Preparing this email does not submit a sponsorship, record a payment, or verify a contribution.",
    "Public recognition requires a verified contribution, sponsor consent, and league approval.",
    "Recognition amounts on the website are proposed until the league approves them.",
    "",
    `Recipient: ${input.recipient === "league" ? "The league" : "An individual bowler"}`,
    `Recognition preference: ${input.recognition}`,
    `Sponsor type: ${input.kind}`,
    `Name: ${input.name.trim()}`,
    `Email: ${input.email.trim()}`,
    `Phone: ${input.phone.trim() || "Not provided"}`,
    `Intended amount: ${input.amount.trim() ? `$${input.amount.trim()}` : "Not stated"}`,
    `Message: ${input.message.trim() || "None"}`,
  ].join("\n")
}

export function mailtoDraft(address: string, subject: string, body: string) {
  const params = new URLSearchParams({ subject, body })
  return `mailto:${address}?${params.toString()}`
}
