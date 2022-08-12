import { createApp } from 'vue'
import App from './App.vue'

import router from './router.js'

/*
* FontAwesome
* При использовании более 3х иконок - вынести в отдельный файл-хелпер
* */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount( '#app')
