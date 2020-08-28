<template>

    <div :style="{width: width, height: height}" :id="id"></div>

</template>

<script>
import store from "@/store"
import echarts from 'echarts'
import resize from './relyOn/myResize/resize'
let echartsData= {
      xData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,],
      x1Data: ["2015年","2015年","2015年","2015年","2015年","2015年","2015年","2015年","2015年","2015年","2015年","2015年","2016年","2016年","2016年","2016年","2016年","2016年","2016年","2016年","2016年","2016年","2016年","2016年","2017年","2017年","2017年","2017年","2017年","2017年","2017年","2017年","2017年","2017年","2017年","2017年","2018年","2018年","2018年","2018年","2018年","2018年","2018年","2018年","2018年","2018年","2018年","2018年"],
      yData: [10, 15, 18, 25, 23, 32, 33, 36, 57, 72, 45, 45, 10, 15, 18, 25, 23, 32, 33, 36, 57, 72, 45, 45, 10, 15, 18, 25, 23, 32, 33, 36, 57, 72, 45, 45, 10, 15, 18, 25, 23, 32, 33, 36, 57, 72, 45, 45],
      y1Data: [20, 50, 80, 50, 30, 50, 60, 60, 70, 90, 50, 50, 20, 50, 80, 50, 30, 50, 60, 60, 70, 90, 50, 50, 20, 50, 80, 50, 30, 50, 60, 60, 70, 90, 50, 50, 20, 50, 80, 50, 30, 50, 60, 60, 70, 90, 50, 50]
    }
    let fontColor=''

