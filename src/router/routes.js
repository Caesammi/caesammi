function getComponent(myPath) {
  return () => import(`@/${myPath}`)
}
const pageRoutes = [
  {
    path: '/aMap',
    name: '高德地图',
    component: getComponent('views/aMap.vue'),
    meta: {title: 'aMap'}
  },
  {
    path: '/FlowChart',
    name: '流程图',
    component: getComponent('views/FlowChart.vue'),
    meta: {title: 'FlowChart'}
  },
  {
    path: '/BinarySearch',
    name: '二分查找',
    component: getComponent('views/BinarySearch.vue'),
    meta: {title: 'BinarySearch'}
  },
  {
    path: '/DeepCopy',
    name: '深拷贝',
    component: getComponent('views/DeepCopy'),
    meta: {title: 'DeepCopy.vue'}
  },
  {
    path: '/CounterFlips',
    name: '抛硬币',
    component: getComponent('views/CounterFlips'),
    meta: {title: 'CounterFlips'}
  },
  {
    path: '/demo',
    name: 'demo',
    component: getComponent('views/demo'),
    meta: {title: 'demo'}
  }
]
const menuRoutes = {
  path: '/',
  name: 'Home',
  component: getComponent('components/HomeA/mainA.vue'),
  redirect: '/demo',
  children: [
    ...pageRoutes
  ]
}
export const routes = [
  menuRoutes
]
