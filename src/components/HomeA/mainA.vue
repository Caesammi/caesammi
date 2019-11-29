<template>
  <el-container class="master">
    <!--      回到顶部-->
    <!--顶部动态工具栏封装-->
    <el-header class="master" style="z-index: 991">
      <el-menu class="master"
               mode="horizontal">
        <el-menu-item class="master" index="0" style="
          padding-left: 10px;  border-left: #3a8ee6 2px solid;border-bottom: none" >
          <template slot="title">
            <el-row>
              <div style="width: 50px;height: 50px">
                <img alt style="width: 100%;height: 100%" src="../../assets/logo.png">
              </div>
            </el-row>
          </template>
        </el-menu-item>
        <el-menu-item index="1" style="color: rgb(83,161,255);font-weight: 400;font-size: 30px;border-bottom: none" class="noFocus noHover">
          上海台账
        </el-menu-item>
        <!--用户设置栏封装-->
        <el-submenu index="2" style="float: right">
          <template slot="title">用户中心</template>
          <el-menu-item index="1-1" @click="logOut">退出登录</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-header>
    <el-container class="myContainer" style="height: 100%;">
      <el-aside class="noScrollbar" style="width: auto;height: 100%;background-color: rgba(0,0,0,0);z-index: 990;">
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
                <span slot="title">{{item.header}}</span>
              </template>
              <el-menu-item-group style="text-align: left">
                <el-menu-item v-for="(children,i) in item.childrens" @click="handleClick(children.path)" :key="i"
                              :index="children.path">
                  {{children.name}}
                </el-menu-item>
              </el-menu-item-group>
              <el-submenu v-for="(center,icenter) in item.center" :key="icenter" :index="icenter + 'center'">
                <template slot="title">
                  <i :class="center.icon"></i>
                  <span slot="title">{{center.header}}</span>
                </template>
                <el-menu-item v-for="(kids, ikid) in center.kids" @click="handleClick(kids.path)" :key="ikid"
                              :index="kids.path + ''">
                  {{kids.name}}
                </el-menu-item>
              </el-submenu>
            </el-submenu> </el-menu>
          <div class="bookmark" id="arrow" @click="cc">
            <i :class="[arrow?'el-icon-caret-left Aback':'el-icon-caret-left Afront']"></i>
          </div>
        </el-container>

      </el-aside>
      <el-main class="myBacktop noScrollbar" style="padding: 0;margin: 0 0 0 -18px;">
        <headerA :menuList="menuList" style="height: 20px"></headerA>
        <template>
          <el-backtop target=".myBacktop"></el-backtop>
        </template>

        <!--内容面包屑组件-->
<!--        <headerA v-if="headerShow !=='/map'" :menuList="menuList" style="height: 20px"></headerA>-->
        <!--单页面内容容器-->
        <router-view></router-view>
<!--        <footerA style="height: auto;"></footerA>-->

      </el-main>
    </el-container>
    <!--顶部动态工具栏结束-->
  </el-container>
</template>

<script>
  import power from './power'
  import headerA from "./headerA"

  export default {
    name: "mainA",
    components: {
      headerA
    },
    data() {
      return {
        arrow: false,
        menuList:[],
        isCollapse : false,
        menuRouter: true,
        defaultOpen: '',


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
      this.menuList = power.admin
      this.defaultOpen = this.$route.path  //获取路径
      console.log(this.defaultOpen)
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
    border: #2a3446 solid 1px;
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


</style>
