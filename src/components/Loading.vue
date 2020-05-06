<template>
  <span></span>
</template>

<script>
import { pleaseWait } from 'please-wait'
import 'please-wait/build/please-wait.css'
import 'spinkit/spinkit.min.css'

export default {
  name: 'Loading',
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
      if (this.pleaseWaitInstance == null) {
        this.pleaseWaitInstance = pleaseWait({
          backgroundColor: '#19323C',
          loadingHtml: `
          <div class="sk-chase">
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
          </div>
          <p class="loading-message">Carregando...</p>
          `
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

div.sk-chase { margin: 0 auto!important; }

:root {
  --sk-color: #f5f5f5!important;
  --sk-size: 40px;
}

.pg-loading-logo-header { display: none!important; }

.loading-message {
  color: #f5f5f5;
  margin-top: 30px;
}

</style>
