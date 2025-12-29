
<template>
  <div class="contenedor">
    <EsteticaTarjetas
      Imagen="@/assets/Rick_and_Morty.jpg"
      titulo="Exploremos la serie RICK AND MORTY"
      descripcion=""
    />
  </div>

    <div class="Contenido">
    <TarjetasContenido
      v-for="personaje in personajes"
      :key="personaje.id"
      :nombre="personaje.name"
      :descripcion="personaje.description"
      :imagen="personaje.image"
    />
    </div>
</template>



<script>

import TarjetasContenido from './components/TarjetasContenido.vue';
import EsteticaTarjetas from './components/TarjetasTitulo.vue';

export default {
  name: 'App',
  components: {
    EsteticaTarjetas,
    TarjetasContenido
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