<template>
  <div class="master" :style="$store.state.theme==='Light'?'background:#EFEFEF':'background:#011647'">

    <!--      回到顶部-->
    <!--顶部动态工具栏封装  bigHeader-->
    <el-header v-if="$store.state.theme==='Light'" class="myFlex myBorderBottom bigHeaderLight">
      <div class="mainLogo"></div>
      <div class="pageTitle">中国石化胜利中心三号平台工程</div>
    </el-header>
    <el-header v-if="$store.state.theme==='Dark'" class=" myFlex myBorderBottom bigHeaderDark">
      <div class="mainLogo"></div>
      <div class="pageTitleDark">中国石化胜利中心三号平台工程</div>
    </el-header>

    <el-container class="myContainer" style="height: calc(100% - 60px);">
      <el-main class="myBacktop noScrollbar" style="padding: 0;margin: 0 0 0 0;">
<!--        <template>-->
<!--          <el-backtop target=".myBacktop"></el-backtop>-->
<!--        </template>-->

        <!--内容面包屑组件-->
<!--        <headerA v-if="headerShow !=='/map'" :menuList="menuList" style="height: 20px"></headerA>-->
        <!--单页面内容容器-->
        <el-main style="padding: 0;margin: 0;height: 97%;">
         <transition name="fade-transform" mode="out-in">
           <router-view></router-view>
         </transition>
<!--          <div class="main-footer">-->
<!--            <div class="footerLogo"></div>-->
<!--            <span style="padding-left: 10px">版权所有：石化盈科信息技术有限责任公司Petro-CyberWorks Information Technology Co.,Ltd.</span>-->
<!--          </div>-->
        </el-main>



      </el-main>

    </el-container>
    <!--顶部动态工具栏结束-->
  </div>

</template>

<script>
  import power from './power'
  import headerA from "./headerA"
  import footerA from './footerA'
  import store from "@/store";

  export default {
    name: "mainA",
    components: {

    },
    data() {
      return {
        arrow: false,
        menuList:[],
        isCollapse : false,
        menuRouter: true,
        defaultOpen: '',
        theme:store.state.theme


      }
    },
    methods: {
      logOut(){
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
    },
    mounted(){
      // this.$router.push('shengLiHome')
      this.menuList = power.admin
      this.defaultOpen = this.$route.path  //获取路径
      console.log('---路由路径---')
      console.log(this.defaultOpen)
      console.log('---路由路径---')

      this.$router.afterEach(() => {
        this.defaultOpen = this.$route.path
        console.log('当前路径' + this.defaultOpen)
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
  .master{
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
  .myBorderRight{
    border-right: 1px solid;
    border-image: -webkit-linear-gradient(#ffffff, rgb(151, 151, 151), #ffffff) 1 10 1; /* 控制边框颜色渐变 */
    border-image: -moz-linear-gradient(#ffffff, rgb(151, 151, 151), #ffffff) 1 10 1;
    border-image: linear-gradient(#ffffff, rgb(151, 151, 151), #ffffff) 1 10 1; /* 标准的必须写在最后 */
  }
  /*.myBorderBottom{*/
  /*  border-bottom: 1px solid;*/
  /*  border-image: -webkit-linear-gradient(to right, white, #bdbdbd, white) 1 8 1; !* 控制边框颜色渐变 *!*/
  /*  border-image: -moz-linear-gradient(   to right, white, #bdbdbd, white) 1 10 1;*/
  /*  border-image: linear-gradient(        to right, white, #bdbdbd, white) 1 10 1; !* 标准的必须写在最后 *!*/
  /*}*/
  .noFocus:focus{
    background: none;
  }
  .noHover:hover{
    background: none!important;
  }
.myFlex {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.bigHeaderLight{
  /*background: linear-gradient(to bottom, #002b58, #68b3ff);*/
  background: url('../../assets/TOP.png') no-repeat;
  background-size:cover;
  color: white;
  font-size: 20px;
  border-bottom: none;
  font-weight: lighter;
  -moz-box-shadow:0 3px 15px -3px #696969;
  -webkit-box-shadow:0 3px 15px -3px #696969;
  box-shadow:0 3px 15px -3px #696969;
}
.bigHeaderDark{
  background: rgba(226, 236, 252, 0.1);
  background-size:cover;
  color: white;
  font-size: 20px;
  /*border-bottom: none;*/
  font-weight: lighter;
  /*-moz-box-shadow:0 3px 15px -3px #696969;*/
  /*-webkit-box-shadow:0 3px 15px -3px #696969;*/
  /*box-shadow:0 3px 15px -3px #696969;*/
}
.pageTitle{
  font-weight:600;margin-left: 20px;text-shadow: 0 2px 2px #7e7e7e;
}
  .pageTitleDark{
    font-weight:600;margin-left: 20px;
  }
.mainLogo{
  height: 70%;
  width: 130px;
  background: url('../../assets/logo1.png') no-repeat;
  background-size: 100% 100%
}
.main-footer{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  position: relative;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 30px;
  line-height: 30px;
  color: #666666;
  font-size: 12px;
  background: #fff;

}
.footerLogo{
  margin-left: 10px;
  height: 20px;
  width: 45px;
  background: url('../../assets/logo2.png') no-repeat;
  background-size: 100% 100%
}
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
</style>

