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
        chart: {
          renderTo: 'container',
          type: 'column',
          marginRight: 30,
          height: 500,
          spacing:[10,10,10,10],
          options3d: {
            enabled: true,
            alpha: 10,
            beta: 8,
            depth:100,
            viewDistance: 25
          },
        },
        colors: ['#058DC7', '#50B432','#DDDF00', '#ED561B',
          '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
        title: {
          text: '总体进度曲线',
          style:{
            color:'#727272'
          },
          margin:-10
        },
        yAxis: {
          title: {
            text: null
          },
          labels: {
            format: '{value} m'
          }
        },
        tooltip: {
          // head + 每个 point + footer 拼接成完整的 table
          headerFormat: '',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} m</b></td></tr>',
          footerFormat: '</table>',
          // shared: true,
          useHTML: true
        },
        subtitle: {
          text: ''
        },
        plotOptions: {
          column: {
            depth: 30,
            opacity:0.8,
            // stacking: 'normal',
            // grouping: false,
            groupZPadding: 1
          },
        },
        xAxis: [{
          // minorGridLineWidth: 1,
          // minorTickInterval: 'auto',
          // minorTickWidth: 5,
          // minorTickLength:100,
          crosshair: true,
          categories: [
            '1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12', '1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12','1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12', '1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12'
          ],
          // gridLineWidth: 0,
          // minTickInterval: 0,
          lineWidth: 1,
          tickWidth: 1,
          tickLength: 30,
          labels: {
            textOverflow: 'none',
            step: 1,
            align: 'center',
            x: 0,
            y: 25,
          },
        },
        ],
        series: [{
          name: '图示',
          type: 'spline',
          data: [100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350,360,370,380,390,400,410,420,430,440,450,460,470,480,490,500,510,520,530,540,550,560,570],
          tooltip: {
            valueSuffix: ' °C'
          },
          stack: 0
        },
          {
            name: '图示',
            type: 'spline',
            data: [110,131,154,179,206,235,266,299,334,371,410,451,494,539,586,635,686,739,794,851,910,971,1034,1099,1166,1235,1306,1379,1454,1531,1610,1691,1774,1859,1946,2035,2126,2219,2314,2411,2510,2611,2714,2819,2926,3035,3146,3259],
            tooltip: {
              valueSuffix: ' °C'
            },
            stack: 0
          },{
            name:'图示',
            type: 'column',
            // xAxis: 1,//第二个X轴
            data: [0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400,441,484,529,576,625,676,729,784,841,900,961,1024,1089,1156,1225,1296,1369,1444,1521,1600,1681,1764,1849,1936,2025,2116,2209],
            stack: 1
          },{
            name:'图示',
            type: 'column',
            data: [100,121,144,169,196,225,256,289,324,361,400,441,484,529,576,625,676,729,784,841,900,961,1024,1089,1156,1225,1296,1369,1444,1521,1600,1681,1764,1849,1936,2025,2116,2209],
            stack: 1
          },]
      },
      optionH2: {
        chart: {
          renderTo: 'container',
          type: 'column',
          marginRight: 30,
          height: 166,
          options3d: {
            enabled: true,
            alpha: 4,
            beta: 8,
            depth:50,
            viewDistance: 25
          },
          spacing:[10,10,10,10]
        },colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00',
          '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
        title: {
          text: '总体进度曲线',
          style:{
            fontSize:'13px',
            color:'#727272'
          },
          margin:10
        },
        plotOptions: {
          column: {
            depth: 30,
            opacity:0.8,
            stacking: 'normal',
            grouping: false,
            groupZPadding: 1
          },
        },
        tooltip: {
          // head + 每个 point + footer 拼接成完整的 table
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} m</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        yAxis: {
          title: {
            text: null
          },
          labels: {
            format: '{value} m'
          }
        },
        xAxis: [{
          categories: [
            '1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12', '1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12'
          ],
          gridLineWidth: 0,
          tickWidth: 2,
          tickLength: 10,
          labels: {
            align: 'left',
            x: 0,
            y: 25,
          },
        },
          {
          categories: [
            '2015年', '2015年', '2015年', '2015年', '2015年', '2015年', '2015年', '2015年', '2015年', '2015年', '2015年', '2015年', '2016年','2016年','2016年','2016年','2016年','2016年','2016年','2016年','2016年','2016年','2016年','2016年',
          ],
          gridLineWidth: 0,
          minTickInterval: 12,
          labels: {whiteSpace: 'nowrap',
            textOverflow: 'none',
            step: 1,
            x: -80,
            y: 0,
          },
        },
        ],
        series: [{
          name: '图示',
          type: 'spline',
          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
          tooltip: {
            valueSuffix: ' °C'
          },
          stack: 0
        },
          {
            name: '图示',
            type: 'spline',
            data:  [8.0, 116.9, 449.5, 514.5, 218.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,8.0, 116.9, 449.5, 514.5, 218.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            tooltip: {
              valueSuffix: ' °C'
            },
            stack: 0
          },{
            name:'图示',
            type: 'column',
            data: [1.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,1.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            stack: 1
          },{
            name:'图示',
            type: 'column',
            data: [1.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,1.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            stack: 1
          },]
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
  },
  mounted() {
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
