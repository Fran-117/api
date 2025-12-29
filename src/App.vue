
<template>
  <img src="@/assets/Rick_and_Morty.jpg" alt="Rick and Morty" />
  <TituloPrincipal msg="Welcome to Your Vue.js App"/>
</template>

<script>
import TituloPrincipal from './components/TituloPrincipal.vue';
export default {
  name: 'App',
  components: {
    TituloPrincipal
  }
}
</script>

<style>
#app {
  font-family: 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
