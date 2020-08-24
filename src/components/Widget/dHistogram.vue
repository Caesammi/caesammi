<template>

    <div :style="{width: width, height: height}" :id="id"></div>

</template>

<script>
import store from "@/store"
import echarts from 'echarts'
import resize from './relyOn/myResize/resize'

export default {
  mixins: [resize],
  name: "dHistogram",
  store:store,
  props: {
    id: {
      type: String
    },
    //option 是图表的配置数据
    option: {
      type: Object
    },
    height:{
      type: String
    },
    width:{
      type: String
    }
  },
  // components: { Sticky },
  computed: {},
  data() {
    return {
      chartOptions: {
      },
      chart: null
    }
  },
  methods: {
    draw(){
      // let id = this.id
      let getID = document.getElementById(this.id)
      this.chart = echarts.init(getID)
      this.chart.setOption(this.option)
    }
  },
  mounted() {
    this.draw()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  watch: {
    myArr: {
    }

  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
