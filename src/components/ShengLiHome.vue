<template>
  <div id="myMain">
    <el-row :gutter="5" style="margin: 0;min-width: 1400px">
      <el-col :span="8">
        <el-col class="marginTopTen">
          <el-col class="smallTitle">
            <el-col>
              <label style="font-size: 12px"> </label> 项目基本信息
              <div class="moreButton">more</div>
            </el-col>
          </el-col>
          <el-col style="font-size: 14px;padding-bottom: 15px;padding-left: 10px;padding-right: 10px;position: relative"
                  class="paddingAllTen midContainer">
            ● 总投资:4.3亿元 <br>
            ● 开工日期: 2013年3月23日 <br>
            ● 计划投科日期: 2013年4月2日
            <el-divider></el-divider>
            <el-col :span="12">
              ● 主要建设内容:<br>
              建设内容文字建设内容文字建设内容文字<br>
              建设内容文字建设内容文字建设内容文字<br>
            </el-col>
            <el-col :span="12">
              ●当前进展概要<br>
              建设内容文字建设内容文字建设内容文字<br>
              建设内容文字建设内容文字建设内容文字<br>
            </el-col>
          </el-col>
        </el-col>
        <el-col class="marginTopTen">
          <el-col class="smallTitle">
            <label style="font-size: 12px"> </label> HES与质量
          </el-col>
          <el-col style="padding-bottom: 20px;" class="midContainer">
            <el-col :span="8">
              <dashBoard id="dash1" :option="optionDash1" height="136px"></dashBoard>
              <el-col align="center">
                <div class="mySubTitle">HES情况</div>
              </el-col>
            </el-col>
            <el-col :span="8">
              <dashBoard id="dash2" :option="optionDash1" height="136px"></dashBoard>
              <el-col align="center">
                <div class="mySubTitle">质量情况</div>
              </el-col>
            </el-col>
            <el-col :span="8">
              <dashBoard id="dash3" :option="optionDash1" height="136px"></dashBoard>
              <el-col align="center">
                <div class="mySubTitle">风险管理情况</div>
              </el-col>
            </el-col>
          </el-col>
        </el-col>
        <el-col class="marginTopTen"
                style="background: white;box-shadow:4px 10px 8px -5px #e1e1e1;border-bottom-right-radius: 15px;border-bottom-left-radius: 15px">
          <el-col class="smallTitle">
            <label style="font-size: 12px"> </label> 里程碑完成情况
          </el-col>

          <el-col
              style="background: rgba(225,236,252,0.3);border-radius: 15px;border:1px solid rgb(195,219,255);margin-top:5px">
            <el-col>
              <dashBoard id="dash4" :option="optionDash2" height="270px"></dashBoard>
              <el-col style="margin-top: -15px;margin-bottom: 15px;" class="dashBoardTitle" align="center">
                <div style="width: 35%" class="mySubTitle">总体状况</div>
              </el-col>
            </el-col>
          </el-col>
          <el-col
              style="margin-top: 10px;border-radius: 15px;margin-bottom: 10px;background: rgba(225,236,252,0.3);border:1px solid rgb(195,219,255)"
              align="center">
            <el-col style="margin-top: 20px;background: transparent" class="paddingAllTen">
              <el-col>
                <el-col align="right" :span="5">按期完成率:</el-col>
                <el-col :span="18">
                  <el-progress :stroke-width="13" :percentage="98" color="#FF9131"></el-progress>
                </el-col>
              </el-col>
              <el-col style="margin-top: 20px">
                <el-col align="right" :span="5">平均滞后天数:</el-col>
                <el-col :span="18">
                  <el-progress :stroke-width="13" :percentage="50" color="#409EFF"></el-progress>
                </el-col>
              </el-col>

            </el-col>
            <el-button-group style="margin-top: 20px;margin-bottom: 20px">
              <el-button size="mini" type="ghost"><i style="color: #295f00" class="el-icon-s-marketing"></i> 图示
              </el-button>
              <el-button size="mini" type="ghost"><i style="color: #24c400" class="el-icon-s-marketing"></i> 图示
              </el-button>
              <el-button size="mini" type="ghost"><i style="color: #ff7400" class="el-icon-s-marketing"></i> 图示
              </el-button>
              <el-button size="mini" type="ghost"><i style="color: #ff0000" class="el-icon-s-marketing"></i> 图示
              </el-button>
            </el-button-group>
          </el-col>
        </el-col>


      </el-col>
      <el-col :span="16">
        <el-col class="marginTopTen" :span="12">
          <el-col>
            <el-col class="smallTitle">
              <el-col>
                <label style="font-size: 12px"> </label> 项目要闻
                <div class="moreButton">more</div>
              </el-col>
            </el-col>

            <el-col class="midContainer" style="padding-bottom: 10px">
              <el-col class="paddingAllTen" v-for="(item,index) in 4" :span="12" :key="index">
                <el-tooltip placement="top">
                  <div
                      style="display: -webkit-box;-webkit-box-orient: vertical;max-width: 300px"
                      slot="content">方向副主任和殷明汉总共分别出席活动方向副主任和殷明汉总共分别等等方向副主任和殷明汉总共分别等等{{ item }}
                  </div>
                  <div style="padding:0 10px;">
                    <div
                        style="font-size: 14px;border-bottom: 1px solid #606266;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;cursor: pointer;">
                      ● 方向副主任和殷明汉总共分别出席活动方向副主任和殷明汉总共分别等等方向副主任和殷明汉总共分别等等{{ index }}
                    </div>
                  </div>

                </el-tooltip>

              </el-col>
            </el-col>
          </el-col>
        </el-col>
        <el-col class="marginTopTen" :span="12">
          <el-col>
            <el-col class="smallTitle">
              <el-col>
                <label style="font-size: 12px"> </label> 问题与重点工作
                <div class="moreButton">more</div>
              </el-col>
            </el-col>
            <el-col class="midContainer" style="padding-bottom: 10px">
              <el-col class="paddingAllTen" v-for="(item,index) in 4" :span="12" :key="index">
                <el-tooltip placement="top">
                  <div
                      style="display: -webkit-box;-webkit-box-orient: vertical;max-width: 300px"
                      slot="content">陈刚主任出席ISO第9次理事要闻陈刚主任出席ISO第9次理事要闻陈刚主任出席ISO第9次理事要闻{{ item }}
                  </div>
                  <div style="padding:0 10px;">
                    <div
                        style="font-size: 14px;border-bottom: 1px solid #606266;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;cursor: pointer;">
                      ● 陈刚主任出席ISO第9次理事要闻陈刚主任出席ISO第9次理事要闻陈刚主任出席ISO第9次理事要闻{{ index }}
                    </div>
                  </div>
                </el-tooltip>
              </el-col>
            </el-col>
          </el-col>
        </el-col>
        <el-col :span="24">
          <el-tabs style="margin-left: 10px;margin-top: 5px" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane v-for="(item, index) in menuList" :key="index" :label="item.name"
                         :name="item.name"></el-tab-pane>
          </el-tabs>
          <el-col :span="16" style=" box-shadow:4px 8px 5px -5px #CCCCCC;">
            <histogram :id="idH1" :option="optionH1" bom="big" width="100%" height="500px"></histogram>
          </el-col>
          <el-col :span="8" style=" box-shadow:4px 8px 5px -5px #CCCCCC;margin-top: -5px;">
            <el-col v-for="(item,index) in idH" :key="index" style="margin-top: 5px;">
              <histogram :id="item.id" :option="optionH2" bom="mini" height="163px"></histogram>
            </el-col>
          </el-col>
          <el-col :span="12" style="margin-top: 10px">
            <el-col>
              <el-col class="smallTitle">
                <label style="font-size: 12px"> </label> 投资控制
              </el-col>
              <el-col class="midContainer">
                <el-col style="margin-top: 20px;" v-for="(item,index) in touZiList" :span="8" :key="index+'1'">
                  <i v-if="index!==0" :style="{color:item.color}" class="el-icon-s-marketing"></i>
                  <i v-else class="el-icon-caret-right"></i>
                  {{ item.content }}
                </el-col>
                <el-col style="margin-top: 10px" class="paddingAllTen">
                  <el-progress :stroke-width="13" :percentage="98" color="#ff9131"></el-progress>
                  <el-progress style="margin-top: 20px;" :stroke-width="13" :percentage="50"
                               color="#409EFF"></el-progress>
                  <el-col style="margin-top: 20px" v-for="(item,index) in touZiList" :span="8" :key="index">
                    <i v-if="index!==0" :style="{color:item.color}" class="el-icon-s-marketing"></i>
                    <i v-else class="el-icon-caret-right"></i>
                    {{ item.content2 }}
                  </el-col>
                  <el-col style="margin-top: 20px;margin-bottom: 25px">
                    <el-progress :stroke-width="13" :percentage="98" color="#ff9131"></el-progress>
                    <el-progress style="margin-top: 20px;" :stroke-width="13" :percentage="50"
                                 color="#409EFF"></el-progress>
                  </el-col>
                </el-col>
              </el-col>

            </el-col>
          </el-col>
          <el-col :span="12" style="margin-top: 10px">
            <el-col>
              <el-col class="smallTitle commonFlexStart">
                变更管理
                <div style="right: 110px" class="titleButton">数据</div>
                <div style="right: 65px" class="titleButton">饼图</div>
                <div style="right: 20px" class="titleButton">详情</div>
              </el-col>
              <el-col class="midContainer" style="padding-top:20px;padding-bottom: 20px">
                <el-col :span="12">
                  <Pie :id="idP1" :option="optionP1" height="220px"></Pie>
                </el-col>
                <el-col :span="12" style="padding-right: 10px">
                  <Pie :id="idP2" :option="optionP1" height="220px"></Pie>
                </el-col>
              </el-col>
            </el-col>
          </el-col>
        </el-col>

      </el-col>
    </el-row>


  </div>
