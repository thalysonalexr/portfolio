import axios from 'axios'

const lang = (navigator.language || navigator.userLanguage) ? 'pt_BR' : 'en_US'

const uriBase = `/thalysonalexr/portfolio-files/master/data/compress/${lang}`

const http = axios.create({
  baseURL: process.env.API,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export { http, uriBase }
