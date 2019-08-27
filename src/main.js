import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import { Button, Form, FormItem, Input } from 'element-ui';

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')