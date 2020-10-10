/* eslint-disable no-unreachable */
/* eslint-disable no-unreachable */
/* eslint-disable no-unreachable */
<template>

  <div>
    <el-button @click="openDialog">dragDialogTest</el-button>
    <el-dialog v-dialogDrag title="test" :visible.sync="dialogVisible" width="90%" style="border-radius: 10px">
      test
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <el-table
        size="mini"
        class="table1"
        :data="myArr"
        border
        style="width: 100%; margin-top: 20px">
      <el-table-column label="发送方" align="center">
        <template slot-scope="scope">
          <p style="color:yellow">{{ scope.row.a }}</p>
        </template>
      </el-table-column>


    </el-table>
    <canvas id="draw" style="border: 1px solid black;color:black;background: transparent">berrrrrrrrr</canvas>
    {{ test }}<br>{{ myArr }}
    <!--        <sticky :sticky-top="200">-->
    <!--            <el-button type="ghost"> placeholder</el-button>-->
    <!--            <div style="color: green">sdfsdfsdf-->
    <!--                <el-button type="primary"> placeholder</el-button>-->
    <!--            </div>-->
    <!--        </sticky>-->
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <div>placeholder</div>
    <el-button v-loading="myLoading1">
      你好
    </el-button>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'
import store from "@/store";
// import Sticky from '@/components/Widget/index.vue'
export default {
  name: "mytest",
  store:store,
  // components: { Sticky },
  computed: {},
  data() {
    return {
      dialogVisible:false,
      test: {},
      myArr: [{a: 'create'}, {a: 'create'}, {a: 'create'}, {a: 'create'}, {a: 'create'}],
      myArr2: [{a: 'create'}, {a: 'create'}, {a: 'create'}, {a: 'create'}, {a: 'create'}],
      a3: [],
      myLoading1: true
    }
  },
  methods: {
    openDialog(){
      this.dialogVisible=true
    },
    myPro() {
      return new Promise((resolve, reject) => {
        let myNumber = 100
        for (let i = 0; i < myNumber; i++) {
          if (i === 99) {
            console.log(i)
            setTimeout(() => {
              resolve(i)
            }, 2000)
          }
        }
      })
    },
    myWait() {
      this.myPro().then(res => {
        console.log(res)
      })

    },
    pu() {
      let flower = function () {

      }
      let C = {
        sendFlower: function (t) {
          let flower = new flower()
        }
      }
      let A = {
        receiveFlower: function (flower) {
        }
      }
    },
    canvasDraw() {
      let draw = document.getElementById('draw')
      draw.height = 200
      draw.width = 200
      let context = draw.getContext('2d')

      context.fillstyle = "rgba(0,0,255,0.5)"
      context.fillRect(10, 10, 50, 50)
      context.fillstyle = "rgba(0,0,255,0.5)"
      context.fillRect(30, 30, 50, 50)
      console.log(context)
    },
  },
  mounted() {
    let newArray = [{
      name: "aaa",
      value: 0
    },
      {
        name: "ddd",
        value: 3
      },
      {
        name: "bbb",
        value: 1
      },
      {
        name: "eee",
        value: 4
      },
      {
        name: "ccc",
        value: 2
      }];
    // function compare(value) {
    //   return function (a, b) {
    //     var value1 = a[value];
    //     var value2 = b[value];
    //     return value1 - value2;
    //   }
    // }
    // console.log(newArray.sort(compare("value")))
    let myCompare = function (value){
      newArray.sort((a,b)=>{
        let value1 = a[value]
        let value2 = b[value]
        return value1-value2
      })
    }
    console.log(
      newArray.sort(myCompare('value'))
    )

    // const mapTool1 = aItem => aItem*2
    // const arrTest = [1,2,3,4,5]
    // const final = arrTest.map(mapTool1)
    // console.log('--------------------------------')
    // console.log(final)
    // console.log('--------------------------------')

    //
    // console.log(store.state.userName)
    // this.$message.info('即将启动状态管理器测试')
    // setTimeout(()=>{
    //   store.dispatch('changeUserName','sss')
    //   // store.commit('changeUserName','sss')
    //   console.log(store.state.userName)
    // },1000)
//     class LoginForm {
//       constructor() {
//         this.state = 'hide'
//         //登录框状态（hide为初始状态）
//       }
//
//       show() {
//         if (this.state === 'show') {
//           alert('已经显示')
//           return
//         }
//         this.state = 'show'
//         console.log('登录框显示成功')
//       }
//
//       hide() {
//         if (this.state === 'hide') {
//           alert('已经隐藏')
//           return
//         }
//         this.state = 'hide'
//         console.log('登录框隐藏成功')
//       }
//     }
//
//     LoginForm.getInstance = (function () {
// //通过放在闭包的instance方法属性判断是否已经创建实例
//       let instance
//       return function () {
//         if (!instance) {
//           instance = new LoginForm()
//         }
//         return instance
//       }
//     })()
//     let obj1 = LoginForm.getInstance()
//     obj1.show()
//     obj1.show()//会提示已经显示
//     obj1.hide()
//     obj1.hide()//会提示已经隐藏
//     -------------------------------------------------------------
    // let obj2 = LoginForm.getInstance()
    // obj2.hide()
    // console.log(obj1 === obj2)

    // store.state.userName='sdf'
    // console.log(store.state.userName)
    //   setTimeout(() => {
    //       this.myArr[0].a = 'changed'
    //   }, 5000)
    // let book =[{a:'s',b:'dddd',c:'00'},{a:'ddd',b:'333',d:'444'}]
    // console.log(JSON.stringify(book,['a','c']))
    // console.log(book)
    // return
//         return
//         let sortData=[15,0,5,7,20,700,100]
//         let myCompare = function(value1,value2){
//             if(value1<value2){
//                 return -1
//             }else if(value1>value2){
//                 return 1
//             }else {
//                 return 0
//             }
//         }
//          let finalSort = sortData.sort(myCompare)
//         console.log(finalSort)
//
//         let myA = 'sdfsdf%/sdfsdf%sdfop'
//         let myB = myA.replace(/%/g,'百分号')
//         console.log(myB)
//        let originObj=[{
//             name:'test1',
//             code:'111'
//         },{
//             name:'test2',
//             code:'222'
//         },{
//             name:'test3',
//             code:'333'
//         },]
//         let newObj = originObj.filter((item) => {
//             return item.code === '111'
//
//         })
//         console.log(newObj) //[{name: "test1", code: "111"}]
//         console.log(originObj)
//         return
//         var obj = [
//             {name:'小明',age:16,sex:'男'},
//             {name:'小红',age:17,sex:'女'},
//             {name:'小白',age:18,sex:'女'},
//         ]
//         let mytest= obj.map(item=>{
//             console.log(item.age)
//                 return item.age
//         })
//         console.log(mytest) //[16,17,18]
//         return
//
//         this.canvasDraw()
//         let person={
//             fN:'John',
//             sN:'Doe',
//             myFunc:function () {
//                 return this
//             }
//         }
//         console.log('-------------------------------------------')
//         console.log(person)
//         console.log('-------------------------------------------')
//
//         let objFun={
//             fullName:function () {
//                 return this.firstName+' '+this.lastName
//             }
//         }
//         let person1={
//             firstName:'Bill',
//             lastName:'Gates'
//         }
//         let person2={
//             firstName:'Zhang',
//             lastName:'Chi'
//         }
//         console.log(objFun.fullName.call(person1))
//         let test =''
//         console.log(typeof(test))
//         let father={
//             name1:'value1',
//             name2:'value2',
//             name3:'value3',
//             name4:{
//                 name41:'value41',
//                 name42:'value42'
//             }
//         }
//         // let son={...father}
//         let son = JSON.parse(JSON.stringify(father))
//         father.name1='valuechange1'
//         father.name4.name41='valuechange2'
//         console.log(father)
//         console.log(son)
//         // sss
//         return
//
//         // eslint-disable-next-line no-unreachable
//         this.myWait()
//         return
//         // 主题 保存状态，状态变化之后触发所有观察者对象
//         class Subject {
//             constructor() {
//                 this.state = 0    //被观察对象自己的属性
//                 this.observers = []   //储存观察者对象的数组
//             }
//             getState() {
//                 return this.state
//             }
//             setState(state) {
//                 this.state = state  //改变被观察者自己的属性
//                 this.notifyAllObservers() //通知所有观察者
//             }
//             notifyAllObservers() {
//                 this.observers.forEach(observer => {
//                     observer.update()    //将改变告知观察者
//                 })
//             }
//             attach(observer) {
//                 this.observers.push(observer) //保存观察者属性
//             }
//         }
// // 观察者
//         // eslint-disable-next-line no-unreachable
//         class Observer {
//             constructor(name, subject) {
//                 this.name = name    //创建观察者姓名
//                 this.subject = subject //创建被观察的对象
//                 console.log(this)
//                 this.subject.attach(this)//将观察者对象的属性注入被观察的对象中
//             }
//             update() {
//                 console.log(`${this.name} update, state: ${this.subject.getState()}`)
//             }
//         }
// // 测试
//         // eslint-disable-next-line no-unreachable
//         let s = new Subject()//...........首先创建被观察的对象
// //........................................然后创建观察者
//         let o1 = new Observer('od1', s) //观察者1
//         let o2 = new Observer('od2', s) //观察者2
//
//         s.setState(12)
//         setTimeout(()=>{
//            s.setState(11)
//         },6000)
    // //代理模式
    // let Flower = function() {}
    // let xiaoMing = {
    //        //将花给B
    //     sendFlower: function(target) {
    //         let flower = new Flower()
    //         target.receiveFlower(flower)
    //     }
    // }
    // let B = {
    //         //将花给A
    //     receiveFlower: function(flower) {
    //         //监听A的心情，给A的listenGoodMood方法传入方法，在合适的时间执行
    //         A.listenGoodMood(function() {
    //             A.receiveFlower(flower)
    //         })
    //     }
    // }
    // let A = {
    //     receiveFlower: function(flower) {
    //         console.log('收到花'+ JSON.stringify(flower))
    //     },
    //     listenGoodMood: function(fn) {
    //         setTimeout(function() {
    //             fn()
    //         }, 1000)
    //     }
    // }
    // //启动送花的方法
    // xiaoMing.sendFlower(B)


//
// //动态地给某个对象添加一些额外的职责，，是一种实现继承的替代方案
// // 在不改变原对象的基础上，通过对其进行包装扩展，使原有对象可以满足用户的更复杂需求，而不会影响从这个类中派生的其他对象
// class Cellphone {
//     create() {
//         console.log('生成一个手机')
//     }
// }
// class Decorator {
//   //将Cellphone传入constructor实现继承
//
//     constructor(cellphone) {
//         this.cellphone = cellphone
//     }
//     //启动原方法Cellphone，启动新方法createShell
//     create() {
//         this.cellphone.create()
//         this.createShell(cellphone)
//     }
//     createShell() {
//         console.log('生成手机壳')
//     }
// }
// // 测试代码
// let cellphone = new Cellphone()
//
// console.log('------------')
// let dec = new Decorator(cellphone)
// dec.create()   //生成一个手机 生成手机壳


    // //适配器模式，可以兼容老接口可以让任何两个没有关联的类一起运行。提高了类的复用。适配对象，适配库，适配数据
    // // 老的类
    // class Plug{
    //   getName(){
    //     return 'iphone充电头'
    //   }
    // }
    // //新的类想与老的类一起运行
    // class Target{
    //   constructor(){
    //     this.plug=new Plug()
    //   }
    //   getName(){
    //   return this.plug.getName()+'适配Type-c'
    //   }
    // }

    // let target = new Target()
    // console.log('------')
    // console.log(target.getName())


// class Plug {
//   getName() {
//     return 'iphone充电头';
//   }
// }

// class Target {
//   constructor() {
//     this.plug = new Plug();
//   }
//   getName() {
//     return this.plug.getName() + ' 适配器Type-c充电头';
//   }
// }

//   let target = new Target();
//   target.getName(); // iphone充电头 适配器转Type-c充电头


//       for(let i = 0; i<3000;i++){
//         this.test[i]='test'
//       }


//       let pu = ()=>{
//         this.myArr.push('test')
//       }
//       setInterval(pu,2000)
// setInterval(this.pu,2000)


  },
  watch: {
    myArr: {
      handler: function (newVal) {
        let that = this
        let oldVal = that.myArr2
        console.log('this is new value')
        console.log(newVal)
        console.log('this is old value')
        console.log(oldVal)
        for (let i = 0; i < newVal.length; i++) {
          let o2 = JSON.stringify(oldVal[i])
          let n2 = JSON.stringify(newVal[i])
          if (o2 === n2) {
            console.log('相同')
          } else {
            let o = JSON.stringify(oldVal[i]).split(',')
            let n = JSON.stringify(newVal[i]).split(',')
            console.log(o)
            console.log(n)
            for (let i2 = 0; i2 < o.length; i2++) {
              if (o[i2] !== n[i2]) {
                let newClassName = ''
                console.log('myName')
                console.log(JSON.parse(n[i2]))

                newVal[i][i2] = 'Green'
                console.log(newVal)
              }
            }


          }
        }

      },
      deep: true
    }

  }
}
</script>

<style scoped>
.sss {
  color: aliceblue;
}
</style>
