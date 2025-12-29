<template>
    <div class="tarjeta">
        <img src="@/assets/Rick_and_Morty.jpg" :alt="Presentacion" class="tarjeta-imagen"/>
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
.tarjeta {
    justify-content: center;
    width: 500px;
    border: 1px solid #98989869;
    border-radius: 12px;
    padding: 16px;
    margin: 12px;
    text-align: center;
    background: rgba(174, 174, 174, 0.462);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.tarjeta-imagen {
    width: 50%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 12px;
}

</style>
