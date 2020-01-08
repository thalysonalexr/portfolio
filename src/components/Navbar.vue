<template>
  <div id="navbar">
    <nav class="nav-extended yellow darken-3">
      <div class="nav-wrapper">
        <router-link
          :to="{ path: '/portfolio/' }"
          class="brand-logo center"
          >
          portfolio.me
        </router-link>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger">
          <i class="small material-icons">menu</i>
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <router-link
              :to="{ path: '/portfolio/' }"
              title="Página inicial"
              class="link-mobile"
            >
              <i class="inline-icon material-icons">star</i>
              Sobre
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ path: '/portfolio/projects' }"
              title="Projetos desenvolvidos"
            >
              <i class="inline-icon material-icons">work</i>
              Projetos
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ path: '/portfolio/skills' }"
              title="Habilidades/Ferramentas"
            >
              <i class="inline-icon material-icons">code</i>
              Skills
            </router-link>
          </li>
          <li>
            <a
              title="Contato"
              class="link-mobile"
              @click="goEnd()"
            >
              <i class="inline-icon material-icons">email</i>
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <ul class="sidenav yellow darken-4" id="mobile-demo">
      <li>
        <router-link
          :to="{ path: '/portfolio/' }"
          title="Página inicial"
          class="link-mobile"
        >
          <i class="inline-icon material-icons">star</i>
          Sobre
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ path: '/portfolio/projects' }"
          title="Projetos desenvolvidos"
          class="link-mobile"
        >
          <i class="inline-icon material-icons">work</i>
          Projetos
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ path: '/portfolio/skills' }"
          title="Habilidades/Ferramentas"
          class="link-mobile"
        >
          <i class="inline-icon material-icons">code</i>
          Skills
        </router-link>
      </li>
      <li>
        <a
          title="Contato"
          class="link-mobile"
          @click="goEnd()"
        >
          <i class="inline-icon material-icons">email</i>
          Contato
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    goEnd () {
      // eslint-disable-next-line
      $('html, body').animate({
        // eslint-disable-next-line
        scrollTop: $(document).height()
      }, 500)
    }
  },
  created () {
    // eslint-disable-next-line
    $(document).ready(function () {
      // eslint-disable-next-line
      $('.sidenav').sidenav()
      // eslint-disable-next-line
      $('.link-mobile').click(function () {
        // eslint-disable-next-line
        let instance = M.Sidenav.getInstance($('.sidenav'));
        instance.close()
      })
    })
  }
}
</script>

<style scoped>

.brand-logo{
  font-size: 2rem;
}

.small{ font-size: 3rem!important; }

.inline-icon {
  vertical-align: bottom;
  display: inline-block;
}

.nav-wrapper li a{
  font-size: 1rem;
  text-transform: uppercase;
}

.link-mobile{
  font-size: 1.5em;
  text-align: left;
  color: #fcfcfc;
}

.sidenav{
  background-image: linear-gradient(270deg, rgba(245, 127, 23, 0.5)), url('../assets/images/bg-app.png');
  background-repeat: repeat;
  background-blend-mode: multiply;
}

.sidenav li{
  margin-top: 5%;
  margin-bottom: 5%;
}

</style>
