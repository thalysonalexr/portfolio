<template>
  <div id="navbar">
    <nav class="nav-extended">
      <div class="nav-wrapper">
        <router-link
          :to="{ path: '/portfolio/' }"
          title="portfolio.me"
          class="brand-logo center">
          portfolio.me
        </router-link>
        <a href="#"
          data-target="mobile-demo"
          class="sidenav-trigger">
          <i class="small material-icons">
            menu
          </i>
        </a>
        <ul
          id="nav-mobile"
          class="right hide-on-med-and-down">
          <li>
            <router-link
              :to="{ path: '/portfolio/' }"
              :title="nav[lang].home"
              class="link-mobile">
              <i class="inline-icon material-icons">
                star
              </i>
              <span>{{ nav[lang].home }}</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ path: '/portfolio/projects' }"
              :title="nav[lang].projects"
              class="link-mobile">
              <i class="inline-icon material-icons">
                work
              </i>
              <span>{{ nav[lang].projects }}</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ path: '/portfolio/skills' }"
              :title="nav[lang].skills"
              class="link-mobile">
              <i class="inline-icon material-icons">
                code
              </i>
              <span>{{ nav[lang].skills }}</span>
            </router-link>
          </li>
          <li>
            <a
              :title="nav[lang].contact"
              class="link-mobile"
              @click="goEndPage()">
              <i class="inline-icon material-icons">
                email
              </i>
              <span>{{ nav[lang].contact }}</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <ul class="sidenav" id="mobile-demo">
      <li>
        <router-link
          :to="{ path: '/portfolio/' }"
          :title="nav[lang].home"
          class="link-mobile">
          <i class="inline-icon material-icons">
            star
          </i>
          {{ nav[lang].home }}
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ path: '/portfolio/projects' }"
          :title="nav[lang].projects"
          class="link-mobile">
          <i class="inline-icon material-icons">
            work
          </i>
          {{ nav[lang].projects }}
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ path: '/portfolio/skills' }"
          :title="nav[lang].skills"
          class="link-mobile">
          <i class="inline-icon material-icons">
            code
          </i>
          {{ nav[lang].skills }}
        </router-link>
      </li>
      <li>
        <a
          :title="nav[lang].contact"
          class="link-mobile"
          @click="goEndPage()">
          <i class="inline-icon material-icons">email</i>
          {{ nav[lang].contact }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Navbar',
  data () {
    return {
      sidenav: null,
      nav: {
        en_US: {
          home: 'About me',
          projects: 'Projects',
          skills: 'Skills',
          contact: 'Contact-me'
        },
        pt_BR: {
          home: 'Sobre mim',
          projects: 'Projetos',
          skills: 'Skills',
          contact: 'Contato'
        }
      }
    }
  },
  computed: {
    ...mapGetters(['lang'])
  },
  methods: {
    ...mapActions(['getLanguage']),
    goEndPage () {
      window.scrollTo(0, document.body.scrollHeight)
    }
  },
  created () {
    this.getLanguage()
  },
  mounted () {
    const elems = document.querySelectorAll('.sidenav')
    /* eslint-disable no-undef */
    M.Sidenav.init(elems, {})

    this.sidenav = M.Sidenav.getInstance(elems[0])

    // fechar todos os <router-link/>
    document.querySelectorAll('.link-mobile').forEach((el) => {
      el.addEventListener('click', (e) => {
        this.sidenav.close()
      })
    })
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap');

.brand-logo {
  font-size: 2rem;
  font-family: 'Kaushan Script', cursive;
}

.small{ font-size: 2rem!important; }

.inline-icon {
  vertical-align: bottom;
  display: inline-block;
  color: #fcfcfc!important;
}

.nav-wrapper li a {
  font-size: 1rem;
  text-transform: uppercase;
}

.link-mobile {
  font-size: 1.5em;
  text-align: left;
  color: #fcfcfc;
  cursor: pointer;
}

nav.nav-extended { background-color: var(--color-primary); }

.sidenav {
  background-image: linear-gradient(270deg, rgba(25, 50, 60, 0.5)), url('../assets/images/bg-app.png');
  background-repeat: repeat;
  background-blend-mode: multiply;
  background-color: var(--color-primary);
}

.sidenav li {
  margin-top: 5%;
  margin-bottom: 5%;
}

</style>
