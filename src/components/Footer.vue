<template>
  <div id="footer">
    <footer class="page-footer yellow darken-3 skew">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">
              {{ contact.title }}
            </h5>
            <p class="apresentation grey-text text-lighten-4">
              {{ contact.apresentation }}
            </p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">
              {{ footer[lang].title }}
            </h5>
            <ul class="links-contact">
              <li v-for="(page, index) in contact.pages" :key="index">
                <a
                  class="grey-text text-lighten-3"
                  :href="page.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  :title="page.type">
                  <i :class="page.class"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
        © {{ (new Date).getFullYear() }} Copyright {{ contact.name }}
        <a @click="goBeginPage()" class="grey-text text-lighten-4 right" href="#!">
          <i class="material-icons">
            keyboard_arrow_up
          </i>
        </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Footer',
  data () {
    return {
      lang: null,
      footer: {
        en_US: {
          title: 'Contact me'
        },
        pt_BR: {
          title: 'Contate-me'
        }
      }
    }
  },
  computed: {
    ...mapGetters(['contact', 'lang'])
  },
  methods: {
    ...mapActions(['loadContact', 'getLanguage']),
    goBeginPage () {
      window.scrollTo(0, document.body.scrollHeight)
    }
  },
  created () {
    this.getLanguage()
    this.loadContact()
  }
}
</script>

<style scoped>

.page-footer{
  background-color: #e2e2e2;
}

.skew {
  -webkit-clip-path: polygon(0 4%, 100% 0%, 100% 100%, 0% 100%);
  -ms-clip-path: polygon(0 4%, 100% 0%, 100% 100%, 0% 100%);
  clip-path: polygon(0 4%, 100% 0%, 100% 100%, 0% 100%);
}

.links-contact li{
  display: inline-block;
  padding: 2%;
}

.links-contact a{
  font-size: 1.2rem;
}

.links-contact a i{
  font-size: 2rem;
  transition: transform 300ms ease;
}

.links-contact a i:hover{
  transform: scale(1.5,1.5);
}

.apresentation{
  text-align: justify;
}

</style>
