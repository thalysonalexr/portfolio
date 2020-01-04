<template>
  <div>
    <h1>Projects</h1>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Projects',
  computed: {
    ...mapGetters(['projects'])
  },
  methods: {
    ...mapMutations(['loadProjects'])
  },
  created () {
    this.loadProjects()
  }
}
</script>

<style scoped>

</style>
