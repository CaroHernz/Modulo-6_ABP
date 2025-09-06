<script setup>
import AppNavBar from './components/AppNavBar.vue'
import AppFooter from './components/AppFooter.vue'
import { ref } from 'vue'


</script>

<template>
  <v-app>
    <v-card>
      <v-layout>
            <AppNavBar />
            <v-main>
              <router-view></router-view>
            </v-main>
      </v-layout>
    </v-card>
  </v-app>
</template>