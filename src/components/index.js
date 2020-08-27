import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import EdButton from "./ed-button/index.js";
import EdPie from "./ed-pie/index.js";
import EdBar from "./ed-bar/index.js";
import EdSign from "./ed-sign/index.js";
import EdCurve from "./ed-curve/index.js";
import EdSchema from "./ed-schema/index.js";
import EdClamp from "./ed-clamp/index.js";
import EdListTable from "./ed-table/index.js";
import EdPagination from "./ed-pagination/index.js";
import EdHeaderTitle from "./ed-header-title/index.js";
import EdPopover from "./ed-popover/index.js";
import EdSelect from "./ed-select/index.js";
import EdRadio from "./ed-radio/index.js";
import EdCheckbox from "./ed-checkbox/index.js";
import EdInput from "./ed-input/index.js";
import EdTabs from "./ed-tabs/index.js";
import EdSearch from "./ed-search/index.js";
import EdDropdown from "./ed-dropdown/index.js";
import EdTag from "./ed-tag/index.js";
import EdForm from "./ed-form/index.js";
import EdIcon from "./ed-icon/index.js";

const Components  = {
  ElementUI,
  EdButton,
  EdPie,
  EdBar,
  EdSign,
  EdCurve,
  EdSchema,
  EdClamp,
  EdListTable,
  EdPagination,
  EdHeaderTitle,
  EdPopover,
  EdSelect,
  EdRadio,
  EdCheckbox,
  EdInput,
  EdTabs,
  EdSearch,
  EdDropdown,
  EdTag,
  EdForm,
  EdIcon
}

Object.keys(Components).forEach(name => {
  Vue.use(Components[name])
})

export default Components