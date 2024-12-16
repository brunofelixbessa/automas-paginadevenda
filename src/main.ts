import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { mask } from 'vue-the-mask'

const app = createApp(App)
app.directive('mask', mask)
app.mount('#app')
