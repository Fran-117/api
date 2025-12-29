<template>
    <div class="tarjeta">
        <img src="@/assets/Rick_and_Morty.jpg" :alt="Imagen" class="imagen-tarjeta"/>
        <h2>{{ titulo }}</h2>
        <p>{{ descripcion }}</p>
    </div>
</template>

<script>
export default {
    name: 'EsteticaTarjetas',
    props: {
        Imagen: String,
        titulo: String,
        descripcion: String 
    }
}
</script>

<style scoped>
.card {
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 16px;
  margin: 12px;
  text-align: center;
  background: white;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
.card-img {
  width: 100%;
  border-radius: 8px;
}
</style>
