<template>
  <div id="app">
    <v-navbar/>
    <router-view/>
    <v-footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    'v-navbar': Navbar,
    'v-footer': Footer
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url('./assets/images/bg-app.png');
  background-repeat: repeat;
  background-blend-mode: multiply;
}
</style>
