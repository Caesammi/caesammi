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
        path: '/about',
        name: 'about',
        component: getComponent('views/About.vue'),
        meta: {title: 'about'}
      },
      {
        path: '/myTest',
        name: 'myTest',
        component: getComponent('components/mytest.vue'),
        meta: {title: 'myTest'}
      },
      {
        path: '/BinarySearch',
        name: 'BinarySearch',
        component: getComponent('views/BinarySearch.vue'),
        meta: {title: 'BinarySearch'}
      },
    ]
  },
  {
    path: '/test2',
    name: 'test2',
    component: getComponent('components/mytest.vue'),
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
  return routerPush.call(this, location).catch(error=> error)
}

export default router
