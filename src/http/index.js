import axios from 'axios'
import { getDocumentLanguage } from '@/helpers/index'

const uriBase = '/thalysonalexr/portfolio-files/master/data/compress/' + getDocumentLanguage()

const http = axios.create({
  baseURL: process.env.API,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export { http, uriBase }
