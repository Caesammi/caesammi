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
        path: '/mytest',
        name: 'mytest',
        component: getComponent('components/mytest.vue'),
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
