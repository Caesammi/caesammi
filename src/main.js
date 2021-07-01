import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAMap from 'vue-amap'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import dayjs from 'dayjs'
import lodash from 'lodash'
import echarts from 'echarts'
import registerDirectives from './directive'

import './tools/dialogDrag'
import * as zcTools from '../src/tools/zcTools'
import * as test from '../src/tools/test'
import dataV from '@jiaminghi/data-view'

import * as API from './request/api'

require('./mock')

Vue.use(ElementUI, { size: 'mini' })
Vue.use(VueAMap)
Vue.use(VueAwesomeSwiper)
Vue.use(dataV)
Vue.config.productionTip = false
Vue.prototype.$API = API
Vue.prototype.$tools = zcTools
Vue.prototype.toolTest = test
Vue.prototype.$dayjs = dayjs
Vue.prototype._ = lodash
Vue.prototype.$echarts = echarts

// 注册指令
registerDirectives(Vue)

VueAMap.initAMapApiLoader({
	key: 'your amap key',
	plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
	// 默认高德 sdk 版本为 1.4.4
	v: '1.4.4'
})

window.vm = new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
