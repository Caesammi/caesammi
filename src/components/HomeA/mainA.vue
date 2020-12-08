<template>
  <el-container class="master">

    <!--      回到顶部-->
    <!--顶部动态工具栏封装-->
    <el-header style="line-height: 60px" class="myFlex myBorderBottom">
      <div style="font-weight:bolder;font-size: 20px;">CAESAMMI</div>
      <div><img alt style="width: 135px;height: 100%"></div>
    </el-header>
   <el-container style="overflow: auto;background: #EBEEF5;height:100%">
     <el-aside class="noScrollbar" style="width: auto;background-color: rgba(0,0,0,0);">
       <!--        <menuA :headerShow="headerShow" :menuList="menuList" style="opacity: 0.9;"></menuA>-->
       <el-container style="height: 100%">
         <el-menu class="el-menu-vertical-demo"
                  :collapse="isCollapse"
                  mode="vertical"
                  :unique-opened="true"
                  :router="menuRouter"
                  :default-active="defaultOpen">
           <el-submenu v-for="(item,index) in menuList" :key="index" :index="index + ''">
             <template slot="title">
               <i :class="item.icon"></i>
               <span slot="title">{{ item.header }}</span>
             </template>
             <el-menu-item-group style="text-align: left">
               <el-menu-item v-for="(children,i) in item.childrens" @click="handleClick(children.path)" :key="i"
                             :index="children.path">
                 {{ children.name }}
               </el-menu-item>
             </el-menu-item-group>
             <el-submenu v-for="(center,icenter) in item.center" :key="icenter" :index="icenter + 'center'">
               <template slot="title">
                 <i :class="center.icon"></i>
                 <span slot="title">{{ center.header }}</span>
               </template>
               <el-menu-item v-for="(kids, ikid) in center.kids" @click="handleClick(kids.path)" :key="ikid"
                             :index="kids.path + ''">
                 {{ kids.name }}
               </el-menu-item>
             </el-submenu>
           </el-submenu>
         </el-menu>
         <div class="bookmark" id="arrow" @click="cc">
           <i :class="[arrow?'el-icon-caret-left Aback':'el-icon-caret-left Afront']"></i>
         </div>
       </el-container>
     </el-aside>
     <el-container style="height: 100%">
       <el-main style="padding:0;height: 97%;">
         <headerA :menuList="menuList" style="height: 20px;position:fixed;z-index: 2"></headerA>
         <transition name="fade-transform" mode="out-in">
          <keep-alive>
            <router-view style="min-width: 1200px;padding-top:20px;"></router-view>
          </keep-alive>
         </transition>
       </el-main>
     </el-container>
   </el-container>
    <!--顶部动态工具栏结束-->
  </el-container>

</template>

<script>
import power from './power'
import headerA from "./headerA"
import footerA from './footerA'

export default {
  name: "mainA",
  components: {
    headerA,
    footerA
  },
  data() {
    return {
      arrow: false,
      menuList: [],
      isCollapse: false,
      menuRouter: true,
      defaultOpen: '',


    }
  },
  methods: {
    logOut() {
      console.log('登出')
    },
    cc() {
      this.isCollapse = !this.isCollapse
      this.arrow = !this.arrow
      this.logoo = !this.logoo
    },
    handleClick(path) {
      console.log(path)
      this.$router.push(path)
      this.defaultOpen = path
    },
    groupBy(obj, keyWord){
      return obj.reduce(function (acc, cur){
        let key = cur[keyWord]
        if(!acc[key]){
          acc[key] = []
        }
        acc[key].push(cur)
        return acc
      },{})
    },
    duplicateArr(arr){
      return arr.reduce((prev, cur)=>{
        if(prev.indexOf(cur)===-1){
          prev.push(cur)
        }
        return prev
      },[])
    }
  },
  created() {
    let objArr = [
      {
        x:1
      },
      {
        x:1
      },
      {
        x:1
      },
    ]
    let test = this.zcTools.zcJsonSum(objArr,'x')
    let obj11 = {
      a:'a',
      b:'b',
      c:'c'
    }
    this.zcTools.zcClearObj(obj11)
    console.log(obj11)

//     let obj11 = {
//       a:'a',
//       b:'b',
//       c:'c'
//     }
//     let {a:my1,c:my2} = obj11
//
//     let obj2 = {
//       dd:my1,
//       ee:my2
//     }
//     debugger
//     return
//     let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
//     console.log(baz); // "aaa"
//
//     let obj = { first: 'hello', last: 'world',ff:'ff' };
//
//     let { first: f, last: l } = obj
//
//     let obj1={
//       f,l
//     }
//     console.log(f); // 'hello'
//     console.log(l); // 'world'
//
//     let testArr = [{"x":5},{"x":3},{"x":4},{"x":2}]
//     // let result = this.zcTools.zcJsonCompare(testArr,'x')
//     // console.log(result);
//     let arr2 = [2,1,4,2,5,3,4,4,3,5,6]
//     let newArr2 = this.zcTools.arrCount(arr2)
//     console.log('--------main--------')
//     let groupByResult = this.zcTools.groupBy(testArr,'x')
//     console.log(groupByResult);
//     let friends = [{
//       name: 'Anna',
//       books: ['Bible', 'Harry Potter'],
//       age: 21
//     }, {
//       name: 'Bob',
//       books: ['War and peace', 'Romeo and Juliet'],
//       age: 26
//     }, {
//       name: 'Alice',
//       books: ['The Lord of the Rings', 'The Shining'],
//       age: 21
//     }];
//     console.log(this.zcTools.groupBy(friends, 'age'));
//     debugger
//     // for(let i = 0; i<4;i++){
//     //   testArr.push({
//     //     x:i+1
//     //   })
//     // }
//     // console.log(JSON.stringify(testArr));
//     let testResult = testArr.reduce((prev, v)=>{
//           let pr = prev
//           let vx = v.x
//       return pr + vx
//     },{})
//     console.log(testResult)
//     console.log('-------testResult-------')
//
//     let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
//
//     let countedNames = names.reduce((allNames, name) => {
//       if (name in allNames) { // 判断object中是否含有该属性
//         console.log(allNames);
//         console.log(name);
//         allNames[name]++;
//       }
//       else {
//         allNames[name] = 1;
//       }
//       return allNames;
//     }, {});
//     console.log('----countedNames---')
//     console.log(countedNames);
//     console.log('----countedNames---')
// // countedNames is:
// // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

    this.menuList = power.admin
    this.defaultOpen = this.$route.path  //获取路径
    console.log(this.menuList)
    if(this.defaultOpen === '/'){
      this.$router.push('/BinarySearch')
    }

    this.$router.afterEach(() => {
      this.defaultOpen = this.$route.path
    })
  },
  watch: {
    defaultOpen: function () {
      this.handleClick(this.defaultOpen)
    },
  }
}
</script>