export default {
  mixins: [resize],
  name: "dHistogram",
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
      bigOption:{
        backgroundColor: 'transparent',
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(255,255,255,0.8)',//通过设置rgba调节背景颜色与透明度
          color: 'black',
          textStyle: {
            color: 'black',
          },
          axisPointer: {
            type: 'shadow'
            // background:'#fff'
          }

        },
        title: {
          show: false,
          text: '总体进度',
          x: 'left',
          y: 0,
          textStyle: {
            color: fontColor,
            fontSize: 16,
            fontWeight: 'normal',
          },

        },
        legend: {
          show: false,
          top: 50,
          right: 80,

        },
        grid: [
          {
            left: '6%',
            right: 10,
            top: 50,
            bottom: 71
          },
          {
            left: '6%',
            right: 10,
            height: 60,
            bottom: 10
          }
        ],
        xAxis: [
          {
            type: 'category',
            data: echartsData.xData,
            gridIndex: 0,
            axisLabel: {
              color: '#333',
              interval: 0
            },
            axisLine: {
              lineStyle: {
                color: '#606266'
              }
            },
            axisTick: {
              length: 20,
              lineStyle: {
                color: '#606266'
              }
            },
            zlevel: 2
          }
          , {
            type: 'category',
            data: echartsData.x1Data,
            gridIndex: 1,
            offset: -25,
            position:'top',
            axisLabel: {
              padding:[0,0,0,70],
              align:'left',
              interval:11,
              margin:-18,
              show:true,
            },
            axisLine: {
              show: false
            },
            axisTick: {
              interval:11,
              length: 25,
              lineStyle: {
                color: '#606266'
              }
            },
            zlevel: 1
          }],
        yAxis: [{
          type: 'value',
          gridIndex: 0,
          max: 100,
          splitLine: {
            lineStyle: {
              color: '#606266',
              type: 'dashed'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#606266',
            }
          },
          axisLabel: {
            formatter: '{value}%',
          },
          axisTick: {
            lineStyle: {
              color: '#ccc'
            }
          }
        }, {
          type: 'value',
          gridIndex: 1,
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        }],
        dataZoom: [
          {
            show: true,
            height: 10,
            bottom: 10,
            start: 0,
            end: 100,
            top: '95%',
            handleIcon:
                "M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z",
            handleSize: '110%',
            handleStyle: {
              color: '#009eff'
            },
            backgroundColor: "rgba(0, 158, 255,0.3)",
            textStyle: {
              color: '#defbff'
            },
            borderColor: 'rgba(0, 158, 255,0.5)'

          },
          {
            top: '87%',
            type: 'inside',
            xAxisIndex: [0, 0],
            start: 0,
            end: 100
          },{
            show: false,
            xAxisIndex: [0, 1],
            type: 'slider',
            top: '87%',
            start: 0,
            end: 100
          }],
        series: [
          {
            data: echartsData.y1Data.map(alItem => alItem * 1.07),
            type: 'line',
            smooth: false,
            name: '折线图',
            symbol: 'emptyCircle',
            symbolSize: 8,
            lineStyle: {
              color: '#3275FB',
              width: 3,
              shadowColor: 'rgba(0, 0, 0, 0.3)', //设置折线阴影
              shadowBlur: 10,
              shadowOffsetY: 10,
            },
            itemStyle: {
              normal: {
                color: 'rgba(50, 150, 250,0.7)'
              },
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                      offset: 0,
                      color: 'rgba(73, 86, 255, 0.5)',

                    },
                      {
                        offset: 1,
                        color: 'rgba(255, 255, 255, 0.1)',
                      }
                    ],
                    false
                ),
              }
            },
          },
          {
            data: echartsData.yData.map(alItem => alItem * 1.1),
            type: 'line',
            smooth: false,
            name: '折线图2',
            symbol: 'emptyCircle',
            symbolSize: 8,
            lineStyle: {
              color: '#7dcdab',
              width: 3,
              shadowColor: 'rgba(0, 0, 0, 0.3)', //设置折线阴影
              shadowBlur: 10,

              shadowOffsetY: 10,
            },
            itemStyle: {
              normal: {
                color: 'rgba(50, 150, 250,0.7)'
              },
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                      offset: 0,
                      color: '#7dcdab',

                    },
                      {
                        offset: 1,
                        color: 'rgba(163, 219, 196,0.2)',
                      }
                    ],
                    false
                ),
              }
            },
          },
          {
            name: '均值',
            data: echartsData.yData,

            type: 'bar',
            label: {
              show: false,
              position: 'top',
              textStyle: {
                color: '#555'
              }
            },
            itemStyle: {
              normal: {
                barBorderRadius: [15, 15, 0, 0],
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {
                        offset: 0,
                        color: '#fccb05'
                      }, {
                      offset: 1,
                      color: '#f5804d'
                    }
                    ]
                )
              },
            },
            xAxisIndex: 0,
            yAxisIndex: 0
          }, {
            name: '峰值',
            data: echartsData.y1Data,
            type: 'bar',
            label: {
              show: false,
              position: 'top',
              textStyle: {
                color: '#555'
              }
            },
            itemStyle: {
              normal: {
                barBorderRadius: [15, 15, 0, 0],
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {
                        offset: 0,
                        color: '#248ff7'
                      }, {
                      offset: 1,
                      color: '#6851f1'
                    }
                    ]
                )
              },
            },
            xAxisIndex: 0,
            yAxisIndex: 0
          },
          //年份刻度
          {
            data: [{
              name: '2015年',
              value: 1
            }],
            label: {
              show: false,
              position: 'inside',
              formatter: '{b}',
              offset: [0, 10],
              textStyle: {
                color: '#606266'
              }
            },
            type: 'bar',
            barGap: 0,
            barWidth: '100%',
            itemStyle: {

              normal: {
                color: 'transparent'
              }
            },

            xAxisIndex: 1,
            yAxisIndex: 1,

          }
        ]
      },
      miniOption:{
        backgroundColor: 'transparent',
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(255,255,255,0.8)',//通过设置rgba调节背景颜色与透明度
          color: 'black',
          textStyle: {
            color: 'black',
          },
          axisPointer: {
            type: 'shadow'
            // background:'#fff'
          }

        },
        title: {
          show: false,
          text: '总体进度',
          x: 'left',
          y: 0,
          textStyle: {
            color: fontColor,
            fontSize: 13,
            fontWeight: 'normal',
          },

        },
        legend: {
          show: false,
          top: 50,
          right: 80,

        },
        grid: [
          {
            left: '10%',
            right: 40,
            top: 40,
            bottom: 41
          },
          {
            left: '10%',
            right: 40,
            height: 30,
            bottom: 10
          }
        ],
        xAxis: [{
          type: 'category',
          data: echartsData.xData,
          gridIndex: 0,
          axisLabel: {
            color: '#333',
            fontSize: 6,
            interval: 0,
          },
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          },
          axisTick: {
            length: 15,
            lineStyle: {
              color: '#606266'
            }
          },
          zlevel: 2
        }, {
          type: 'category',
          gridIndex: 1,
          axisLine: {
            show: false
          },
          zlevel: 1
        }],
        yAxis: [{
          type: 'value',
          gridIndex: 0,
          max: 100,
          splitLine: {
            lineStyle: {
              color: '#606266',
              type: 'dashed'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#606266',
            }
          },
          axisLabel: {
            formatter: '{value}%',
          },
          axisTick: {
            lineStyle: {
              color: '#ccc'
            }
          }
        }, {
          type: 'value',
          gridIndex: 1,
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        }],
        dataZoom: [{
          show: true,
          height: 10,

          bottom: 10,
          start: 0,
          end: 100,
          handleIcon:
              "M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z",
          handleSize: '110%',
          handleStyle: {
            color: '#009eff'
          },
          backgroundColor: "rgba(0, 158, 255,0.3)",
          textStyle: {
            color: '#defbff'
          },
          borderColor: 'rgba(0, 158, 255,0.5)'

        }, {
          type: 'inside',
          show: true,
          height: 15,
          start: 1,
          end: 35
        }],
        series: [
          {
            data: echartsData.y1Data.map(alItem => alItem * 1.1),
            type: 'line',
            smooth: false,
            name: '折线图',
            symbol: 'emptyCircle',
            symbolSize: 8,
            lineStyle: {
              color: '#3275FB',
              width: 3,
              shadowColor: 'rgba(0, 0, 0, 0.3)', //设置折线阴影
              shadowBlur: 10,
              shadowOffsetY: 10,
            },
            itemStyle: {
              normal: {
                color: 'rgba(50, 150, 250,0.7)'
              },
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                      offset: 0,
                      color: 'rgba(73, 86, 255, 0.5)',

                    },
                      {
                        offset: 1,
                        color: 'rgba(255, 255, 255, 0.1)',
                      }
                    ],
                    false
                ),


              }
            },
          },
          {
            data: echartsData.yData.map(alItem => alItem * 1.1),
            type: 'line',
            smooth: false,
            name: '折线图2',
            symbol: 'emptyCircle',
            symbolSize: 8,
            lineStyle: {
              color: '#7dcdab',
              width: 3,
              shadowColor: 'rgba(0, 0, 0, 0.3)', //设置折线阴影
              shadowBlur: 10,
              shadowOffsetY: 10,
            },
            itemStyle: {
              normal: {
                color: 'rgba(50, 150, 250,0.7)'
              },
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                      offset: 0,
                      color: '#7dcdab',

                    },
                      {
                        offset: 1,
                        color: 'rgba(163, 219, 196,0.2)',
                      }
                    ],
                    false
                ),
              }
            },
          },
          {
            name: '均值',
            data: echartsData.yData,
            type: 'bar',
            label: {
              show: false,
              position: 'top',
              textStyle: {
                color: '#555'
              }
            },
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {
                        offset: 0,
                        color: '#fccb05'
                      }, {
                      offset: 1,
                      color: '#f5804d'
                    }
                    ]
                )
              },
            },
            xAxisIndex: 0,
            yAxisIndex: 0
          }, {
            name: '峰值',
            data: echartsData.y1Data,
            type: 'bar',
            label: {
              show: false,
              position: 'top',
              textStyle: {
                color: '#555'
              }
            },
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {
                        offset: 0,
                        color: '#248ff7'
                      }, {
                      offset: 1,
                      color: '#6851f1'
                    }
                    ]
                )
              },
            },
            xAxisIndex: 0,
            yAxisIndex: 0
          }, {
            data: [{
              name: '2015年',
              value: 1
            }],
            label: {
              show: false,
              position: 'inside',
              formatter: '{b}',
              offset: [0, 10],
              textStyle: {
                color: '#606266'
              }
            },
            type: 'bar',
            barGap: 0,
            barWidth: '25%',
            itemStyle: {

              normal: {
                color: 'transparent'
              }
            },
            xAxisIndex: 1,
            yAxisIndex: 1
          }, {
            data: [{
              name: '2015年',
              value: 1
            }],
            label: {
              show: false,
              position: 'inside',
              formatter: '{b}',
              offset: [0, 10],
              textStyle: {
                color: '#606266'
              }
            },
            type: 'bar',
            barGap: 0,
            barWidth: '25%',
            itemStyle: {
              normal: {
                color: 'transparent'
              }
            },
            xAxisIndex: 1,
            yAxisIndex: 1
          }, {
            data: [{
              name: '2015年',
              value: 1
            }],
            label: {
              show: false,
              position: 'inside',
              formatter: '{b}',
              offset: [0, 10],
              textStyle: {
                color: '#606266'
              }
            },
            type: 'bar',
            barGap: 0,
            barWidth: '25%',
            itemStyle: {
              normal: {
                color: 'transparent'
              }
            },
            xAxisIndex: 1,
            yAxisIndex: 1
          }, {
            data: [{
              name: '2015年',
              value: 1
            }],
            label: {
              show: false,
              position: 'inside',
              formatter: '{b}',
              offset: [0, 10],
              textStyle: {
                color: '#606266'
              }
            },
            type: 'bar',
            barGap: 0,
            barWidth: '25%',
            itemStyle: {
              normal: {
                color: 'transparent'
              }
            },
            xAxisIndex: 1,
            yAxisIndex: 1
          }]
      },
      errorOption:{
        backgroundColor: 'transparent',
        title: {
          show: true,
          text: '暂无数据',
          x: 'center',
          y: '50%',
          textStyle: {
            color: fontColor,
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
      chart: null
    }
  },
  methods: {
    draw(){
      // let id = this.id
      let getID = document.getElementById(this.id)
      let filterOption = `${this.bom}Option`
      this.chart = echarts.init(getID)

      console.log(fontColor)
      this.chart.setOption(this[filterOption])
    }
  },
  created() {
    fontColor = store.state.theme==='light' ? '#606266' : 'white'
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
