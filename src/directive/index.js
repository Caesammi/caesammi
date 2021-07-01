import dragDialog from './dragDialog'
import flatDialog from './flatDialog'
import tabsFitHeightDialog from './tabsFitHeightDialog'
import drag from './drag'
import echartResize from './echartResize'

const directives = Vue => {
  Vue.directive('drag-dialog', dragDialog)
  Vue.directive('flat-dialog', flatDialog)
  Vue.directive('tabs-fit-height-dialog', tabsFitHeightDialog)
  Vue.directive('drag', drag)
  Vue.directive('echart-resize', echartResize)
}

export default directives