</template>

<script>
import store from "@/store";
import echarts from 'echarts'
import Pie from './Widget/dPie'
import histogram from './Widget/dHistogram'
import dashBoard from './Widget/dashBoard'

const normal = 5, all = 20;
export default {
  name: "mytest",
  components: {histogram, Pie, dashBoard},
  store: store,
  computed: {},
  data() {
    return {
      touZiList: [
        {
          content: '年度完成情况',
          content2: '项目累计投资完成情况',
          color: 'ff9131'
        },
        {
          content: '累计完成投资',
          content2: '建安工程费支付',
          color: '#ff9131'
        },
        {
          content: '项目总体进度',
          content2: '项目施工进程',
          color: '#409EFF'
        }
      ],
      idH: [                         //id
        {id: 'testH2', option: this.optionH1},
        {id: 'testH3', option: this.optionH1},
        {id: 'testH4', option: this.optionH1},

      ],
      idH1: 'testH',
      optionH1: {},
      optionH2: {},
      idP1: 'testP',
      optionP1: {
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
      idP2: 'testP2',
      optionP2: {
        chart: {
          height: 266,
          type: 'pie',
          width: 300,
          options3d: {
            color: ['#9e69ff', '#2F8DF4', '#ffe156'],
            backgroundColor: '#fff',
            title: {
              show: true,
              text: '各类变更所占比例',
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
              radius: ['20%', '80%'],
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
        },
        title: {
          text: '',
          margin: 0
        },
        subtitle: {
          text: '各类变更所占比例',
          margin: 0
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
              enabled: false,
              format: '{point.name}'
            }
          }
        },
        series: [{
          type: 'pie',
          name: '浏览器占比',
          data: [
            {
              color: '#0F74F7',
              name: '设计变更',
              y: 45.8,
              sliced: true,
              selected: true
            },
            {
              color: 'rgb(141,107,214)',
              name: '业主变更',
              y: 12.8,
              sliced: true,
              selected: true
            },
            {
              color: 'rgb(255,190,28)',
              name: '存在争议',
              y: 12.8,
              sliced: true,
              selected: true
            },
          ]
        }]
      },
      optionDash1: {
        backgroundColor: '#fff',
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
      optionDash2: {
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
      activeName: '总体进度曲线',
      menuList: [
        {
          name: '总体进度曲线'
        },
        {
          name: '设计进度情况'
        },
        {
          name: '采购进度情况'
        },
        {
          name: '施工进度情况'
        },
        {
          name: '生产准备情况'
        },
        {
          name: '进度百分比明细'
        }
      ],   //导航菜单
    }
  },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event)
      },
      makeYear(){
        let pre2=[]
        for(let i = 0; i<49; i++){
          if(i<=12&&i>0){
            pre2.push('2015年')
          }
          if(i<=24&&i>12){
            pre2.push('2016年')
          }
          if(i<=36&&i>24){
            pre2.push('2017年')
          }
          if(i<=49&&i>36){
            pre2.push('2018年')
          }
        }
        console.log(pre2.length);
        console.log(JSON.stringify(pre2))
      },
    }
  ,
    mounted() {
    },
    watch: {
      activeName:function () {
        this.optionH1.title.text = this.activeName
        this.optionH2.title.text = this.activeName
      }
    }
  }
