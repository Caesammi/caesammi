import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../components/HomeA/mainA.vue'),
    children: [
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {title: 'about'}
      },
      {
        path: '/mytest',
        name: 'mytest',
        component: () => import(/* webpackChunkName: "about" */ '../components/mytest.vue'),
        meta: {title: 'about'}
      },
    ]
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
