import { useMemo, useState } from "react"
import { experienceLevels, grades, organization, schools } from "../brand/organization"
import { interestBody, mailtoDraft, validateInterest, type InterestInput } from "../lib/forms"
import { DraftNotice } from "./DraftNotice"

const empty: InterestInput = {
  guardianName: "",
  email: "",
  phone: "",
  school: "",
  grade: "",
  experience: "",
  message: "",
  consent: false,
}

export function InterestForm() {
  const [input, setInput] = useState<InterestInput>(empty)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const draft = useMemo(() => {
    if (!organization.contactEmail || Object.keys(validateInterest(input)).length > 0) return null
    return mailtoDraft(organization.contactEmail, "LSHBL interest from a parent or guardian", interestBody(input))
  }, [input])

  function update<K extends keyof InterestInput>(key: K, value: InterestInput[K]) {
    setInput((current) => ({ ...current, [key]: value }))
  }

  return (
    <form
      className="form-card"
      onSubmit={(event) => {
        event.preventDefault()
        const next = validateInterest(input)
        setErrors(next)
      }}
      noValidate
    >
      <DraftNotice kind="interest" />
      <label>
        Parent or guardian name
        <input value={input.guardianName} autoComplete="name" onChange={(event) => update("guardianName", event.target.value)} />
        {errors.guardianName ? <span className="field-error">{errors.guardianName}</span> : null}
      </label>
      <label>
        Email address
        <input type="email" value={input.email} autoComplete="email" onChange={(event) => update("email", event.target.value)} />
        {errors.email ? <span className="field-error">{errors.email}</span> : null}
      </label>
      <label>
        Telephone <span className="optional">(optional)</span>
        <input type="tel" value={input.phone} autoComplete="tel" onChange={(event) => update("phone", event.target.value)} />
        {errors.phone ? <span className="field-error">{errors.phone}</span> : null}
      </label>
      <label>
        Student's school
        <select value={input.school} onChange={(event) => update("school", event.target.value)}>
          <option value="">Choose a school</option>
          {schools.map((school) => (
            <option key={school}>{school}</option>
          ))}
        </select>
        {errors.school ? <span className="field-error">{errors.school}</span> : null}
      </label>
      <label>
        Student grade level
        <select value={input.grade} onChange={(event) => update("grade", event.target.value)}>
          <option value="">Choose a grade</option>
          {grades.map((grade) => (
            <option key={grade}>{grade}</option>
          ))}
        </select>
        {errors.grade ? <span className="field-error">{errors.grade}</span> : null}
      </label>
      <label>
        Bowling experience
        <select value={input.experience} onChange={(event) => update("experience", event.target.value)}>
          <option value="">Choose experience</option>
          {experienceLevels.map((level) => (
            <option key={level}>{level}</option>
          ))}
        </select>
        {errors.experience ? <span className="field-error">{errors.experience}</span> : null}
      </label>
      <label>
        Message <span className="optional">(optional)</span>
        <textarea value={input.message} rows={4} onChange={(event) => update("message", event.target.value)} />
        {errors.message ? <span className="field-error">{errors.message}</span> : null}
      </label>
      <label className="check">
        <input type="checkbox" checked={input.consent} onChange={(event) => update("consent", event.target.checked)} />
        <span>
          I am the parent or guardian, and I agree to be contacted about the league. Please do not include the student's
          name in the message.
        </span>
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
