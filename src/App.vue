
<template>
  <div class="contenedor">
    <EsteticaTarjetas
      Imagen="@/assets/Rick_and_Morty.jpg"
      titulo="Exploremos la serie RICK AND MORTY"
      descripcion=""
    />
  </div>

    <div class="contenido">
    <TarjetasContenido
      v-for="personaje in personajes"
      :key="personaje.id"
      :named="personaje.name"
      :description="personaje.status"
      :image="personaje.image"
    />
    </div>
</template>



<script>

import { getPersonajes } from './Api';
import TarjetasContenido from './components/TarjetasContenido.vue';
import EsteticaTarjetas from './components/TarjetasTitulo.vue';

export default {
  name: 'App',
  components: {
    EsteticaTarjetas,
    TarjetasContenido
  },
    data() {
    return {
        personajes: []
    };
    },
    async mounted() {
        this.personajes = await getPersonajes();
        console.log('Personajes cargados:', this.personajes);
}

};
</script>

<style>
.contenedor {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding-top: 40px;
}

.contenido {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

</style>
