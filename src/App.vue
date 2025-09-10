<script>
import AppNavBar from './components/AppNavBar.vue'
import AppFooter from './components/AppFooter.vue'
export default {
  name: 'App',
  components: {
    AppNavBar,
    AppFooter
  }
}
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