import Vue from 'vue'
import axios from 'axios'

const uriBase = '/thalysonalexr/portfolio-files/master/data'
const http = axios.create({
  baseURL: process.env.WEBSERVER,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
})

Vue.use(http)

export { http, uriBase }
