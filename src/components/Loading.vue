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
  -webkit-box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
}

</style>
