import Vue from 'vue'
import axios from 'axios'
import { getDocumentLanguage } from '../helpers/index'

const uriBase = '/thalysonalexr/portfolio-files/master/data/compress/' + getDocumentLanguage().replace('-', '_')
const http = axios.create({
  baseURL: process.env.WEBSERVER,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
})

Vue.use(http)

export { http, uriBase }
