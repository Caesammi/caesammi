const admin = [
  {
    header: "测试",
    icon: "el-icon-s-order",
    path: "/",
    childrens: [
      {name: "高德地图", path: "/aMap"},
      {name: "流程图", path: "/FlowChart"},
    ]
  },
  {
    header: "算法练习",
    icon: "el-icon-s-opportunity",
    path: "/",
    childrens: [
      {name: "二分查找", path: "/BinarySearch"},
      {name: "深拷贝", path: "/DeepCopy"},
      {name: "抛硬币", path: "/CounterFlips"}
    ]
  }

]


export default {admin}
