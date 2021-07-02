<template>
  <el-col
    style="height: 100%"
    class="ZCCard-wrap"
  >
    <slot name="title" />
    <el-col
      ref="content"
      style="height:calc(100%);font-size: 14px;padding: 5px;position: relative"
      class="midContainer"
    >
      <slot name="content" />
    </el-col>
  </el-col>
</template>
<script>
  export default {
    name: 'ZcCard',
    components: {},
    props: {
    },
    data() {
      return {}
    },
    watch: {},
    mounted() {
    },
    methods: {}
  }
</script>
<style lang="less">
  .ZCCard-wrap {
    .midContainer {
      overflow: hidden;
      background: white;
      border-radius: 3px;
      box-shadow: 0 0 10px 0 #e8e8e8
    }
  }
</style>
