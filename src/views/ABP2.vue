<template>
  <v-container fluid class="main-content bg-light p-5">
    <div class="container my-3 rounded p-5 bg-white shadow">
    <h1 class="text-center mb-4">ABP2: Templates y rendering en VueJS</h1>
    <hr>
    <p>En esta actividad se debe mostrar una lista de personajes ficticios con un nombre y descripció<noscript></noscript></p>
    <p><strong>Requerimientos:</strong></p>
    <div>
      <ul>
      <li>Utilizar Vue y sus directivas</li>
      <li>Crear una estructura Vue</li>
      <li>Usar un arreglo que recorra (nombre, descripción)</li>
      <li>Los datos deben estar definidos en un objeto</li>
    </ul>
    </div>
    <hr>

    <h2 class="text-center mb-4">Personajes Ficticios</h2>

    <div class="col" v-for="personaje in personajesData.personajes" :key="personaje.id">
      <div class="card-personaje card">
        <div class="card-img">
          <i :class="obtenerIcono(personaje.tipo)"></i>
        </div>
        <div class="card-id">#{{ personaje.id }}</div>
        <div class="card-content">
          <h3 class="card-name">{{ personaje.nombre }}</h3>
          <p class="card-description">{{ personaje.descripcion }}</p>
        </div>
      </div>
    </div>

  </div>
</v-container>
</template>
<script>
  const { createApp, ref } = Vue;
  createApp({
    setup() {
      const personajesData = ref({
        "personajes" : [
          {
            "id": "1",
            "nombre": "Dragón Blanco de Ojos Azules",
            "descripcion":"Una majestuosa criatura legendaria con escamas blancas como la nieve y ojos azules penetrantes. Es conocido por su aliento de hielo y su ferocidad en batalla.",
            "tipo":"dragon"
          },
          {
            "id": "2",
            "nombre": "Fénix de Fuego Eterno",
            "descripcion":"Un ave mítica que renace de sus propias cenizas. Sus plumas irradian calor y luz, y se dice que sus lágrimas tienen poder curativo.",
            "tipo":"fenix"
          },
          {
            "id": "3",
            "nombre": "Unicornio de Plata",
            "descripcion":"Una criatura noble y pura con un cuerno spiralado de plata. Representa la pureza y la gracia, y solo se muestra a aquellos de corazón bondadoso.",
            "tipo":"unicornio"
          }
        ]
      });
      const obtenerIcono = (tipo) => {
    const iconos = {
      'dragon': 'fas fa-dragon',
      'fenix': 'fas fa-fire',
      'unicornio': 'fas fa-horse-head'
    };
    return iconos[tipo] || 'fas fa-question';
  };
  return {
    personajesData, obtenerIcono
  };
    }
  }).mount('#app');
</script>
<style scoped>
.container {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}
</style>
