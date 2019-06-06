'use strict'

// coverage disabled here because testing a noop is silly
/* istanbul ignore next */
const noop = () => {}

const defaults = {
  autoConnect: true,
  host: '127.0.0.1',
  port: 4150,
  timeout: 60000,
  maxConnectAttempts: 5,
  reconnectDelayFactor: 1000,
  maxReconnectDelay: 120000,
  debug: noop,
  topic: null
}

const publisher = Object.assign({}, defaults)

const subscriber = Object.assign({}, defaults, {
  channel: null,
  lookup: [],
  concurrency: 1,
  discoverFrequency: 1000 * 60 * 5, // 5 minutes
  keepaliveOffset: 500
})

module.exports = {
  publisher,
  subscriber
}
