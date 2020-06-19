<template>
  <div class="container">
    <header>
      <h1><i class="fas fa-exclamation-triangle"></i>&nbsp;Ooops...</h1>
      <h2>Parece que esta página não está funcionando direito. Tente acessa-la mais tarde. Obrigado pela compreensão.</h2>
    </header>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  justify-content: center;
}

.container header {
  padding: 5%;
  margin: 2vh 0;

  border-radius: 10px;

  background-color: var(--color-white);
}

.container header > h1, h2 {
  color: var(--color-grey);
}

.container header > h2 {
  font-size: 2rem;
  font-weight: 300;
  line-height: 36px;
}

</style>
