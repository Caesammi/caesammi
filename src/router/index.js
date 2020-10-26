import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function getComponent(myPath) {
  return () => import(`@/${myPath}`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: getComponent('components/HomeA/mainA.vue'),
    children: [
      {
        path: '/aMap',
        name: 'aMap',
        component: getComponent('views/aMap.vue'),
        meta: {title: 'aMap'}
      },
      {
        path: '/FlowChart',
        name: 'FlowChart',
        component: getComponent('views/FlowChart.vue'),
        meta: {title: 'FlowChart'}
      },
      {
        path: '/BinarySearch',
        name: 'BinarySearch',
        component: getComponent('views/BinarySearch.vue'),
        meta: {title: 'BinarySearch'}
      },
      {
        path: '/DeepCopy',
        name: 'DeepCopy',
        component: getComponent('views/DeepCopy'),
        meta: {title: 'DeepCopy.vue'}
      },
      {
        path: '/CounterFlips',
        name: 'CounterFlips',
        component: getComponent('views/CounterFlips'),
        meta: {title: 'CounterFlips'}
      }
    ]
  },
  {
    path: '/test2',
    name: 'test2',
    component: getComponent('components/FlowChart.vue'),
  },

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title || '默认'
  next()
})
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

export default router
