import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

import { Button, Form, FormItem, Input,Icon } from 'element-ui';

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Icon)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')