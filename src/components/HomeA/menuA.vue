<template>
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
      </el-submenu>

    </el-menu>
    <div class="bookmark" id="arrow" @click="cc">
      <i :class="[arrow?'el-icon-caret-left Aback':'el-icon-caret-left Afront']"></i>
    </div>
  </el-container>
</template>

<script>
  import {BreedingRhombusSpinner} from 'epic-spinners'
  export default {
    name: "menuA",
    props: {
      menuList: {
        type: Array,
        default: ()=>[],
      },
      headerShow: {
        type: String,
        default: ''
      },
    },
    components:{
      BreedingRhombusSpinner
    },
    data() {
      return {
        isCollapse: false,
        arrow: false,
        defaultOpen: '',
        menuRouter: true,
        logoo: true
      }
    },
    methods: {
      cc() {
        this.isCollapse = !this.isCollapse
        this.arrow = !this.arrow
        this.logoo = !this.logoo
      },
      handleClick(path) {
        this.$router.push(path);
      },
    },
    // 工具参数更改监视
    watch: {
      headerShow: function () {
        this.defaultOpen = this.headerShow
        this.handleClick(this.defaultOpen)
      },
    }
  }
</script>

<style lang="css" scoped>
  .bookmark {
    opacity: 0.7;
    width: 18px;
    height: 40px;
    margin-top: 250px;
    line-height: 40px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  #arrow:hover {
    background-color: rgba(228, 237, 255, 0.65);
    transform: scaleY(1.7);
    transition: all 0.3s;
  }

  #arrow {
    background-color: white;
    color: #303133;
    transform: scaleY(1.3);
    transition: all 0.3s;
  }


  .Afront {
    transition: all 0.3s;
  }

  .Aback {
    transform: rotate(180deg);
    transition: all 0.3s;
  }

  /*.LogoRow {*/
  /*  line-height: 4;*/
  /*  height: 100px;*/
  /*  opacity: 1;*/
  /*  border-left: #409EFF solid 1px;*/

  /*}*/


</style>
