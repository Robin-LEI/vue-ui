import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

import EdButton from "@/components/ed-button/index.js";
import EdPie from "@/components/ed-pie/index.js";
import EdBar from "@/components/ed-bar/index.js";
import EdSign from "@/components/ed-sign/index.js";
import EdCurve from "@/components/ed-curve/index.js";
import EdSchema from "@/components/ed-schema/index.js";
import EdClamp from "@/components/ed-clamp/index.js";

Vue.config.productionTip = false

Vue.use(EdButton);
Vue.use(EdPie);
Vue.use(EdBar);
Vue.use(EdSign);
Vue.use(EdCurve);
Vue.use(EdClamp);
Vue.use(EdSchema);

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
