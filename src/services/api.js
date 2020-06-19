import axios from 'axios'

const api = axios.create({
  baseURL: process.env.API,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
})

const lang = (navigator.language || navigator.userLanguage) ? 'pt_BR' : 'en_US'
const uriBase = `/thalysonalexr/portfolio-files/master/data/compress/${lang}`

export const listAbout = async () => {
  const about = await api.get(`${uriBase}/about.json`)
  return about
}

export const listSkills = async () => {
  const skills = await api.get(`${uriBase}/skills.json`)
  return skills
}

export const listProjects = async () => {
  const projects = await api.get(`${uriBase}/projects.json`)
  return projects
}

export const listContact = async () => {
  const contact = await api.get(`${uriBase}/contact.json`)
  return contact
}

export default api
