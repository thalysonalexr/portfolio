import Vue from 'vue'
import Vuex from 'vuex'
import {
  listAbout,
  listProjects,
  listSkills,
  listContact
} from '@/http/services'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    about: {},
    contact: {},
    projects: [],
    skills: [],
    lang: null
  },
  mutations: {
    setAbout: (state, payload) => {
      state.about = payload
    },
    setProjects: (state, payload) => {
      state.projects = payload
    },
    setSkills: (state, payload) => {
      state.skills = payload
    },
    setContact: (state, payload) => {
      state.contact = payload
    },
    setLanguage: (state, payload) => {
      state.lang = payload
    }
  },
  getters: {
    about: state => state.about,
    contact: state => state.contact,
    projects: state => state.projects,
    skills: state => state.skills,
    lang: state => state.lang
  },
  actions: {
    loadAbout: async ({ commit }) => {
      const { data } = await listAbout()
      commit('setAbout', data)
    },
    loadProjects: async ({ commit }) => {
      const { data } = await listProjects()
      commit('setProjects', data)
    },
    loadSkills: async ({ commit }) => {
      const { data } = await listSkills()
      commit('setSkills', data)
    },
    loadContact: async ({ commit }) => {
      const { data } = await listContact()
      commit('setContact', data)
    },
    getLanguage: ({ commit }) => {
      const lang = (navigator.language || navigator.userLanguage) ? 'pt_BR' : 'en_US'
      commit('setLanguage', lang)
    }
  }
})

export { store }
