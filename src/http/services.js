import { http, uriBase, uriWhatsappSendMessage } from './index'

const listAbout = () => http.get(uriBase + '/about.json')
const listSkills = () => http.get(uriBase + '/skills.json')
const listProjects = () => http.get(uriBase + '/projects.json')
const listContact = () => http.get(uriBase + '/contact.json')

const sendMessageWhatsapp = (to, message = null) => uriWhatsappSendMessage + `?1=pt_BR&phone=${to}&text=${message}`

export {
  listAbout,
  listSkills,
  listProjects,
  listContact,
  sendMessageWhatsapp
}
