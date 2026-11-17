import { useEffect } from "react"
import { publicOrigin } from "../brand/organization"

type PageMetaProps = {
  title: string
  description: string
  index?: boolean
}

function setContent(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute("content", content)
}

function setNamedMeta(name: string, content: string) {
  let meta = document.querySelector(`meta[name="${name}"]`)
  if (!meta) {
    meta = document.createElement("meta")
    meta.setAttribute("name", name)
    document.head.appendChild(meta)
  }
  meta.setAttribute("content", content)
}

export function PageMeta({ title, description, index = true }: PageMetaProps) {
  useEffect(() => {
    const pathname = window.location.pathname
    const url = `${publicOrigin}${pathname === "/" ? "/" : pathname}`
    document.title = title
    setContent('meta[name="description"]', description)
    setContent('meta[property="og:title"]', title)
    setContent('meta[property="og:description"]', description)
    setContent('meta[property="og:url"]', url)
    setNamedMeta("robots", index ? "index, follow" : "noindex, nofollow")
    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement("link")
      link.setAttribute("rel", "canonical")
      document.head.appendChild(link)
    }
    link.setAttribute("href", url)
  }, [title, description, index])

  return null
}
