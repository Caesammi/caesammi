<template>
  <div class="container">
    <div :style="{width:'100%',height: height}" :id="id"></div>
  </div>
</template>

<script>
import store from "@/store";
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
    }
  },
  // components: { Sticky },
  computed: {},
  data() {
    return {
      chartOptions: {
      },
      chart: null,
      pieOption:{
        color: ['#9e69ff', '#2F8DF4', '#ffe156'],
        backgroundColor: '#fff',
        title: {
          show: true,
          text: '发生变更占投资完成比例',
          left: 'center',
          top: '3%',
          textStyle: {
            fontSize: 12,
            color: '#727272',
            fontWeight: 'normal'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          show: false,
          orient: 'vertical',
          right: 20,
          top: 20
        },
        series: [{
          itemStyle: {
            shadowBlur: 5,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0,0,0,0.5)'
          },
          type: 'pie',
          roseType: 'radius',
          radius: ['30%', '90%'],
          center: ["50%", "60%"],
          data: [{
            value: 220,
            name: '业主变更'
          }, {
            value: 120,
            name: '事业变更'
          },
            {
              value: 189,
              name: '存在争议'
            }
          ],
          label: {
            normal: {
              formatter: '{font|{c}}\n{hr|}\n{font|{d}%}',
              rich: {
                font: {
                  fontSize: 20,
                  padding: [5, 0],
                  color: '#fff'
                },
                hr: {
                  height: 0,
                  borderWidth: 1,
                  width: '100%',
                  borderColor: '#fff'
                }
              }
            },
          },
          labelLine: {
            lineStyle: {
              color: '#fff'
            }
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0,0,0,0.5)'
            }
          }
        }]
      },
      errorOption:{
        backgroundColor: 'white',
        title: {
          show: true,
          text: '暂无数据',
          x: 'center',
          y: '50%',
          textStyle: {
            color: '#4a4c4e',
            fontSize: 40,
            fontWeight: '500',
          },
        },
        grid: [
          {
            left: '6%',
            right: 10,
            top: 40,
            bottom: 71
          },
          {
            left: '6%',
            right: 10,
            height: 60,
            bottom: 10
          }
        ],
      },
    }
  },
  methods: {
    draw(){
      // let id = this.id
      let getID = document.getElementById(this.id)
      this.chart = echarts.init(getID)
      this.chart.setOption(this.pieOption)


    }
  },
  mounted() {
    this.draw()
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
