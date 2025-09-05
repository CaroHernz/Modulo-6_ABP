<script setup>
import AppNavBar from './components/AppNavBar.vue'
import AppFooter from './components/AppFooter.vue'
import ABP1 from './components/ABP1.vue'
import ABP2 from './components/ABP2.vue'
import ABP3 from './components/ABP3.vue'
import { ref } from 'vue'

const activeComponent = ref('none')

const setActiveComponent = (component) => {
  activeComponent.value = component
}
</script>

<template>
  <v-app>
    <v-card>
      <v-layout>
            <AppNavBar :active-item="activeComponent" @select-component="setActiveComponent"/>
            <v-main>
              <div v-if="activeComponent === 'none'">
                <v-container fluid class=" main-content bg-light p-5">
                <div class="welcome-message text-center container my-3 rounded p-5 bg-white shadow">
              <h1>Bienvenido al Módulo 6</h1>
              <p>Selecciona una actividad en el menú lateral para comenzar</p>
            </div>
            </v-container>
          </div>
          <ABP1 v-else-if="activeComponent === 'abp1'" />
          <ABP2 v-else-if="activeComponent === 'abp2'" />
          <ABP3 v-else-if="activeComponent === 'abp3'" />
          </v-main>
      </v-layout>
    </v-card>
  </v-app>
</template>