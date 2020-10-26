<template>
  <div id="app"
       v-loading.fullscreen.lock="loading2"
       element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(0, 0, 0, 0.8)">
    <div class="amap-wrapper">
      <el-amap :zoom="zoom" class="amap-box" :vid="'amap-vue'">
        <!--        <el-amap-marker v-for="marker in markers" :events="marker.events"  :position="marker.position" :template="marker.template">-->
        <!--        </el-amap-marker>-->
      </el-amap>
    </div>
  </div>
</template>

<script>
export default {
  name: "mapA",
  data(){
    return{
      zoom:1,
      msg:'我的第一个mapapp',
      loading2:true,
      markers: [],
    }
  },
  methods:{
  },
  mounted(){
    this.$store.dispatch('set_sessionTest','test')
    console.log(this.$store.state.sessionTest)
    setTimeout(()=>{
      this.loading2 = false
    },200)
  }

}
</script>

<style scoped>
.amap-wrapper {
  width: 100%;
  height: 100%;
}
</style>
