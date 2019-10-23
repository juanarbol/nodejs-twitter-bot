'use strict'

const https = require('https')
const { listEventsEndpoint } = require('./constants/constants.js')

const listEventsRequest = https.get(listEventsEndpoint, responseHandler)

listEventsRequest.on('error', (error) => {
  console.error(error)
  console.error('this is an error')
})

function responseHandler (calendarResponse) {
  calendarResponse.on('data', (data) => {
    console.info(data)
    console.info(data.toString())
  })
}
