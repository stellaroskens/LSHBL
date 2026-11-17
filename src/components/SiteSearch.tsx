import { useEffect, useId, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { searchSite } from "../content/search"

export function SiteSearch() {
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)
  const boxRef = useRef<HTMLDivElement>(null)
  const listId = useId()
  const results = searchSite(query)

  useEffect(() => {
    function onPointer(event: PointerEvent) {
      if (!boxRef.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener("pointerdown", onPointer)
    return () => document.removeEventListener("pointerdown", onPointer)
  }, [])

  return (
    <div className="search" ref={boxRef}>
      <label className="visually-hidden" htmlFor="site-search">
        Search the website
      </label>
      <input
        id="site-search"
        type="search"
        placeholder="Search"
        value={query}
        autoComplete="off"
        role="combobox"
        aria-expanded={open && results.length > 0}
        aria-controls={listId}
        onChange={(event) => {
          setQuery(event.target.value)
          setOpen(true)
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Escape") setOpen(false)
        }}
      />
      {open && query.trim() && (
        <ul id={listId} className="search__results" role="listbox">
          {results.length === 0 ? (
            <li className="search__empty">No matching pages.</li>
          ) : (
            results.map((entry) => (
              <li key={entry.to}>
                <Link to={entry.to} onClick={() => setOpen(false)}>
                  <strong>{entry.label}</strong>
                  <span>{entry.detail}</span>
                </Link>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  )
}
