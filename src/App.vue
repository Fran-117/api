
<template>
  <div class="contenedor">
    <EsteticaTarjetas
      Imagen="@/assets/Rick_and_Morty.jpg"
      titulo="Exploremos la serie RICK AND MORTY"
      descripcion=""
    />
  </div>

    <div class="Contenido">
        <h2>{{ nombre }}</h2>
        <p>{{ descripcion }}</p>
    </div>
</template>



<script>

import EsteticaTarjetas from './components/TarjetasTitulo.vue';

export default {
  name: 'App',
  components: {
    EsteticaTarjetas
  }
}

</script>

<style>
.contenedor {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding-top: 40px;
}
</style>