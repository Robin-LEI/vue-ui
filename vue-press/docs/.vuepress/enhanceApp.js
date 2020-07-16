import Vue from 'vue';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import EdButton from "../../../src/components/ed-button/ed-button.vue"
import EdPie from "../../../src/components/ed-pie/ed-pie.vue"
import EdBar from "../../../src/components/ed-bar/ed-bar.vue"
import EdSign from "../../../src/components/ed-sign/ed-sign.vue"
import EdCurve from "../../../src/components/ed-curve/ed-curve.vue"
import EdSchema from "../../../src/components/ed-schema/ed-schema.vue"
import EdClamp from "../../../src/components/ed-clamp/index.js"
import EdListTable from "../../../src/components/ed-table/index.js"
import PageDemo1 from "../../../src/examples/page_demo1.vue"
import EdPagination from "../../../src/components/ed-pagination/index.js"
import EdHeaderTitle from "../../../src/components/ed-header-title/index.js"
import EdPopover from "../../../src/components/ed-popover/index.js"
import EdSelect from "../../../src/components/ed-select/index.js"
import EdRadio from "../../../src/components/ed-radio/index.js"

Vue.component(EdButton.name, EdButton)
Vue.component(EdPie.name, EdPie)
Vue.component(EdBar.name, EdBar)
Vue.component(EdSign.name, EdSign)
Vue.component(EdCurve.name, EdCurve)
Vue.component(EdSchema.name, EdSchema)

Vue.component(PageDemo1.name, PageDemo1)

Vue.use(EdClamp)
Vue.use(EdListTable)
Vue.use(EdPagination)
Vue.use(EdHeaderTitle)
Vue.use(EdPopover)
Vue.use(EdSelect)
Vue.use(EdRadio)
export default ({
    Vue
}) => {
    Vue.use(Element)
}