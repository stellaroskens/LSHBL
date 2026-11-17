import { organization } from "../brand/organization"

export function DraftNotice({ kind }: { kind: "interest" | "sponsor" }) {
  return (
    <p className="draft-notice">
      {organization.contactEmail
        ? "Prepare email opens your own email app with a draft. It does not send the message, save it on this website, or record a payment."
        : "The league has not published a contact email yet, so this form cannot address a draft. Nothing is saved when you fill it out."}
      {kind === "sponsor"
        ? " Preparing an email does not submit a sponsorship or verify a contribution."
        : " This is not a completed registration."}
    </p>
  )
}
