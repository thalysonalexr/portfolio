'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  WEBSERVER: '"https://raw.githubusercontent.com"',
  WHATSAPP_API: '"https://api.whatsapp.com"'
})
