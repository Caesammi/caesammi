<template>
  <div id="myMain">
    <el-row :gutter="5" style="margin: 0;min-width: 1400px">
      <el-col :span="8">
        <el-col class="marginTopTen">
          <el-col class="smallTitle">
            <el-col>
              <label style="font-size: 12px">  </label>  项目基本信息
              <div class="moreButton">more</div>
            </el-col>
          </el-col>
          <el-col style="font-size: 16px;padding-bottom: 15px;position: relative" class="paddingAllTen midContainer">
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
            <label style="font-size: 12px">    </label>  HES与质量
          </el-col>
          <el-col style="padding-bottom: 20px;" class="midContainer">
            <el-col :span="8">
              <dashBoard id="dash1" :option="dashOpt1" height="166px"></dashBoard>
              <el-col align="center">HES情况</el-col>
            </el-col>
            <el-col :span="8">
              <dashBoard id="dash2" :option="dashOpt1" height="166px"></dashBoard>
              <el-col align="center">质量情况</el-col>
            </el-col>
            <el-col :span="8">
              <dashBoard id="dash3" :option="dashOpt1" height="166px"></dashBoard>
              <el-col align="center">风险管理情况</el-col>
            </el-col>
          </el-col>
        </el-col>
        <el-col class="marginTopTen" style="background: white;box-shadow:4px 10px 8px -5px #e1e1e1;border-bottom-right-radius: 15px;border-bottom-left-radius: 15px">
          <el-col class="smallTitle">
            <label style="font-size: 12px">    </label>  里程碑完成情况  </el-col>
          <el-col class="paddingAllTen">
            <el-col>
              <dashBoard id="dash4" :option="dashOpt2" height="290px"></dashBoard>
              <el-col class="dashBoardTitle" align="center">总体状况</el-col>
            </el-col>
          </el-col>
        </el-col>
        <el-col style="margin-top: 10px;border-radius: 15px;margin-bottom: 15px " align="center" class="paddingAllTen midContainer">
          <el-col  style="margin-top: 20px;background: white" class="paddingAllTen">
            <el-col>
              <el-col align="right" :span="5">按期完成率:</el-col><el-col :span="18"><el-progress :stroke-width="13" :percentage="98" color="#FF9131"></el-progress></el-col>
            </el-col>
           <el-col style="margin-top: 10px">
             <el-col align="right" :span="5">平均滞后天数:</el-col><el-col :span="18"><el-progress :stroke-width="13" :percentage="50" color="#409EFF"></el-progress></el-col>
           </el-col>

          </el-col>
          <el-button-group>
            <el-button size="mini" type="ghost"><i style="color: #295f00" class="el-icon-s-marketing"></i> 图示</el-button>
            <el-button size="mini" type="ghost"><i style="color: #24c400" class="el-icon-s-marketing"></i> 图示</el-button>
            <el-button size="mini" type="ghost"><i style="color: #ff7400" class="el-icon-s-marketing"></i> 图示</el-button>
            <el-button size="mini" type="ghost"><i style="color: #ff0000" class="el-icon-s-marketing"></i> 图示</el-button>
          </el-button-group>
        </el-col>

      </el-col>
      <el-col :span="16">
        <el-col class="marginTopTen" :span="12">
          <el-col>
            <el-col class="smallTitle">
              <el-col>
                <label style="font-size: 12px">  </label>  项目要闻
                <div class="moreButton">more</div>
              </el-col>
            </el-col>

            <el-col class="midContainer" style="padding-bottom: 10px">
              <el-col class="paddingAllTen" v-for="(item,index) in 4" :span="12" :key="index">
                <el-tooltip placement="top">
                  <div
                      style="display: -webkit-box;-webkit-box-orient: vertical;max-width: 300px"
                      slot="content">方向副主任和殷明汉总共分别出席活动方向副主任和殷明汉总共分别等等方向副主任和殷明汉总共分别等等{{item}}
                  </div>

                  <div  style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;cursor: pointer;border-bottom: 1px solid #727272">
                    ● 方向副主任和殷明汉总共分别出席活动方向副主任和殷明汉总共分别等等方向副主任和殷明汉总共分别等等{{index}}
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
                <label style="font-size: 12px">  </label>  问题与重点工作
                <div class="moreButton">more</div>
              </el-col>
            </el-col>
           <el-col class="midContainer" style="padding-bottom: 10px">
             <el-col class="paddingAllTen" v-for="(item,index) in 4" :span="12" :key="index">
               <el-tooltip placement="top">
                 <div
                     style="display: -webkit-box;-webkit-box-orient: vertical;max-width: 300px"
                     slot="content">陈刚主任出席ISO第9次理事要闻陈刚主任出席ISO第9次理事要闻陈刚主任出席ISO第9次理事要闻{{item}}
                 </div>

                 <div  style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;cursor: pointer;border-bottom: 1px solid #727272">
                   ● 陈刚主任出席ISO第9次理事要闻陈刚主任出席ISO第9次理事要闻陈刚主任出席ISO第9次理事要闻{{index}}
                 </div>

               </el-tooltip>
             </el-col>
           </el-col>
          </el-col>
        </el-col>
        <el-col :span="24">
          <el-tabs style="margin-left: 10px;margin-top: 5px" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane v-for="(item, index) in menuList" :key="index" :label="item.name" :name="item.name"></el-tab-pane>
          </el-tabs>
          <el-col :span="16" style=" box-shadow:4px 8px 5px -5px #CCCCCC;">
                <histogram :id="idH1" :option="optionH1" height="500px"></histogram>
          </el-col>
          <el-col  :span="8" style=" box-shadow:4px 8px 5px -5px #CCCCCC;">
            <el-col  v-for="(item,index) in idH" :key="index">
              <histogram :id="item.id" :option="optionH2" height="166px"></histogram>
            </el-col>
          </el-col>
          <el-col align="center" style="font-size: 13px;background: rgba(149, 188, 243, 0.28);margin-top: -65px;position: relative;z-index: 99;transform: skewX(-5deg) rotate(2deg) scaleX(0.8) translateX(26px);" :span="16">
            <el-col :span="6">2015年</el-col>
            <el-col :span="6">2016年</el-col>
            <el-col :span="6">2017年</el-col>
            <el-col :span="6">2018年</el-col>
          </el-col>
          <el-col :span="12" style="margin-top: 10px">
            <el-col>
              <el-col class="smallTitle">
                <label style="font-size: 12px">    </label>  投资控制
              </el-col>
              <el-col class="midContainer">
                <el-col style="margin-top: 20px;" v-for="(item,index) in touZiList" :span="8" :key="index+'1'">
                  <i v-if="index!==0" :style="{color:item.color}" class="el-icon-s-marketing"></i>
                  <i v-else class="el-icon-caret-right"></i>
                  {{item.content}}
                </el-col>
                <el-col style="margin-top: 10px" class="paddingAllTen">
                  <el-progress :stroke-width="13" :percentage="98" color="#ff9131"></el-progress>
                  <el-progress style="margin-top: 20px;" :stroke-width="13" :percentage="50" color="#409EFF"></el-progress>
                  <el-col style="margin-top: 20px" v-for="(item,index) in touZiList" :span="8" :key="index">
                    <i v-if="index!==0" :style="{color:item.color}" class="el-icon-s-marketing"></i>
                    <i v-else class="el-icon-caret-right"></i>
                    {{item.content2}}
                  </el-col>
               <el-col style="margin-top: 20px;margin-bottom: 25px">
                 <el-progress :stroke-width="13" :percentage="98" color="#ff9131"></el-progress>
                 <el-progress style="margin-top: 20px;" :stroke-width="13" :percentage="50" color="#409EFF"></el-progress>
               </el-col>
                </el-col>
              </el-col>

            </el-col>
          </el-col>
          <el-col :span="12" style="margin-top: 10px">
            <el-col>
              <el-col class="smallTitle commonFlexStart">
                变更管理 <div style="right: 100px" class="titleButton">数据</div><div style="right: 65px" class="titleButton">饼图</div><div style="right: 30px" class="titleButton">详情</div>
              </el-col>
              <el-col class="midContainer">
                <el-col :span="12">
                  <Pie :id="idP1" :option="optionP1"></Pie>
                </el-col>
                <el-col :span="12" style="padding-right: 10px">
                  <Pie :id="idP2" :option="optionP2"></Pie>
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
import Highcharts from 'highcharts'
import echarts from 'echarts'
import Pie from './Widget/dPie'
import histogram from './Widget/dHistogram'
import dashBoard from './Widget/dashBoard'
var category = ['市区','万州','江北','南岸','北碚','綦南','长寿','永川','璧山','江津','城口','大足','垫江','丰都','奉节','合川','江津区','开州','南川','彭水','黔江','石柱','铜梁','潼南','巫山','巫溪','武隆','秀山','酉阳','云阳','忠县','川东','检修'];
var dottedBase = [];
var lineData = [18092,20728,24045,28348,32808
  ,36097,39867,44715,48444,50415
  ,56061,62677,59521,67560,18092,20728,24045,28348,32808
  ,36097,39867,44715,48444,50415,36097,39867,44715,48444,50415
  ,50061,32677,49521,32808];
