<template>
  <v-container fluid class="main-content bg-light p-5">
    <div class="container my-3 rounded p-5 bg-white shadow">
    <h1 class="text-center mb-4">ABP1: VueJS</h1>
    <hr>
    <p>Este mini proyecto consiste en mostrar una tabla de usuarios, dónde se muestran los datos de 3 personas (nombre, apellido, fecha de nacimiento y edad)</p>
    <p><strong>Requerimientos:</strong></p>
    <div>
      <ul>
      <li>Utilizar Boostrap para darle estilo a la tabla</li>
      <li>Los datos deben estar almacenados en la data de la instancia de VueJS y ser renderiados en la tabla directamente</li>
    </ul>
    </div>
    <hr>

    <h2 class="text-center mb-4">Tabla de Usuarios</h2>
    <table class="table">
      <thead class="table-primary">
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Fecha de Nacimiento</th>
          <th>Edad</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario.id">
          <td>{{ usuario.nombre }}</td>
          <td>{{ usuario.apellido }}</td>
          <td>{{ usuario.fechaNacimiento }}</td>
          <td>{{ usuario.edad }}</td>
        </tr>
      </tbody>
    </table>
    <div class="bg-light rounded p-3">
      <div v-for="(usuario,index) in usuarios" :key="usuario.id" class="ms-2">
      <p>El usuario {{ usuario.id }} se llama {{ usuario.nombre }} {{ usuario.apellido }} y es {{ usuario.edad >= 18 ? 'mayor' : 'menor' }} de edad.</p>
    </div>
    </div>
  </div>
</v-container>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      usuarios: [
        {
          id:1,
          nombre: 'Carolina',
          apellido: 'Hernández',
          fechaNacimiento: '1990-05-15',
          edad: this.calcularEdad('1990-05-15')
        },
        {
          id:2,
          nombre: 'Fernanda',
          apellido: 'Barra',
          fechaNacimiento: '1991-10-30',
          edad: this.calcularEdad('1991-10-30')
        },
        {
          id:3,
          nombre: 'Matías',
          apellido: 'Barra',
          fechaNacimiento: '2015-12-18',
          edad: this.calcularEdad('2015-12-18')
        }
      ]
    }
  },
  methods: {
    calcularEdad(fechaNacimiento) {
      const fechaNac = new Date(fechaNacimiento)
      const hoy = new Date()
      let edad = hoy.getFullYear() - fechaNac.getFullYear();
      const mes = hoy.getMonth()-fechaNac.getMonth();
      if (mes <0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad --
      }
      return edad
    },
    formatFecha(fecha){
      return new Date(fecha).toLocaleDateString('es-ES')
  }}
}
</script>
<style scoped>
.container {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}
</style>
