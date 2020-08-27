import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./components"
import "./assets/fonts/iconfont.css"
import "./assets/fonts/iconfont.js"
import "./styles/index.scss";

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
