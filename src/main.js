import { createApp } from 'vue'
import './styles/main.css'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'

createApp(App).use(router).use(vuetify).mount('#app')