<style scoped>
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.master {
  padding: 0;
  margin: 0;
  height: 100%;
}

.noScrollbar::-webkit-scrollbar {
  display: none;
}

.myContainer {
  height: 90%;
}

.myBacktop {
  height: 100%;
  overflow-x: hidden;
}

.bookmark {
  opacity: 0.7;
  width: 18px;
  height: 40px;
  margin-top: 250px;
  margin-right: 4px;
  line-height: 40px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  z-index: 1;

}

#arrow:hover {
  background-color: rgba(228, 237, 255, 0.65);
  transform: scaleY(1.7);
  transition: all 0.3s;
  cursor: pointer;

}

#arrow {
  background-color: white;
  color: #303133;
  transform: scaleY(1.3);
  transition: all 0.3s;
  -moz-box-shadow: 1px 0 8px rgba(51, 51, 51, 0.2);
  -webkit-box-shadow: 1px 0 8px rgba(51, 51, 51, 0.2);
  box-shadow: 1px 0 8px rgba(51, 51, 51, 0.2);
}


.Afront {
  transition: all 0.3s;
}

.Aback {
  transform: rotate(180deg);
  transition: all 0.3s;

}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  z-index: 999;
  width: 250px;
  min-height: 400px;
  border-bottom: none;
  border-right: none;
  -moz-box-shadow: 1px 0 8px rgba(51, 51, 51, 0.2);
  -webkit-box-shadow: 1px 0 8px rgba(51, 51, 51, 0.2);
  box-shadow: 1px 0 8px rgba(51, 51, 51, 0.2);

}

.el-menu--collapse {
  border: rgba(0, 0, 0, 0) solid 2px;
  -moz-box-shadow: 1px 0 8px rgba(51, 51, 51, 0.2);
  -webkit-box-shadow: 1px 0 8px rgba(51, 51, 51, 0.2);
  box-shadow: 1px 0 8px rgba(51, 51, 51, 0.2);
}

.myBorderRight {
  border-right: 1px solid;
  border-image: -webkit-linear-gradient(#ffffff, rgb(151, 151, 151), #ffffff) 1 10 1; /* 控制边框颜色渐变 */
  border-image: -moz-linear-gradient(#ffffff, rgb(151, 151, 151), #ffffff) 1 10 1;
  border-image: linear-gradient(#ffffff, rgb(151, 151, 151), #ffffff) 1 10 1; /* 标准的必须写在最后 */
}

.myBorderBottom {
  border-bottom: 1px solid;
  border-image: -webkit-linear-gradient(to right, white, #bdbdbd, white) 1 8 1; /* 控制边框颜色渐变 */
  border-image: -moz-linear-gradient(to right, white, #bdbdbd, white) 1 10 1;
  border-image: linear-gradient(to right, white, #bdbdbd, white) 1 10 1; /* 标准的必须写在最后 */
}

.noFocus:focus {
  background: none;
}

.noHover:hover {
  background: none !important;
}

.myFlex {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

}


</style>

