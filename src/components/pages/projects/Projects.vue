<template>
  <div id="projects">
    <v-header
      :title="projects.title"
      :apresentation="projects.apresentation"
    >
    </v-header>
    <section class="container">
      <div class="row">
        <div v-for="(project, index) in projects.all" :key="index" class="col s12 m6 l4">
          <div class="card medium hoverable">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" :alt="project.description" :src=project.figure>
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                {{ project.title }}
                <i class="material-icons right">more_vert</i>
              </span>
              <p class="desc">{{ project.description }}</p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">
                {{ language === 'pt-BR' ? 'Especificações' : 'Specifications' }}
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
                  :title="(language === 'pt-BR' ? 'Visitar ' : 'Visit ') + project.title"
                >
                  <i class="fa fa-external-link"></i>
                </a>
                <a
                  :href="project.source"
                  class="btn-floating btn-large waves-effect waves-light yellow darken-4 tooltipped"
                  target="_blank"
                  rel="noopener"
                  :title="language === 'pt-BR' ? 'Ir para repositório do Projeto' : 'Go to repository of project'"
                >
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Header from '../../Header'
import { getDocumentLanguage } from '../../../helpers/index'
export default {
  name: 'Projects',
  data () {
    return {
      language: null
    }
  },
  components: {
    'v-header': Header
  },
  computed: {
    ...mapGetters(['projects'])
  },
  methods: {
    ...mapActions(['loadProjects'])
  },
  created () {
    this.language = getDocumentLanguage()
    this.loadProjects()
  }
}
</script>

<style scoped>

.desc{ font-weight: 300; }

.specs{ padding: 5%; }

.specs li{
  text-align: left;
  list-style-type: disc!important;
}

.card-content p{
  font-size: 1rem;
  text-align: justify;
  line-height: 1.2rem;
  height: 150px;
  overflow: hidden;
}

.card.medium .card-image{
  height: 200px!important;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-title{ color: #f57f17!important; }

.card-action a{ margin: 0 5%; }

</style>
