<template>
  <v-wait for="load skills">
    <template slot="waiting">
      <v-loading/>
    </template>
    <div v-if="skills.length" id="skills">
      <section class="container">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="card hoverable">
          <div class="card-content">
            <h3 class="light left-align title-group">
              {{ skill.group }}
            </h3>
            <div class="row text-center">
              <div
                v-for="(tool, index) in skill.tools"
                :key="index"
                class="col s4 m2 container-skill">
                <img
                  :src="tool.figure"
                  :alt="tool.name"
                  class="skill-figure"
                  :title="tool.name">
                <span class="light title-tool">
                  {{ tool.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div v-else>
      <v-error />
    </div>
  </v-wait>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Error from '@/components/Error'
import Loading from '@/components/Loading'

export default {
  name: 'Skills',
  components: {
    'v-error': Error,
    'v-loading': Loading
  },
  computed: {
    ...mapGetters(['skills'])
  },
  methods: {
    ...mapActions(['loadSkills']),

    async load () {
      this.$wait.start('load skills')
      await this.loadSkills()
      this.$wait.end('load skills')
    }
  },
  created () {
    this.load()
  }
}
</script>

<style scoped>

.container-skill {
  max-width: 150px;
}

.title-group {
  color: #19323C;
  font-weight: 100;
  border-bottom: 1px solid #ddd;
  padding-bottom: 2%;
  margin-bottom: 4%;
}

.skill-figure {
  margin: 0 auto;
  max-height: 70px;
  padding-bottom: 10px;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
}

.title-tool {
  font-size: 1.2rem;
  text-align: center;
  width: 100%;
  overflow: hidden;
}

.card{ border-radius: 10px; }

.container-skill { padding: 5%; }

@media all and (min-width: 440px) {
  .skill-figure { max-height: 80px; }
}

@media all and (min-width: 540px) {
  .skill-figure { max-height: 90px; }
}

@media all and (min-width: 600px) {
  .skill-figure { max-height: 60px; }
  .container-skill { padding: 2% 3%; }
  .title-tool { display: none; }
}

@media all and (min-width: 790px) {
  .container-skill { min-width: 140px; }
  .skill-figure { max-height: 80px; }
  .container-skill { padding: 2% 3%; }
  .title-tool { display: block; }
}

</style>
