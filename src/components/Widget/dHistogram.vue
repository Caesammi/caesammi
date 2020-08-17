<template>
  <div class="container">
    <div :id="id" :option="option"></div>
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
    //option 是图表的配置数据
    option: {
      type: Object
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
  },
  mounted() {
    HighCharts.chart(this.id, this.option)
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
