<template>
  <div class="container">
    <div :style="{width:'100%',height: height}" :id="id"></div>
  </div>
</template>

<script>
import store from "@/store"
import echarts from 'echarts'
import resize from './relyOn/myResize/resize'
const normal = 5, all = 20

export default {
  mixins: [resize],
  name: "dashBoard",
  store:store,
  props: {
    bom:{
      type:String
    },
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
      chartOptions: {},
      chart: null,
      bigOption: {
        tooltip: {
          trigger:'item',
          show:true,
          formatter: "{a} <br/>值 : {c}",
          backgroundColor: 'rgba(255,255,255,0.8)',//通过设置rgba调节背景颜色与透明度
          color: 'black',
          textStyle: {
            color: 'black',
          },
        },
        angleAxis: {
          max: 100,
          clockwise: false,
          startAngle: -45,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisPointer:{
            triggerTooltip: false,
          },
          splitLine: {
            show: false
          }
        },
        radiusAxis: {
          type: 'category',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        polar: {
          center: ['50%', '55%'],
          radius: '180%' //图形大小
        },
        series: [{
          type: 'bar',
          data: [{
            value: 75,
            triggerTooltip:false,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 1, 0, [
                      {
                        offset: 0.1,
                        color: "#ff6a6a"
                      },
                      {
                        offset: 0.6,
                        color: "#FFC600"
                      },
                      {
                        offset: 1,
                        color: "#30D27C"
                      }
                    ]
                )
              }
            },
          }],
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 30,
        },
          {
            type: 'gauge',
            radius: '88%',
            min: 0,
            max: 100,
            splitNumber: 5,
            axisLine: {
              show: false,
            },
            axisLabel: {
              color: '#999999',
              fontSize: 13
            },
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1, [
                    {
                      offset: 0.1,
                      color: "#ff6a6a"
                    },
                    {
                      offset: 0.6,
                      color: "#FFC600"
                    },
                    {
                      offset: 1,
                      color: "#30D27C"
                    }
                  ]
              )
            },
            pointer: {
              show: true,
              length: '70%',
              radius: '20%',
              width: 7, //指针粗细
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            detail: {
              color: '#333333',
              fontSize: 30
            },
            data: [50]
          }]
      },
      miniOption: {
        backgroundColor: 'transparent',
        tooltip: {
          formatter: "{a} <br/>值 : {c}",
          backgroundColor: 'rgba(255,255,255,0.8)',//通过设置rgba调节背景颜色与透明度
          color: 'black',
          textStyle: {
            color: 'black',
          },
        },
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
        series: [{
          name: "HES与质量",
          type: "gauge",
          center: ['50%', '85%'],
          radius: '135%',
          min: 0, //最小刻度
          max: all, //最大刻度
          startAngle: 180,
          endAngle: 0,
          axisLine: {
            lineStyle: {
              color: [
                [
                  1, new echarts.graphic.LinearGradient(
                    0, 0, 1, 0, [
                      {
                        offset: 0.1,
                        color: "#ff6a6a"
                      },
                      {
                        offset: 0.6,
                        color: "#FFC600"
                      },
                      {
                        offset: 1,
                        color: "#30D27C"
                      }
                    ]
                )
                ],

              ],
              width: 20
            }
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,

          },
          splitLine: {
            show: false,
          },
          itemStyle: {
            show: true,
            normal: {
              barBorderRadius: 50,
            }
          },
          detail: {
            textStyle: {
              fontSize: 20,
              fontWeight: '700',
              color: 'rgb(235, 148, 118)'
            },
            show: false,
            offsetCenter: [0, '-20%'],
            formatter: (value) => {
              return [
                `${value}/${all}`
              ]
            },
          },
          title: { //标题
            show: true,
            offsetCenter: [0, -5], // x, y，单位px
            textStyle: {
              color: "#ff0",
              fontSize: 30, //表盘上的标题文字大小
              fontWeight: 400,
              fontFamily: 'PingFangSC'
            }
          },
          data: [{
            // name: "m/min",
            value: normal,
          }],
          pointer: {
            show: true,
            length: '70%',
            radius: '20%',
            width: 7, //指针粗细
          },
          animationDuration: 4000,
        },
        ]
      },
      errorOption:{
        backgroundColor: 'transparent',
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
      let filterOption = `${this.bom}Option`
      console.log('filterO', filterOption)
      this.chart = echarts.init(getID)
      this.chart.setOption(this[filterOption])


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
