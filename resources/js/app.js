import './bootstrap';
import app from './vue/app.vue'
import {createApp} from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faPlusSquare , faTrash } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlusSquare , faTrash)

createApp(app).component('font-awesome-icon', FontAwesomeIcon).mount("#app");
