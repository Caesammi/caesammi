const admin = [
  {
    name: "测试",
    icon: "el-icon-s-order",
    path: "/",
    children: [
      {name: "高德地图", path: "/aMap",
        children: [
          {name: "高德地图", path: "/aMap"},
          {name: "流程图", path: "/FlowChart"},
        ]},
      {name: "流程图", path: "/FlowChart"},
    ]
  },
  {
    name: "test",
    icon: "el-icon-s-order",
    path: "/aMap"
  },
  {
    name: "算法练习",
    icon: "el-icon-s-opportunity",
    path: "/",
    children: [
      {name: "二分查找", path: "/BinarySearch"},
      {name: "深拷贝", path: "/DeepCopy"},
      {name: "抛硬币", path: "/CounterFlips"},
      {name:'demo', path:"/demo"}
    ]
  }

]


export default {admin}
