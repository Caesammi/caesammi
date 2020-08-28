import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import highCharts from 'highcharts'
import HighchartsVue from 'highcharts-vue'
import highcharts3d from 'highcharts/highcharts-3d'
import 'element-ui/lib/theme-chalk/index.css'
import VueAMap from 'vue-amap'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/eleTheme.scss'
import './assets/css/common.css'
import './assets/css/DarkTheme.css'

import * as myApi from '@/request/api'


Vue.use(ElementUI)
Vue.use(HighchartsVue)
highcharts3d(highCharts)
Vue.use(VueAMap)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.prototype.myApi = myApi


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
