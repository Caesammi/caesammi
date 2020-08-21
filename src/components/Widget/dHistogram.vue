<template>
  <div class="container">
    <div :style="{width:'100%',height: height}" :id="id"></div>
  </div>
</template>

<script>
import store from "@/store";
import echarts from 'echarts'
export default {
  name: "dashBoard",
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
    }
  },
  // components: { Sticky },
  computed: {},
  data() {
    return {
      chartOptions: {
      }
    }
  },
  methods: {
    draw(){
      // let id = this.id
      let getID = document.getElementById(this.id)
      let myChart = echarts.init(getID)
      myChart.setOption(this.option)


    }
  },
  mounted() {


    console.log(this.option)
    this.draw()
    window.onresize = () => {
      echarts.init(document.getElementById(this.id)).resize();
    }
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
