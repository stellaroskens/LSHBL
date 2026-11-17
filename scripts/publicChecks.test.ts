import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { calendarFile, type CalendarVenue } from "../src/lib/calendar.ts"

const venue: CalendarVenue = {
  id: "linn-lanes",
  name: "Linn Lanes",
  address: "2250 S. Main Road, Lebanon, OR 97355",
  phone: "(541) 451-3900",
  email: null,
  website: "https://linnlanes.com/",
  contactUrl: null,
}

describe("public calendar links", () => {
  it("builds calendar links only when both times exist", () => {
    const file = calendarFile(
      {
        id: "future-event",
        name: "League event",
        month: 11,
        day: 15,
        year: 2026,
        startTime: "09:00",
        endTime: "12:00",
        arrivalNote: null,
      },
      venue,
    )
    assert.ok(file)
    assert.match(file.googleUrl, /20261115T090000/)
    assert.match(file.googleUrl, /20261115T120000/)
    assert.match(file.outlookUrl ?? "", /startdt=2026-11-15T09%3A00%3A00-08%3A00/)
    assert.match(file.ics, /DTSTART;TZID=America\/Los_Angeles:20261115T090000/)
  })

  it("uses Pacific daylight time in July and does not invent a missing time", () => {
    const summer = calendarFile(
      {
        id: "summer-event",
        name: "League event",
        month: 7,
        day: 15,
        year: 2026,
        startTime: "09:00",
        endTime: "12:00",
        arrivalNote: null,
      },
      venue,
    )
    assert.match(summer?.outlookUrl ?? "", /-07%3A00/)
    const untimed = calendarFile(
      {
        id: "untimed",
        name: "League event",
        month: 11,
        day: 15,
        year: 2026,
        startTime: null,
        endTime: null,
        arrivalNote: null,
      },
      venue,
    )
    assert.equal(untimed?.googleUrl.includes("T090000"), false)
    assert.equal(untimed?.outlookUrl, null)
  })
})
