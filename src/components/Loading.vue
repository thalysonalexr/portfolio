<template>
  <span :title="isLoading"></span>
</template>

<script>
import { pleaseWait } from 'please-wait'
import 'please-wait/build/please-wait.css'
import 'spinkit/spinkit.min.css'
export default {
  name: 'Loading',
  props: ['isLoading'],
  data () {
    return {
      pleaseWaitInstance: null
    }
  },
  mounted () {
    this.updatePleaseWait()
  },
  beforeUpdate () {
    this.updatePleaseWait()
  },
  methods: {
    updatePleaseWait () {
      if (this.isLoading && this.pleaseWaitInstance == null) {
        const logos = [
          require('../assets/giphy/beetlejuice.gif'),
          require('../assets/giphy/dumbbledore.gif'),
          require('../assets/giphy/hey-arnold.gif'),
          require('../assets/giphy/mr-bean.gif'),
          require('../assets/giphy/simpsons.gif')
        ]

        let logo = logos[Math.floor(Math.random() * (logos.length - 0)) + 0]

        this.pleaseWaitInstance = pleaseWait({
          logo: logo,
          backgroundColor: '#f57f17',
          loadingHtml: `
          <p class="loading-message">Aguarde enquanto a página é carregada...</p>
          <div class="sk-chase">
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
          </div>`
        })
      }
      if (!this.isLoading && this.pleaseWaitInstance != null) {
        this.pleaseWaitInstance.finish()
      }
    }
  }
}
</script>

<style>

.loading-message {
  color: white!important;
  font-size: 1.5rem;
  text-shadow: 1px 2px 2px #404040;
}

div.sk-chase{
  margin: 0 auto!important;
}

:root{
  --sk-color: #fcfcfc!important;
  --sk-size: 70px;
}

.pg-loading-logo{
  width: 350px;
  border-radius: 350px;
  border: 10px solid #fcfcfc;
  box-shadow: 1px 2px 2px #404040;
}

</style>
