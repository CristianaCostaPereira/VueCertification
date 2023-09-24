import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Because im using single-file components (SFC's)
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
