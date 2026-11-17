import { NavLink } from "react-router-dom"
import { nav, organization } from "../brand/organization"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="footer-mark">{organization.abbreviation}</p>
          <p className="footer-name">{organization.name}</p>
          <p>{organization.mission}</p>
        </div>
        <nav aria-label="Footer">
          <h2>Explore</h2>
          <ul>
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2>Support</h2>
          <ul>
            <li>
              <NavLink to="/sponsors">Sponsorships</NavLink>
            </li>
            <li>
              <NavLink to="/fundraisers">Fundraisers</NavLink>
            </li>
            <li>
              <NavLink to="/donate">Donate</NavLink>
            </li>
            <li>
              <NavLink to="/bowl-a-thon">Bowl-a-Thon template</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          {organization.contactEmail ? (
            <p>
              <a href={`mailto:${organization.contactEmail}`}>{organization.contactEmail}</a>
            </p>
          ) : (
            <p>An official email address has not been published yet.</p>
          )}
          <p>{organization.place}</p>
          {organization.social.length > 0 ? (
            <ul>
              {organization.social.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          ) : (
            <p>Official social accounts will be listed here when the league publishes them.</p>
          )}
          <p>
            <NavLink to="/privacy">Privacy</NavLink>
            {" · "}
            <NavLink to="/terms">Terms of use</NavLink>
          </p>
        </div>
      </div>
      <p className="copyright">
        © {year} {organization.name}. All rights reserved.
      </p>
    </footer>
  )
}
