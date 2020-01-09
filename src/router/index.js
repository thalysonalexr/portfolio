import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home/index'
import Projects from '@/components/pages/projects/index'
import Skills from '@/components/pages/skills/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  path: __dirname,
  routes: [
    { path: '/', redirect: '/portfolio/' },
    { path: '/portfolio/', name: 'Home', component: Home },
    {
      path: '/portfolio/projects',
      name: 'Projects',
      component: Projects
    },
    { path: '/portfolio/skills', name: 'Skills', component: Skills },
    { path: '/*', redirect: '/portfolio/' }
  ]
})
