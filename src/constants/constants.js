'use strict'

const regularCalendarId = 'nodejs.org_nr77ama8p7d7f9ajrpnu506c98@group.calendar.google.com'

module.exports = {
  calendarId:  process.env.CALENDAR_ID || regularCalendarId
}