</script>

<style scoped>
#myMain {
  color: #606266;
  width: 100%;
}

.midContainer {
  background: white;
  box-shadow: 4px 10px 8px -5px #e1e1e1;
  border-bottom-right-radius: 15px;
}

.smallTitle {
  padding-left: 20px !important;
  font-weight: bold;
  color: white;
  line-height: 1.8;
  background: url('../assets/xz.png') no-repeat;
  background-color: white;
  /*background: linear-gradient(to right, #99ceff, #2991ff);*/
  text-shadow: 0px 2px 2px #484848;
}

.titleButton {
  background: #5FA4D0;
  padding: 0 3px 0 3px;
  margin-top: 5px;
  position: absolute;
  font-size: 12px;
  border: 1px solid #b2ceff;
  float: right;
  cursor: pointer;
  border-radius: 3px;
}

.moreButton {
  padding: 0 3px 0 3px;
  font-size: 13px;
  float: right;
  color: #63A6D1;
  cursor: pointer;
  text-shadow: none;
  margin-top: 3px;
  border-radius: 3px;
}

.commonFlexStart {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
}

.paddingAllTen {
  padding: 10px 10px 10px 10px
}

.marginTopTen {
  margin-top: 10px;
}

.mySubTitle {
  padding: 5px;
  position: relative;
  z-index: 2;
  font-size: 14px;
  width: 55%;
  background: rgb(225, 236, 252);
  border: 1px solid #9898ff33;
  border-radius: 5px;
}
</style>
