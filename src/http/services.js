import { http, uriBase } from './index'

const listAbout = () => http.get(`${uriBase}/about.json`)
const listSkills = () => http.get(`${uriBase}/skills.json`)
const listProjects = () => http.get(`${uriBase}/projects.json`)
const listContact = () => http.get(`${uriBase}/contact.json`)

export {
  listAbout,
  listSkills,
  listProjects,
  listContact
}
