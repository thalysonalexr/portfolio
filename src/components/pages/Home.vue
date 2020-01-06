<template>
  <div id="about" class="container">
    <div class="skew bg-home">
      <figure class="figure-perfil z-depth-5">
        <img class="picture" :src="about.figure" alt="">
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
    <section class="container bio">
      <h3 class="open-sans title title-about">Sobre mim</h3>
      <article>
        <p class="open-sans">{{ about.about_me }}</p>
      </article>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapGetters(['about'])
  },
  methods: {
    ...mapActions(['loadAbout'])
  },
  created () {
    this.loadAbout()
  }
}
</script>

<style scoped>

#about{
  min-width: 100%;
  min-height: 100%;
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 0 5%;
}

.figure-perfil{
  margin: auto;
  width: 150px;
  transition: 300ms ease-in;
  padding-top: 5%;
}

img.picture{
  width: 150px;
  height: 150px;
  border-radius: 150px;
  border: 5px solid #fcfcfc;
}

.title{
  color: #fcfcfc !important;
  margin: 2%;
}

.title-about{
  text-transform: uppercase;
  font-size: 1.5rem;
  text-align: left;
  margin: 5% 0;
  color: #4A4E69 !important;
  font-weight: 700;
}

h1.title{
  font-size: 2rem!important;
  font-weight: 700;
}

h2.title{
  font-size: 1rem!important;
  font-style: italic;
  font-weight: 100;
}

.bio article p{
  text-align: justify;
  color: #4A4E69 !important;
  font-weight: 100;
  font-size: 1.2rem;
  line-height: 2rem;
}

@media all and (min-width: 400px) {
  img.picture{
    width: 170px;
    height: 170px;
    border-radius: 200px;
  }

  .figure-perfil{
    margin: auto;
    width: 170px;
    padding-top: 2%;
  }

  h1.title{
    font-size: 2.5rem!important;
  }

  h2.title{
    font-size: 1.5rem!important;
  }
}

.skew {
  -webkit-clip-path: polygon(0 0%, 100% 0%, 100% 96%, 0% 100%);
  -ms-clip-path: polygon(0 0%, 100% 0%, 100% 96%, 0% 100%);
  clip-path: polygon(0 0%, 100% 0%, 100% 96%, 0% 100%);
}

.bg-home{
  padding: 3%;
  background-image: linear-gradient(270deg, rgba(0, 0, 0, 0.7)), url('../../assets/images/bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
}

@media all and (min-width: 560px) {
  img.picture{
    width: 200px;
    height: 200px;
    border-radius: 200px;
  }

  .figure-perfil{
    margin: auto;
    width: 200px;
    padding-top: 0%;
  }

  h1.title{
    font-size: 2.5rem!important;
  }

  h2.title{
    font-size: 1.3rem!important;
  }

  .bio article p{
    line-height: 2.5rem;
  }
}

@media all and (min-width: 992px) {
  #about{ padding: 0 10%; }
}

</style>
