
<template>
  <div class="contenedor">
    <EsteticaTarjetas
      Imagen="@/assets/Rick_and_Morty.jpg"
      titulo=""
      descripcion=""
    />
  </div>
  <TituloPrincipal msg="Welcome to Your Vue.js App"/>
</template>

<script>
import TituloPrincipal from './components/TituloPrincipal.vue';
import EsteticaTarjetas from './components/EsteticaTarjetas.vue';

export default {
  name: 'App',
  components: {
    TituloPrincipal,
    EsteticaTarjetas
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
img {
  width: 200px;
  height: auto;
  margin-bottom: 10px;
  border-radius: 10px;
}

</style>
