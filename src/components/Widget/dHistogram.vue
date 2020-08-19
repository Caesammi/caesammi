<template>
  <div class="container">
    <div :id="id" :option="option" :style="{height:height}"></div>
  </div>
</template>

<script>
import store from "@/store";
import HighCharts from 'highcharts'

export default {
  name: "dHistogram",
  store:store,
  props: {
    id: {
      type: String
    },
    height:{
      type:String
    },
    //option 是图表的配置数据
    option: {
      type: Object
    },
  },
  // components: { Sticky },

  data() {
    return {
      chartOptions: {
      }
    }
  },
  methods: {
    draw(){
      HighCharts.chart(this.id, this.option)
    }
  },
  mounted() {
    console.log('height',this.height)
    HighCharts.chart(this.id, this.option)
  },
  computed: {
    getTitle:function () {
      return this.option.title.text
    }
  },
  watch: {
    getTitle:function (val) {
      console.log(val)
      HighCharts.chart(this.id, this.option).update({
        title:{
          text:val
        }
      })
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
