import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  base: 'caesammi',
  mode: 'history', // 'hash'
  routes: routes
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title || '默认'
  next() // next({ name: routerName })
})
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

export default router
