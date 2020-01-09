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
    skills: []
  },
  mutations: {
    loadAbout: (state, payload) => {
      state.about = payload
    },
    loadProjects: (state, payload) => {
      state.projects = payload
    },
    loadSkills: (state, payload) => {
      state.skills = payload
    },
    loadContact: (state, payload) => {
      state.contact = payload
    }
  },
  getters: {
    about: state => state.about,
    contact: state => state.contact,
    projects: state => state.projects,
    skills: state => state.skills
  },
  actions: {
    loadAbout: async ({ commit }) => {
      let response = await listAbout()
      commit('loadAbout', response.data)
    },
    loadProjects: async ({ commit }) => {
      let response = await listProjects()
      commit('loadProjects', response.data)
    },
    loadSkills: async ({ commit }) => {
      let response = await listSkills()
      commit('loadSkills', response.data)
    },
    loadContact: async ({ commit }) => {
      let response = await listContact()
      commit('loadContact', response.data)
    }
  }
})

export { store }
