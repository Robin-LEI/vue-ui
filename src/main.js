import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

import EdButton from "@/components/ed-button/index.js";

Vue.config.productionTip = false

Vue.use(EdButton);

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
