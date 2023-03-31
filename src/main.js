import { createApp } from 'vue'
import './assets/scss/main.scss';
import App from './App.vue'

// FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// IMPORTARE ICONE SPECIFICHE
import { faStar } from '@fortawesome/free-regular-svg-icons';
// rinomino la stella piena così evito che venga interpretata o una o l'altra
import { faStar as faStarFull } from '@fortawesome/free-solid-svg-icons';



library.add(faStar, faStarFull)



createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
