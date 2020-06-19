<template>
  <v-wait for="load home">
    <template slot="waiting">
      <v-loading/>
    </template>
    <div v-if="about" id="about" class="container">
      <div class="skew bg-home">
        <figure class="figure-perfil">
          <img
            class="picture"
            :src="about.figure"
            alt="Avatar">
        </figure>
        <header class="header">
          <h1 class="title">
            {{ about.name }}
          </h1>
          <h2 class="title">
            {{ about.description }}
            <i class="far fa-dot-circle"></i>
          </h2>
        </header>
      </div>
      <section class="bio">
        <div class="skew-2 about-me grey lighten-5 z-depth-3">
          <h3 class="title title-about">
            {{ home[lang].title }}
          </h3>
          <article>
            <p class="desc">
              {{ about.about_me }}
            </p>
          </article>
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
  name: 'Home',
  data () {
    return {
      home: {
        pt_BR: {
          title: 'Sobre mim'
        },
        en_US: {
          title: 'About me'
        }
      }
    }
  },
  components: {
    'v-error': Error,
    'v-loading': Loading
  },
  computed: {
    ...mapGetters(['about', 'lang'])
  },
  methods: {
    ...mapActions(['loadAbout', 'getLanguage']),

    async load () {
      this.$wait.start('load home')
      await this.loadAbout()
      this.$wait.end('load home')
    }
  },
  created () {
    this.getLanguage()
    this.load()
  }
}
</script>

<style scoped>

#about {
  min-width: 100%;
  min-height: 100%;
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 0 4%;
}

.desc { font-weight: 300!important; }

.figure-perfil {
  margin: auto;
  width: 150px;
  transition: 300ms ease-in;
  padding-top: 5%;
}

img.picture {
  width: 150px;
  height: 150px;
  border-radius: 150px;
  border: 5px solid #fcfcfc;
}

.title {
  color: #fcfcfc !important;
  margin: 2%;
}

.title-about {
  text-transform: uppercase;
  font-size: 1.5rem;
  text-align: left;
  margin: 4% 0;
  color: #4A4E69 !important;
  font-weight: 700;
}

h1.title {
  font-size: 2rem!important;
  font-weight: 700;
}

h2.title {
  font-size: 1rem!important;
  font-style: italic;
  font-weight: 100;
}

.about-me {
  padding: 5%;
  border-radius: 10px;
  box-shadow: 3px 3px 4px 4px #4A4E69;
}

.bio article p {
  text-align: justify;
  color: #4A4E69 !important;
  font-weight: 100;
  font-size: 1.2rem;
  line-height: 2rem;
}

@media all and (min-width: 400px) {
  img.picture {
    width: 170px;
    height: 170px;
    border-radius: 200px;
  }

  .figure-perfil{
    margin: auto;
    width: 170px;
    padding-top: 2%;
  }

  h1.title { font-size: 2.5rem!important; }

  h2.title { font-size: 1.5rem!important; }
}

.skew {
  -webkit-clip-path: polygon(0 0%, 100% 0%, 100% 95%, 0% 100%);
  -ms-clip-path: polygon(0 0%, 100% 0%, 100% 95%, 0% 100%);
  clip-path: polygon(0 0%, 100% 0%, 100% 95%, 0% 100%);
}

.skew-2 {
  -ms-clip-path: polygon(0 5%, 100% 0%, 100% 95%, 0% 100%);
  clip-path: polygon(0 5%, 100% 0%, 100% 95%, 0% 100%);
  clip-path: polygon(0 5%, 100% 0%, 100% 95%, 0% 100%);
}

.bg-home {
  padding: 3%;
  background-image: linear-gradient(270deg, rgba(0, 0, 0, 0.7)), url('../../assets/images/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-position: center center;
}

@media all and (min-width: 560px) {
  img.picture {
    width: 200px;
    height: 200px;
    border-radius: 200px;
  }

  .figure-perfil {
    margin: auto;
    width: 200px;
    padding-top: 0%;
  }

  h1.title{ font-size: 2.5rem!important; }

  h2.title { font-size: 1.3rem!important; }

  .bio article p { line-height: 2.5rem; }
}

@media all and (min-width: 992px) {
  #about { padding: 0 10%; }

  .title-about {
    font-size: 2rem;
    margin: 2% 0;
  }

  .bio article p { font-size: 1.5rem; }
}

</style>
