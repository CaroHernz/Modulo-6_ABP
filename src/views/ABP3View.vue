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
    </ul>
    </div>
    <div class="card">
      <div class="card-header bg-success">
        <h3 class="mb-0">🎓 Nivel de Estudios</h3>
      </div>
      <div class="card-body">
        <p class="text-muted">Seleccione su nivel máximo de estudios:</p>
        <div class="radio-group row ms-3">
          <label class= "form-check" v-for="(option,index) in opcionesEstudio" :key="index">
            <input type="radio" 
            :id="'estudio' +index"
            :value="option"
            v-model="estudios"
            class="form-check-input me-2"
            name="nivelEstudios" />
            <span class="me-5">{{ option }}</span>
            <br/>
          </label>
          <div class="mt-2" v-if="estudios">
            <strong>Selección actual:</strong>
            <span class="text-success ms-3">{{ estudios }}</span>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <ul>
      <li>Mostrar en un control tipo 'select' los días de la semana. Cuando el operador lo selecciona, mostrar cuál seleccionó.</li>
    </ul>
    <div class="card">
      <div class="card-header bg-warning">
        <h3 class="mb-0">📅 Día de la Semana</h3>
      </div>
      <div class="card-body">
        <p class="text-muted">Seleccione un día de la semana:</p>
        <select v-model="diaSeleccionado" class="form-select">
          <option disabled value="">-- Seleccione --</option>
          <option v-for="dia in diasSemana" :key="dia" :value="dia">{{ dia }}</option>
        </select>
        <div class="mt-3" v-if="diaSeleccionado">
          <strong>Día seleccionado:</strong>
          <span class="text-warning ms-3">{{ diaSeleccionado }}</span>
        </div>
      </div>
    </div>
  </div>
</v-container>
</template>
<script setup>
import { ref } from 'vue';
const opcionesEstudio = ref([
    'Educación Pre básica',
    'Educación Básica',
    'Educación Media',
    'Educación Técnico Profesional',
    'Educación Universitaria',
    'Postgrado'
  ]);
const estudios = ref('');

const diasSemana = ref([
    'Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'
  ]);
const diaSeleccionado = ref('')
</script>
<style scoped>
.container {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}
</style>
