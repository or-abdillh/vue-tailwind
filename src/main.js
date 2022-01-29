import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import '@/styles/index.css'
import '@/styles/app.css'

createApp(App)
.use(router)
.use(createPinia())
.mount('#app')
