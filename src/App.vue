<template>
  <div id="app">
    <v-loading :is-loading=isLoading></v-loading>
    <v-navbar></v-navbar>
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loading from './components/Loading'

export default {
  name: 'App',
  components: {
    'v-navbar': Navbar,
    'v-footer': Footer,
    'v-loading': Loading
  },
  data () {
    return {
      isLoading: true
    }
  },
  mounted () {
    let self = this
    setTimeout(function () {
      self.isLoading = false
    }, 5000)
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url('./assets/images/bg-app.png') repeat;
}
</style>
