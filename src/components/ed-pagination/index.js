/*
分页
*/
import EdPaginationComp from './ed-pagination'

const EdPagination = {
  install: function(Vue) {
    Vue.component('ed-pagination', EdPaginationComp)
  }
}

export default EdPagination
