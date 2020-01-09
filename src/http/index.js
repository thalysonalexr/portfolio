import Vue from 'vue'
import axios from 'axios'
import { getDocumentLanguage } from '@/helpers/index'

const uriBase = '/thalysonalexr/portfolio-files/master/data/compress/' + getDocumentLanguage().replace('-', '_')
const http = axios.create({
  baseURL: process.env.WEBSERVER,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
})

const uriWhatsappSendMessage = process.env.WHATSAPP_API + '/send'

Vue.use(http)

export { http, uriBase, uriWhatsappSendMessage }
