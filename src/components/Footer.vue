<template>
  <div id="footer">
    <footer class="page-footer yellow darken-3 skew">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">{{ contact.title }}</h5>
            <p class="apresentation grey-text text-lighten-4">
              {{ contact.apresentation }}
            </p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Contate-me</h5>
            <ul class="links-contact">
              <li v-for="(page, index) in contact.pages" :key="index">
                <a
                  class="grey-text text-lighten-3"
                  :href="page.link"
                  target="_blank"
                  rel="noopener"
                  :title="page.type"
                >
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
        <a @click="goBegin()" class="grey-text text-lighten-4 right" href="#!">
          <i class="material-icons">keyboard_arrow_up</i>
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
  computed: {
    ...mapGetters(['contact'])
  },
  methods: {
    ...mapActions(['loadContact']),
    goBegin () {
      // eslint-disable-next-line
      $('html, body').animate({
        scrollTop: 0
      }, 500)
    }
  },
  created () {
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
