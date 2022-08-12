import { createApp } from 'vue'
import App from './App.vue'

import router from './router.js'

/*
* FontAwesome
* */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/*
* При использовании более 3х иконок - вынести в отдельный файл-хелпер
* */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount( '#app')
