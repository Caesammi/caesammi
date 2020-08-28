import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "@/store";

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
        path: '/shengLiHome',
        name: 'shengLiHome',
        component: getComponent('components/ShengLiHome.vue'),
        meta: {title: '中国石化胜利中心三号工程平台'}
      },
      {
        path: '/shengLiHomeDark',
        name: 'shengLiHomeDark',
        component: getComponent('components/ShengLiHomeDark.vue'),
        meta: {title: '中国石化胜利中心三号工程平台'}
      },
      {
        path: '/about',
        name: 'about',
        component: getComponent('views/About.vue'),
        meta: {title: 'about'}
      },

      {
        path: '/myHome',
        name: 'home',
        component: getComponent('views/Home.vue'),
        meta: {title: 'home'}
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
