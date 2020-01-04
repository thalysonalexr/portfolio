import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    about: {},
    contact: {},
    projects: [],
    skills: []
  },
  mutations: {
    loadAbout: state => {
      state.about = require('../data/about.json')
    },
    loadProjects: state => {
      state.projects = require('../data/projects.json')
    },
    loadSkills: state => {
      state.skills = require('../data/skills.json')
    },
    loadContact: state => {
      state.contact = require('../data/contact.json')
    }
  },
  getters: {
    about: state => state.about,
    contact: state => state.contact,
    projects: state => state.projects,
    skills: state => state.skills
  },
  actions: {
    loadAbout: ({ commit }) => commit('loadAbout'),
    loadProjects: ({ commit }) => commit('loadProjects'),
    loadSkills: ({ commit }) => commit('loadSkills'),
    loadContact: ({ commit }) => commit('loadContact')
  }
})

export { store }
