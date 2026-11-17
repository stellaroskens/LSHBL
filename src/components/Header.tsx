import { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import { nav, organization } from "../brand/organization"
import { SiteSearch } from "./SiteSearch"

export function Header() {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const firstLink = menuRef.current?.querySelector("a")
    if (firstLink instanceof HTMLElement) firstLink.focus()

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    function onPointer(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node) && event.target !== buttonRef.current) {
        setOpen(false)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("pointerdown", onPointer)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("pointerdown", onPointer)
    }
  }, [open])

  return (
    <header className="site-header">
      <div className="header-bar">
        <button
          ref={buttonRef}
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-button__bars" aria-hidden="true" />
          {open ? "Close" : "Menu"}
        </button>

        <NavLink className="brand" to="/" end onClick={() => setOpen(false)}>
          <img src="/brand/lshbl-logo-square.webp" alt="" width={48} height={48} />
          <span className="visually-hidden">{organization.name}</span>
        </NavLink>

        <SiteSearch />

        <div className="header-actions">
          <NavLink className="button button--red header-donate" to="/donate" onClick={() => setOpen(false)}>
            Donate
          </NavLink>
          <NavLink className="button header-signin" to="/sign-in" onClick={() => setOpen(false)}>
            Sign In
          </NavLink>
        </div>
      </div>

      <div id="site-menu" className={open ? "site-menu is-open" : "site-menu"} ref={menuRef} hidden={!open}>
        <nav aria-label="Primary">
          <ul>
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end} onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
