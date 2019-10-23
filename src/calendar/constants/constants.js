'use strict'

const { calendarId } = require('../constants/constants.js')
const _listEventsEndpoint = (calendarId) => `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`

module.exports = {
  listEventsEndpoint: _listEventsEndpoint(calendarId)
}
