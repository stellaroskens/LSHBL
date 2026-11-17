import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { LinnLanesBanner } from "./LinnLanesBanner"

export function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)))
        if (target) {
          const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
          target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" })
          return
        }
      }
      window.scrollTo(0, 0)
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <LinnLanesBanner />
      <Footer />
    </div>
  )
}