var barData = [4600,5000,5500,6500,7500
  ,8500,9900,12500,14000,21500
  ,23200,24450,25250,33300,4600,5000,5500,6500,7500
  ,8500,9900,22500,14000,21500,8500,9900,12500,14000,21500
  ,23200,24450,25250,7500];
var rateData = [];
32808
for (var i = 0; i < 33; i++) {
  // var date = i+2001;
  // category.push(date)
  var rate=barData[i]/lineData[i];
  rateData[i] = rate.toFixed(2);
}
export default {
  name: "mytest",
  components: { histogram, Pie, dashBoard },
  store:store,
  computed: {},
  data() {
    return {

      touZiList:[
        {
          content:'年度完成情况',
          content2:'项目累计投资完成情况',
          color:'ff9131'
        },
        {
          content:'累计完成投资',
          content2:'建安工程费支付',
          color: '#ff9131'
        },
        {
          content:'项目总体进度',
          content2:'项目施工进程',
          color: '#409EFF'
        }
      ],
      idH:[                         //id
        {id:'testH2',option:this.optionH1},
        {id:'testH3',option:this.optionH1},
        {id:'testH4',option:this.optionH1},

      ],
      idH1: 'testH',
      optionH1: {
        title: {
          text: '增量设备贯通情况-单位',
          x: 'center',
          y: 0,
          textStyle:{
            color:'#B4B4B4',
            fontSize:16,
            fontWeight:'normal',
          },

        },
        backgroundColor: 'white',
        tooltip: {
          trigger: 'axis',
          backgroundColor:'rgba(255,255,255,0.1)',
          axisPointer: {
            type: 'shadow',
            label: {
              show: true,
              backgroundColor: '#7B7DDC'
            }
          }
        },
        legend: {
          data: ['已贯通', '计划贯通','贯通率',],
          textStyle: {
            color: '#B4B4B4'
          },
          top:'7%',
        },
        grid:{
          x:'12%',
          width:'82%',
          y:'12%',
        },
        xAxis: {
          data: category,
          axisLine: {
            lineStyle: {
              color: '#B4B4B4'
            }
          },
          axisTick:{
            show:false,
          },
        },
        yAxis: [{

          splitLine: {show: false},
          axisLine: {
            lineStyle: {
              color: '#B4B4B4',
            }
          },

          axisLabel:{
            formatter:'{value} ',
          }
        },
          {

            splitLine: {show: false},
            axisLine: {
              lineStyle: {
                color: '#B4B4B4',
              }
            },
            axisLabel:{
              formatter:'{value} ',
            }
          }],

        series: [{
          name: '贯通率',
          type: 'line',
          smooth: true,
          showAllSymbol: true,
          symbol: 'emptyCircle',
          symbolSize: 8,
          yAxisIndex: 1,
          itemStyle: {
            normal: {
              color:'rgba(50, 150, 250,0.7)'},
          },
          data: rateData
        },
          {
            name: '贯通率',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color:'rgba(80, 180, 50, 0.7)'},
            },
            data: rateData.map(alItem=>alItem*2)
          },

          {
            name: '已贯通',
            type: 'bar',
            barWidth: 8,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: 'rgba(217, 218, 92,0.7)'},
                      {offset: 1, color: 'rgba(217, 218, 92,0.3)'}
                    ]
                )
              }
            },
            data: barData
          },

          {
            name: '计划贯通',
            type: 'bar',
            // barGap: '-100%',
            barWidth: 8,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: 'rgba(228, 131, 93,0.5)'},
                      {offset: 1, color: 'rgba(228, 131, 93, 0.3)'}
                    ]
                )
              }
            },
            z: -12,

            data: lineData
          },
        ]
      },
      optionH2: {
        title: {
          text: '增量设备贯通情况-单位',
          x: 'center',
          y: 0,
          textStyle:{
            color:'#B4B4B4',
            fontSize:16,
            fontWeight:'normal',
          },

        },
        backgroundColor: 'white',
        tooltip: {
          trigger: 'axis',
          backgroundColor:'rgba(255,255,255,0.1)',
          axisPointer: {
            type: 'shadow',
            label: {
              show: true,
              backgroundColor: '#7B7DDC'
            }
          }
        },
        legend: {
          data: ['已贯通', '计划贯通','贯通率',],
          textStyle: {
            color: '#B4B4B4'
          },
          top:'7%',
        },
        grid:{
          x:'12%',
          width:'82%',
          y:'12%',
        },
        xAxis: {
          data: category,
          axisLine: {
            lineStyle: {
              color: '#B4B4B4'
            }
          },
          axisTick:{
            show:false,
          },
        },
        yAxis: [{

          splitLine: {show: false},
          axisLine: {
            lineStyle: {
              color: '#B4B4B4',
            }
          },

          axisLabel:{
            formatter:'{value} ',
          }
        },
          {

            splitLine: {show: false},
            axisLine: {
              lineStyle: {
                color: '#B4B4B4',
              }
            },
            axisLabel:{
              formatter:'{value} ',
            }
          }],

        series: [{
          name: '贯通率',
          type: 'line',
          smooth: true,
          showAllSymbol: true,
          symbol: 'emptyCircle',
          symbolSize: 4,
          yAxisIndex: 1,
          itemStyle: {
            normal: {
              color:'rgba(50, 150, 250, 0.5)'},
          },
          data: rateData
        },
          {
            name: '贯通率',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 4,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color:'rgba(80, 180, 50, 0.5)'},
            },
            data: rateData.map(alItem=>alItem*2)
          },

          {
            name: '已贯通',
            type: 'bar',
            barWidth: 2,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: 'rgba(217, 218, 92,0.7)'},
                      {offset: 1, color: 'rgba(217, 218, 92,0.3)'}
                    ]
                )
              }
            },
            data: barData
          },

          {
            name: '计划贯通',
            type: 'bar',
            // barGap: '-100%',
            barWidth: 2,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: 'rgba(228, 131, 93,0.5)'},
                      {offset: 1, color: 'rgba(228, 131, 93, 0.3)'}
                    ]
                )
              }
            },
            z: -12,

            data: lineData
          },
        ]
      },
      idP1:'testP',
      optionP1:{
        chart: {
          height: 266,
          type: 'pie',
          width:300,
          options3d: {
            enabled: true,
            alpha: 50,
          }
        },
        title: {
          text: ' ',
          margin: 0
        },
        subtitle: {
          text:'发生变更占投资完成比例'
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
            ['设计变更',   45.0],
            {
              name: '业主变更',
              y: 12.8,
              sliced: true,
              selected: true
            },
            ['存在争议',    8.5],
          ]
        }]
      },
      idP2:'testP2',
      optionP2:{
        chart: {
          height: 266,
          type: 'pie',
          width:300,
          options3d: {
            enabled: true,
            alpha: 50,
          }
        },
        title: {
          text: '',
          margin: 0
        },
        subtitle:{
          text:'各类变更所占比例',
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
          name: '',
          data: [
            ['设计变更',   45.0],
            {
              name: '业主变更',
              y: 12.8,
              sliced: true,
              selected: true
            },
            ['存在争议',    8.5],
          ]
        }]
      },
      dashOpt1:{
        backgroundColor: '#fff',
        series: [{
          name: "刻度",
          type: "gauge",
          center: ["50%", "80%"],
          radius: '75%',
          min: 0, //最小刻度
          max: 100, //最大刻度
          splitNumber: 10, //刻度数量
          startAngle: 180,
          endAngle: 0,
          axisLine: {
            show: true,
            lineStyle: {
              width: 1,
              color: [
                [1, "rgba(0,0,0,0)"]
              ],
            },
          }, //仪表盘轴线
          axisLabel: {
            show: true,
            color: "#4b695e",
            fontSize: 13,
            distance: -20,
            formatter: function(v) {
              return v;
            },
          }, //刻度标签。
          axisTick: {
            show: true,
            splitNumber: 5,
            lineStyle: {
              color: "#263b35",
              width: 1,
              // length:10
            },
            length: -10,
          }, //刻度样式
          splitLine: {
            show: true,
            length: -10,
            lineStyle: {
              color: "#4aca96",
              width: 2
            },
          }, //分隔线样式
        },
          {
            type: "gauge",
            radius: '65%',
            center: ["50%", "80%"],
            splitNumber: 0, //刻度数量
            startAngle: 180,
            endAngle: 0,
            axisLine: {
              show: true,
              lineStyle: {
                width: 15,
                color: [
                  [
                    1, new echarts.graphic.LinearGradient(
                      0, 0, 1, 0, [{
                        offset: 0,
                        color: '#ff8d72',
                      },
                        {
                          offset: 1,
                          color: '#4ccb96',
                        }
                      ]
                  )
                  ],
                ],
              },
            },
            //分隔线样式。
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            pointer: {
              show: true,
              length: "80%",
              width: "2%",
            },
            title: {
              show: true,
              offsetCenter: [0, "60%"], // x, y，单位px
              textStyle: {
                fontWeight: "bold",
                color: "#0ab7ff",
                fontSize: 15,
              },
            },
            //仪表盘详情，用于显示数据。
            detail: {
              show: true,
              offsetCenter: [0, "-30%"],
              color: "#ffffff",
              textStyle: {
                fontSize: 15,
                color: "#4aca96"
              },
            },
            data: [{
              value: 30,
            }, ],
          }
        ],
      },
      dashOpt2:{
        backgroundColor: 'transparent',
        series: [{
          name: "刻度",
          type: "gauge",
          center: ["50%", "87%"],
          radius: '110%',
          min: 0, //最小刻度
          max: 100, //最大刻度
          splitNumber: 10, //刻度数量
          startAngle: 180,
          endAngle: 0,
          axisLine: {
            show: true,
            lineStyle: {
              width: 1,
              color: [
                [1, "rgba(0,0,0,0)"]
              ],
            },
          }, //仪表盘轴线
          axisLabel: {
            show: true,
            color: "#4b695e",
            fontSize: 15,
            distance: -50,
            formatter: function(v) {
              return v;
            },
          }, //刻度标签。
          axisTick: {
            show: true,
            splitNumber: 5,
            lineStyle: {
              color: "#263b35",
              width: 1,
              // length:10
            },
            length: -20,
          }, //刻度样式
          splitLine: {
            show: true,
            length: -20,
            lineStyle: {
              color: "#4aca96",
              width: 2
            },
          }, //分隔线样式
        },
          {
            type: "gauge",
            radius: '100%',
            center: ["50%", "87%"],
            splitNumber: 0, //刻度数量
            startAngle: 180,
            endAngle: 0,
            axisLine: {
              show: true,
              lineStyle: {
                width: 50,
                color: [
                  [
                    1, new echarts.graphic.LinearGradient(
                      0, 0, 1, 0, [{
                        offset: 0,
                        color: '#ff8d72',
                      },
                        {
                          offset: 1,
                          color: '#62d9a8',
                        }
                      ]
                  )
                  ],
                ],
              },
            },
            //分隔线样式。
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            pointer: {
              show: true,
              length: "80%",
              width: "2%",
            },
            title: {
              show: true,
              offsetCenter: [0, "60%"], // x, y，单位px
              textStyle: {
                fontWeight: "bold",
                color: "#0ab7ff",
                fontSize: 20,
              },
            },
            //仪表盘详情，用于显示数据。
            detail: {
              show: true,
              offsetCenter: [0, "-30%"],
              color: "#ffffff",
              textStyle: {
                fontSize: 40,
                color: "#4aca96"
              },
            },
            data: [{
              value: 30,
            }, ],
          }
        ],
      },
      activeName:'总体进度曲线',
      menuList:[
        {
          name:'总体进度曲线'
        },
        {
          name:'设计进度情况'
        },
        {
          name:'采购进度情况'
        },
        {
          name:'施工进度情况'
        },
        {
          name:'生产准备情况'
        },
        {
          name:'进度百分比明细'
        }
      ],   //导航菜单
    }
  },
  methods: {
    handleClick(tab,event){

      console.log(tab,event)
    },
    setHistoData(){
      var category = ['市区','万州','江北','南岸','北碚','綦南','长寿','永川','璧山','江津','城口','大足','垫江','丰都','奉节','合川','江津区','开州','南川','彭水','黔江','石柱','铜梁','潼南','巫山','巫溪','武隆','秀山','酉阳','云阳','忠县','川东','检修'];
      var dottedBase = [];
      var lineData = [18092,20728,24045,28348,32808
        ,36097,39867,44715,48444,50415
        ,56061,62677,59521,67560,18092,20728,24045,28348,32808
        ,36097,39867,44715,48444,50415,36097,39867,44715,48444,50415
        ,50061,32677,49521,32808];
      var barData = [4600,5000,5500,6500,7500
        ,8500,9900,12500,14000,21500
        ,23200,24450,25250,33300,4600,5000,5500,6500,7500
        ,8500,9900,22500,14000,21500,8500,9900,12500,14000,21500
        ,23200,24450,25250,7500];
      var rateData = [];
      32808
      for (var i = 0; i < 33; i++) {
        // var date = i+2001;
        // category.push(date)
        var rate=barData[i]/lineData[i];
        rateData[i] = rate.toFixed(2);
      }
    }
  },
  mounted() {
    this.setHistoData()

    // let outPut = []
    // for(let i = 10 ; i<58;i++){
    //   outPut.push(Math.log2((i*10000)))
    // }
    // console.log(JSON.stringify(outPut))
  },
  watch: {
    activeName:function (){
        this.optionH1.title.text=this.activeName
        this.optionH2.title.text=this.activeName
    }

  }
}
</script>

<style scoped>
#myMain{
  color: #727272;
  width: 100%;
}
.midContainer{
  background: white;
  box-shadow:4px 10px 8px -5px #e1e1e1;
  border-bottom-right-radius:15px ;
}
.smallTitle{
  padding-left: 20px !important;
  font-weight: bold;
  color: white;
  line-height: 1.8;
  background: url('../assets/xz.png') no-repeat;
  background-color: white;
  /*background: linear-gradient(to right, #99ceff, #2991ff);*/
  text-shadow:0px 2px 2px #484848;
}

.titleButton{
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
.moreButton{
  padding: 0 3px 0 3px;
  font-size: 13px;
  float: right;
  color: #63A6D1;
  cursor: pointer;
  text-shadow: none;
  margin-top: 3px;
  border-radius: 3px;
}
.commonFlexStart{
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
}
.paddingAllTen{
  padding:10px 10px 10px 10px
}
.marginTopTen{
  margin-top: 10px;
}
</style>
