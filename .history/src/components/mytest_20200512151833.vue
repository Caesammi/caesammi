/* eslint-disable no-unreachable */
/* eslint-disable no-unreachable */
<template>
    <div>
        {{test}}<br>{{myArr}}
        <el-button v-loading="myLoading1">
            你好
        </el-button>
    </div>
</template>

<script>
    import {mapState, mapActions,mapGetters} from 'vuex'
  export default {
    name: "mytest",
    computed:{

    },
    data(){
      return{
        test:{},
        myArr:[],
        a3:[],
          myLoading1:true
      }
    },
    methods:{
         myPro(){
            return  new Promise((resolve,reject) => {
                 let myNumber=100
                 for(let i = 0;i<myNumber;i++){
                     if(i===99){
                         console.log(i)
                        setTimeout(()=>{
                            resolve(i)
                        },2000)
                     }
                 }
             })
        },
         myWait(){
             this.myPro().then(res=>{
                 console.log(res)
             })

        },
      pu(){
      let flower = function () {

      }
      let C = {
          sendFlower:function (t) {
              let flower = new flower()
          }
      }
      let A ={
          receiveFlower:function (flower) {
          }
      }
      }
    },
    mounted() {
    
        let objFun={
            fullName:function () {
                return this.firstName+' '+this.lastName
            }
        }
        let person1={
            firstName:'Bill',
            lastName:'Gates'
        }
        let person2={
            firstName:'Zhang',
            lastName:'Chi'
        }
        console.log(objFun.fullName.call(person1))
        let test =''
        console.log(typeof(test))
        let father={
            name1:'value1',
            name2:'value2',
            name3:'value3',
            name4:{
                name41:'value41',
                name42:'value42'
            }
        }
        // let son={...father}
        let son = JSON.parse(JSON.stringify(father))
        father.name1='valuechange1'
        father.name4.name41='valuechange2'
        console.log(father)
        console.log(son)
        // sss
        return

        // eslint-disable-next-line no-unreachable
        this.myWait()
        return
        // 主题 保存状态，状态变化之后触发所有观察者对象
        class Subject {
            constructor() {
                this.state = 0    //被观察对象自己的属性
                this.observers = []   //储存观察者对象的数组
            }
            getState() {
                return this.state
            }
            setState(state) {
                this.state = state  //改变被观察者自己的属性
                this.notifyAllObservers() //通知所有观察者
            }
            notifyAllObservers() {
                this.observers.forEach(observer => {
                    observer.update()    //将改变告知观察者
                })
            }
            attach(observer) {
                this.observers.push(observer) //保存观察者属性
            }
        }
// 观察者
        class Observer {
            constructor(name, subject) {
                this.name = name    //创建观察者姓名
                this.subject = subject //创建被观察的对象
                console.log(this)
                this.subject.attach(this)//将观察者对象的属性注入被观察的对象中
            }
            update() {
                console.log(`${this.name} update, state: ${this.subject.getState()}`)
            }
        }
// 测试
        let s = new Subject()//...........首先创建被观察的对象
//........................................然后创建观察者
        let o1 = new Observer('od1', s) //观察者1
        let o2 = new Observer('od2', s) //观察者2

        s.setState(12)
        setTimeout(()=>{
           s.setState(11)
        },6000)
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


    }
  }
</script>

<style scoped>

</style>
