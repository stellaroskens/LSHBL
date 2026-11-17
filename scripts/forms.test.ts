import assert from "node:assert/strict"
import test from "node:test"
import { interestBody, mailtoDraft, sponsorBody, validateInterest, validateSponsor } from "../src/lib/forms.ts"

const interest = {
  guardianName: "Alex Parent",
  email: "alex@example.com",
  phone: "",
  school: "Lebanon High School",
  grade: "9",
  experience: "New to bowling",
  message: "",
  consent: true,
}

test("an interest draft stays invalid without consent and does not require a student name", () => {
  const errors = validateInterest({ ...interest, consent: false })
  assert.equal(errors.consent?.length > 0, true)
  assert.equal("studentName" in interest, false)
  assert.equal(validateInterest(interest).consent, undefined)
})

test("sponsorship defaults are private and bowler sponsorship is rejected", () => {
  const valid = validateSponsor({
    recipient: "league",
    recognition: "private",
    kind: "Family",
    name: "Example Family",
    email: "family@example.com",
    phone: "",
    amount: "",
    message: "",
    consent: true,
  })
  assert.deepEqual(valid, {})
  const blocked = validateSponsor({
    recipient: "bowler",
    recognition: "public",
    kind: "Business",
    name: "Example Shop",
    email: "shop@example.com",
    phone: "541",
    amount: "0",
    message: "",
    consent: false,
  })
  assert.match(blocked.recipient, /not open/)
  assert.match(blocked.phone, /10-digit/)
  assert.match(blocked.amount, /above zero/)
})

test("email drafts describe preparation and never claim a recorded payment", () => {
  const body = `${interestBody(interest)}\n${sponsorBody({
    recipient: "league",
    recognition: "private",
    kind: "Business",
    name: "Example Shop",
    email: "shop@example.com",
    phone: "",
    amount: "25",
    message: "",
    consent: true,
  })}`
  assert.match(body, /does not/)
  assert.doesNotMatch(body, /payment received|successfully submitted|tax deductible/i)
  const link = mailtoDraft("league@example.com", "Hello", "Body")
  assert.match(link, /^mailto:league@example.com\?/)
})
