<template>
  <v-wait for="load projects">
    <template slot="waiting">
      <v-loading/>
    </template>
    <div v-if="projects.length" id="projects">
      <section class="container">
        <div class="row">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="col s12 m6 l4">
            <div class="card medium hoverable">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator"
                  :alt="project.title"
                  :src=project.thumbnail>
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
                  <li v-for="(topic, index) in project.topics" :key="index">
                    <span class="text">{{ topic }}</span>
                  </li>
                </ul>
                <div class="card-action">
                  <a
                    v-if="project.link"
                    :href="project.link"
                    class="btn-link btn-floating btn-large waves-effect waves-light tooltipped"
                    target="_blank"
                    rel="noopener noreferrer"
                    :title="page[lang].visit + ' ' +  project.title">
                    <i class="fas fa-link"></i>
                  </a>
                  <a
                    :href="project.source"
                    class="btn-link btn-floating btn-large waves-effect waves-light tooltipped"
                    target="_blank"
                    rel="noopener noreferrer"
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
    'v-error': Error,
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

.material-icons.right {
  margin: 0;
}

.desc { font-weight: 300; }

.specs { padding: 2vh; }

.card { border-radius: 10px; }

.btn-link { background-color: var(--color-primary); }

.specs li {
  list-style-type: disc!important;

  font-size: 1rem;
  font-weight: 300;
  text-align: left;

  width: 100%;
}

.card-content p {
  font-size: 1rem;
  line-height: 20px;
  text-align: justify;
  overflow: hidden;
}

.card.medium .card-image {
  height: 200px!important;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0px 0px;
}

.card.medium .card-image > img {
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.card-title {
  font-size: 22px;
  color: #19323C!important;
  font-weight: 700;
}

.card-action a { margin: 0 5%; }

.card-action a i { font-size: 18px; }

</style>
