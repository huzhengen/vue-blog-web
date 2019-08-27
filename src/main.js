import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

import { Button, Form, FormItem, Input, Icon, 
	Dropdown, DropdownMenu, DropdownItem} from 'element-ui';

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Icon)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')