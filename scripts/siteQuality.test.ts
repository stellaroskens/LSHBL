import assert from "node:assert/strict"
import { readFileSync, readdirSync, statSync } from "node:fs"
import { join } from "node:path"
import test from "node:test"
import { organization } from "../src/brand/organization.ts"
import { searchSite } from "../src/content/search.ts"

const root = new URL("..", import.meta.url)

test("public indexing files leave the portal and admin routes out", () => {
  const robots = readFileSync(new URL("../public/robots.txt", import.meta.url), "utf8")
  const sitemap = readFileSync(new URL("../public/sitemap.xml", import.meta.url), "utf8")
  for (const path of ["/admin", "/sign-in"]) {
    assert.match(robots, new RegExp(`Disallow: ${path}`))
    assert.equal(sitemap.includes(`https://lshbl.netlify.app${path}`), false)
  }
  assert.match(sitemap, /https:\/\/lshbl\.netlify\.app\/join</)
  assert.equal(sitemap.includes("albany-hs-bowling.netlify.app"), false)
})

test("search does not revive the previous organization name", () => {
  assert.deepEqual(searchSite("albany high school bowling"), [])
  assert.equal(searchSite("join league")[0]?.to, "/join")
})

test("the public shell uses the new league name and an unpublished contact inbox", () => {
  const html = readFileSync(new URL("../index.html", import.meta.url), "utf8")
  assert.match(html, /Lebanon &amp; Sweet Home High School Bowling League/)
  assert.equal(html.includes("Albany High School Bowling"), false)
  assert.equal(organization.contactEmail, null)
  assert.equal(organization.linnLanes.url, "https://linnlanes.com/")
  assert.equal(organization.features.payments, false)
  assert.equal(organization.features.raffleSales, false)
})

test("public source does not carry the previous club identity", () => {
  const banned = [
    "Albany High School Bowling",
    "albanyhsbowling",
    "WAHSB",
    "AHSB",
    "Lakeshore Lanes",
    "Cliff Meredith",
    "Chris Breshears",
  ]
  const files: string[] = []
  function walk(dir: string) {
    for (const entry of readdirSync(dir)) {
      const path = join(dir, entry)
      if (entry === "directory.json") continue
      if (statSync(path).isDirectory()) walk(path)
      else if (/\.(tsx|ts|html|css|txt|xml)$/.test(entry)) files.push(path)
    }
  }
  walk(join(root.pathname, "src"))
  walk(join(root.pathname, "public"))
  files.push(join(root.pathname, "index.html"))
  const combined = files.map((file) => readFileSync(file, "utf8")).join("\n")
  for (const phrase of banned) assert.equal(combined.includes(phrase), false, phrase)
})
