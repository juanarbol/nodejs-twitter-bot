'use strict'

const { consumerSecretKey, consumerApiKey } = require('./constants/constants.js')
const https = require('http')

function auth (consumerApiKey = consumerApiKey, consumerSecretKey = consumerSecretKey) {

  const b64 = new Buffer(`${consumerApiKey}:${consumerSecretKey}`).toString('base64')

  const request = https.request()
}
