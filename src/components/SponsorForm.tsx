import { useMemo, useState } from "react"
import { organization, sponsorKinds } from "../brand/organization"
import { mailtoDraft, sponsorBody, validateSponsor, type SponsorInput } from "../lib/forms"
import { DraftNotice } from "./DraftNotice"

const empty: SponsorInput = {
  recipient: "league",
  recognition: "private",
  kind: "",
  name: "",
  email: "",
  phone: "",
  amount: "",
  message: "",
  consent: false,
}

export function SponsorForm() {
  const [input, setInput] = useState<SponsorInput>(empty)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const draft = useMemo(() => {
    if (!organization.contactEmail || Object.keys(validateSponsor(input)).length > 0) return null
    return mailtoDraft(organization.contactEmail, "LSHBL sponsorship inquiry", sponsorBody(input))
  }, [input])

  function update<K extends keyof SponsorInput>(key: K, value: SponsorInput[K]) {
    setInput((current) => ({ ...current, [key]: value }))
  }

  return (
    <form
      className="form-card"
      noValidate
      onSubmit={(event) => {
        event.preventDefault()
        setErrors(validateSponsor(input))
      }}
    >
      <DraftNotice kind="sponsor" />
      <fieldset>
        <legend>Sponsorship recipient</legend>
        <label className="check">
          <input type="radio" name="recipient" checked readOnly />
          <span>Sponsor the league</span>
        </label>
        <label className="check">
          <input type="radio" name="recipient" disabled />
          <span>Sponsor a bowler — coming soon</span>
        </label>
      </fieldset>
      <fieldset>
        <legend>Recognition</legend>
        <label className="check">
          <input
            type="radio"
            name="recognition"
            checked={input.recognition === "private"}
            onChange={() => update("recognition", "private")}
          />
          <span>Private. This is the default.</span>
        </label>
        <label className="check">
          <input
            type="radio"
            name="recognition"
            checked={input.recognition === "public"}
            onChange={() => update("recognition", "public")}
          />
          <span>Request public recognition. The league still has to approve it.</span>
        </label>
      </fieldset>
      <label>
        Sponsor type
        <select value={input.kind} onChange={(event) => update("kind", event.target.value)}>
          <option value="">Choose one</option>
          {sponsorKinds.map((kind) => (
            <option key={kind}>{kind}</option>
          ))}
        </select>
        {errors.kind ? <span className="field-error">{errors.kind}</span> : null}
      </label>
      <label>
        Sponsor or business name
        <input value={input.name} onChange={(event) => update("name", event.target.value)} />
        {errors.name ? <span className="field-error">{errors.name}</span> : null}
      </label>
      <label>
        Contact email
        <input type="email" value={input.email} autoComplete="email" onChange={(event) => update("email", event.target.value)} />
        {errors.email ? <span className="field-error">{errors.email}</span> : null}
      </label>
      <label>
        Telephone <span className="optional">(optional)</span>
        <input type="tel" value={input.phone} autoComplete="tel" onChange={(event) => update("phone", event.target.value)} />
        {errors.phone ? <span className="field-error">{errors.phone}</span> : null}
      </label>
      <label>
        Intended contribution in dollars <span className="optional">(optional)</span>
        <input inputMode="decimal" value={input.amount} onChange={(event) => update("amount", event.target.value)} />
        {errors.amount ? <span className="field-error">{errors.amount}</span> : null}
      </label>
      <label>
        Message <span className="optional">(optional)</span>
        <textarea rows={4} value={input.message} onChange={(event) => update("message", event.target.value)} />
      </label>
      <label className="check">
        <input type="checkbox" checked={input.consent} onChange={(event) => update("consent", event.target.checked)} />
        <span>I understand this prepares an email and does not record or pay a sponsorship.</span>
      </label>
      {errors.consent ? <span className="field-error">{errors.consent}</span> : null}
      <div className="form-actions">
        <button type="submit" className="button button--navy">
          Check this form
        </button>
        {draft ? (
          <a className="button button--red" href={draft}>
            Prepare email
          </a>
        ) : (
          <button type="button" className="button button--red" disabled>
            Prepare email
          </button>
        )}
      </div>
    </form>
  )
}
