import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAMap from 'vue-amap'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/eleTheme.scss'
import './tools/dialogDrag'
import * as zcTools from '../src/tools/zcTools'
import * as test from '../src/tools/test'
import 'vue-number-counter/dist/vue-number-counter.css'
import VueNumberCounter from 'vue-number-counter'
import dataV from '@jiaminghi/data-view'

import * as myApi from '@/request/api'


Vue.use(ElementUI,{size:'mini'})
Vue.use(VueAMap)
Vue.use(VueAwesomeSwiper)
Vue.use(VueNumberCounter)
Vue.use(dataV)
Vue.config.productionTip = false
Vue.prototype.myApi = myApi
Vue.prototype.zcTools = zcTools
Vue.prototype.toolTest = test
VueAMap.initAMapApiLoader({
  key: 'your amap key',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
