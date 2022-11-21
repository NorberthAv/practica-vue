import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'popper.js/dist/popper.min.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'


import App from './App.vue'
import router from './router'

import './assets/main.css'

library.add(fas)


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
