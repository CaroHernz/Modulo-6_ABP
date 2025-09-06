<template>
  <v-container fluid class="main-content bg-light p-5">
    <div class="container my-3 rounded p-5 bg-white shadow">
    <h1 class="text-center mb-4">ABP3: Binding de formularios</h1>
    <hr>
    <p>En esta actividad veremos cómo administrar en Vue un conjunto de controles input (radio) para identificar la opción seleccionada. Para ésto debemos definir en el modelo de datos una única propiedad que almacenará el valor de la seleccionada.</p>
    <p><strong>Requerimientos:</strong></p>
    <div>
      <ul>
      <li>Crear 4 controles de tipo radio que permitan seleccionar que tipo de estudios tiene el visitante. Mostrar en la parte inferior cual se encuentra actualmente seleccionado a partir de los datos del modelo.</li>
      <li>Mostrar en un control tipo 'select' los días de la semana. Cuando el operador lo selecciona, mostrar cuál seleccionó.</li>
    </ul>
    </div>
    <hr>

    <h2 class="text-center mb-4"></h2>

  </div>
</v-container>
</template>
<script>

</script>
<style scoped>
.container {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}
</style>
