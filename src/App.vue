
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

    <div class="modal" v-on:click="AbrirModal()">
      <ModalContenido
        v-if="mostrarModal"
        :named="personajeSeleccionado.name"
        :description="personajeSeleccionado.status"
        :image="personajeSeleccionado.image"
        :especie="personajeSeleccionado.species"
        :genero="personajeSeleccionado.gender"
      />
    </div>
</template>


<script>

import { getPersonajes } from './Api';
import TarjetasContenido from './components/TarjetasContenido.vue';
import EsteticaTarjetas from './components/TarjetasTitulo.vue';
import ModalContenido from './components/ModalContenido.vue';

export default {
  name: 'App',
  components: {
    EsteticaTarjetas,
    TarjetasContenido,
    ModalContenido
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
