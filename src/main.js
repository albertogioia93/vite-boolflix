import { createApp } from 'vue'
import './assets/scss/main.scss';
import App from './App.vue'

// FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
library.add(faHatWizard)



createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
