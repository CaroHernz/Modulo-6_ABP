<template>
  <div class="full-height-container bg-light p-5">
    <v-container fluid>
          <v-card class="bg-white rounded shadow p-3">
            <v-card-text class="text-center pa-8">
              <h1 class="welcome-title">Bienvenido al Módulo 6</h1>
              <p class="text-body-1">Selecciona una actividad en el menú lateral para comenzar</p>
            </v-card-text>
          </v-card>
    </v-container>
  </div>
</template>

<script setup>
</script>

<style scoped>
.full-height-container {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.welcome-title {
  color: #1976d2;
  font-weight: 700;
  margin-bottom: 16px;
}
.welcome-icon {
  font-size: 64px;
  color: #1976d2;
  margin-bottom: 20px;
}
</style>