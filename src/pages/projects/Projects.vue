<template>
  <v-wait for="load projects">
    <template slot="waiting">
      <v-loading/>
    </template>
    <div id="projects">
      <section class="container">
        <div class="row">
          <div
            v-for="(project, index) in projects.all"
            :key="index"
            class="col s12 m6 l4">
            <div class="card medium hoverable">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator"
                  :alt="project.description"
                  :src=project.figure>
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  {{ project.title }}
                  <i class="material-icons right">more_vert</i>
                </span>
                <p class="desc">
                  {{ project.description }}
                </p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  {{ page[lang].specs }}
                  <i class="material-icons right">close</i>
                </span>
                <ul class="specs">
                  <li v-for="(spec, index) in project.spec" :key="index">
                    {{ spec.description }}
                  </li>
                </ul>
                <div class="card-action">
                  <a
                    :href="project.link"
                    class="btn-floating btn-large waves-effect waves-light yellow darken-4 tooltipped"
                    target="_blank"
                    rel="noopener"
                    :title="page[lang].visit + ' ' +  project.title">
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                  <a
                    :href="project.source"
                    class="btn-floating btn-large waves-effect waves-light yellow darken-4 tooltipped"
                    target="_blank"
                    rel="noopener"
                    :title="page[lang].goRepository">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </v-wait>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Loading from '../../components/Loading'

export default {
  name: 'Projects',
  data () {
    return {
      page: {
        pt_BR: {
          specs: 'Especificações',
          visit: 'Visitar',
          goRepository: 'Ir para repositório do Projeto'
        },
        en_US: {
          specs: 'Specifications',
          visit: 'Visit',
          goRepository: 'Go to repository of project'
        }
      }
    }
  },
  components: {
    'v-loading': Loading
  },
  computed: {
    ...mapGetters(['projects', 'lang'])
  },
  methods: {
    ...mapActions(['loadProjects', 'getLanguage']),
    async load () {
      this.$wait.start('load projects')
      await this.loadProjects()
      this.$wait.end('load projects')
    }
  },
  created () {
    this.getLanguage()
    this.load()
  }
}
</script>

<style scoped>

.desc { font-weight: 300; }

.specs { padding: 5%; }

.card { border-radius: 10px; }

.specs li {
  text-align: left;
  list-style-type: disc!important;
}

.card-content p {
  font-size: 1rem;
  text-align: justify;
  line-height: 1.2rem;
  height: 150px;
  overflow: hidden;
}

.card.medium .card-image {
  height: 200px!important;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-title {
  color: #19323C!important;
  font-weight: 700;
}

.card-action a { margin: 0 5%; }

</style>
