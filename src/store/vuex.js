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
    }
  }
})

export { store }
