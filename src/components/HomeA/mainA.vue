<template>
  <el-container class="el-master">
    <el-button
      id="backTopBtn"
      style="display:none;position: fixed;bottom:40px;right:40px;z-index: 9999"
      type="ghost"
      icon="el-icon-caret-top"
      size="medium"
      circle
      @click="backTop()"
    />
    <!--      回到顶部-->
    <!--顶部动态工具栏封装-->
    <el-header
      style="line-height: 60px"
      class="myFlex myBorderBottom"
    >
      <div style="font-weight:bolder;font-size: 20px;">
        CAESAMMI
      </div>
      <div>
        <img
          alt
          style="width: 135px;height: 100%"
        >
      </div>
    </el-header>
    <el-container style="overflow: auto;background: #EBEEF5;height:100%">
      <el-aside
        class="noScrollbar"
        style="width: auto;background-color: rgba(0,0,0,0);"
      >
        <!--        <menuA :headerShow="headerShow" :menuList="menuList" style="opacity: 0.9;"></menuA>-->
        <el-container style="height: 100%">
          <el-menu
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            mode="vertical"
            :unique-opened="true"
            :router="menuRouter"
            :default-active="defaultOpen"
          >
            <side-bar :menu-list="menuList" />
          </el-menu>
          <div
            id="el-Arrow"
            class="bookmark"
            @click="handleArrow"
          >
            <i :class="[elArrow?'el-icon-caret-left Aback':'el-icon-caret-left Afront']" />
          </div>
        </el-container>
      </el-aside>
      <el-container style="height: 100%">
        <el-main style="padding:0;height: 97%;">
          <headerA
            :menu-list="menuList"
            style="height: 20px;position:fixed;z-index: 2"
          />
          <transition
            name="fade-transform"
            mode="out-in"
          >
            <keep-alive exclude="demo,CounterFlips">
              <router-view style="padding-top:20px;" />
            </keep-alive>
          </transition>
        </el-main>
      </el-container>
    </el-container>
    <!--顶部动态工具栏结束-->
  </el-container>
</template>

<script>
import sideBar from './sideBar'
import power from './power'
import headerA from "./headerA"
import footerA from './footerA'

export default {
  name: "MainA",
  components: {
    sideBar,
    headerA
    // footerA
  },
  data() {
    return {
      elArrow: false,
      menuList: [],
      isCollapse: false,
      menuRouter: true,
      defaultOpen: '',


    }
  },
  watch: {
  },
  created() {
    // 窗口变窄自动隐藏菜单导航栏
    window.onresize = () => {
      const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
      this.isCollapse = htmlWidth < 800;
    }
    this.menuList = power.admin
    this.defaultOpen = this.$route.path // 获取路径
  },
  mounted() {
    let dot = document.getElementsByClassName('el-main')[0]
    dot.addEventListener('scroll', this.handleScroll)

  },
  methods: {
    handleScroll() {
      let dot = document.getElementsByClassName('el-main')[0]
      let backDom = document.getElementById('backTopBtn')
      if (dot.scrollTop < 1000) {
        backDom.style.display = 'none'
      } else {
        backDom.style.display = 'block'
      }
    },
    backTop() {
     let dot = document.getElementsByClassName('el-main')[0]
      dot.scroll({
        top: 0,
        left:0,
        behavior: 'smooth'
      })
    },
    toBottom() {

    },
    logOut() {
      console.log('登出')
    },
    handleArrow() {
      this.isCollapse = !this.isCollapse
      this.elArrow = !this.elArrow
    }
  }
}
</script>

<style lang="less" scoped>
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

.el-master {
  padding: 0;
  margin: 0;
  height: 100%;
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

#el-Arrow:hover {
    background-color: rgba(228, 237, 255, 0.65);
    transform: scaleY(1.7);
    transition: all 0.3s;
    cursor: pointer;

}

#el-Arrow {
    font-size: 17px;
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
}




</style>

