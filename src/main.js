import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./styles/index.scss";

import EdButton from "@/components/ed-button/index.js";
import EdPie from "@/components/ed-pie/index.js";
import EdBar from "@/components/ed-bar/index.js";
import EdSign from "@/components/ed-sign/index.js";
import EdCurve from "@/components/ed-curve/index.js";
import EdSchema from "@/components/ed-schema/index.js";
import EdClamp from "@/components/ed-clamp/index.js";
import EdListTable from "@/components/ed-table/index.js";
import EdPagination from "@/components/ed-pagination/index.js";
import EdHeaderTitle from "@/components/ed-header-title/index.js";
import EdPopover from "@/components/ed-popover/index.js";
import EdSelect from "@/components/ed-select/index.js";
import EdRadio from "@/components/ed-radio/index.js";

Vue.config.productionTip = false

Vue.use(EdButton);
Vue.use(EdPie);
Vue.use(EdBar);
Vue.use(EdSign);
Vue.use(EdCurve);
Vue.use(EdClamp);
Vue.use(EdSchema);
Vue.use(EdListTable);
Vue.use(EdPagination);
Vue.use(EdHeaderTitle);
Vue.use(EdPopover);
Vue.use(EdSelect);
Vue.use(EdRadio);

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
