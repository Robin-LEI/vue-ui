import Vue from 'vue';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import EdButton from "../../../src/components/ed-button/ed-button.vue"

Vue.component(EdButton.name, EdButton)
export default ({
    Vue
}) => {
    Vue.use(Element)
}