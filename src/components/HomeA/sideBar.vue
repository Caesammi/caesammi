<template>
    <fragment>
      <template v-for="(menu, index) in menuList">
        <el-submenu v-if="menu.children && menu.children.length >= 1" :index="menu.path + index" :key="menu.path + index">
          <template slot="title">
            <i :class="menu.icon"></i>
            <span slot="title">{{menu.name}}</span>
          </template>
          <side-bar :menuList="menu.children"></side-bar>
        </el-submenu>
        <el-menu-item v-else :index="menu.path + ''" @click="handleClick(menu.path)" :key="menu.path">
          <i :class="menu.icon"></i>
          <span slot="title">{{menu.name}}</span>
        </el-menu-item>
      </template>
    </fragment>
</template>

<script>
export default {
  name: 'sideBar',
  components: {},
  props: {
    menuList: []
  },
  computed: {},
  data() {
    return {}
  },
  methods: {
    handleClick(path) {
      console.log(path)
      // this.$router.push(path)
      // this.defaultOpen = path
    }
  },
  created() {
  },
  mounted() {
  }
}
</script>

<style lang="less">
.sideBar-wrap {
}
</style>
