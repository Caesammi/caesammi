<template>
  <div id="myMain">
    <el-row>
      <el-col class="midContainer" :span="8">
        <el-col>
          <el-col class="smallTitle">
            <label style="font-size: 12px"> &nbsp >></label>  项目基本信息
          </el-col>
          <el-col class="paddingAllTen">
            测试测试测试测试 <br>
            测试测试测试测试 <br>
            测试测试测试测试
            <el-divider></el-divider>
            <el-col :span="12">
              测试测试测试测试<br>
              测试测试测试测试<br>
              测试测试测试测试<br>
            </el-col>
            <el-col :span="12">
              测试测试测试测试<br>
              测试测试测试测试<br>
              测试测试测试测试<br>
            </el-col>
          </el-col>
        </el-col>
        <el-col>
          <el-col class="smallTitle">
            <label style="font-size: 12px"> &nbsp >></label>  HES与质量
          </el-col>
          <el-col>
            <el-col :span="8">
              <dashBoard id="dash1" :option="dashOpt1"></dashBoard>
            </el-col>
            <el-col :span="8">
              <dashBoard id="dash2" :option="dashOpt1"></dashBoard>
            </el-col>
            <el-col :span="8">
              <dashBoard id="dash3" :option="dashOpt1"></dashBoard>
            </el-col>
          </el-col>
        </el-col>
        <el-col>
          <el-col class="smallTitle">
            <label style="font-size: 12px"> &nbsp >></label>  里程碑完成情况  </el-col>
          <el-col>

            <el-col>
              <dashBoard id="dash4" :option="dashOpt2"></dashBoard>
            </el-col>
            <el-col class="paddingAllTen">
              <el-progress :stroke-width="13" :percentage="98" color="#FAECD8"></el-progress>
              <el-progress style="margin-top: 10px;" :stroke-width="13" :percentage="50" color="#409EFF"></el-progress>
            </el-col>
            <el-col align="center" class="paddingAllTen">
              <el-button-group>
                <el-button size="mini" type="ghost">图示</el-button>
                <el-button size="mini" type="ghost">图示</el-button>
                <el-button size="mini" type="ghost">图示</el-button>
                <el-button size="mini" type="ghost">图示</el-button>
              </el-button-group>
            </el-col>
          </el-col>
        </el-col>

      </el-col>
      <el-col :span="16">
        <el-col :span="12">
          <el-col>
            <el-col class="smallTitle">
              <label style="font-size: 12px"> &nbsp >></label>  项目要闻
            </el-col>
            <el-col class="paddingAllTen dottedUnderLine" v-for="(item,index) in 4" :span="12" :key="index">
              <el-tooltip placement="top">
                <div
                    style="display: -webkit-box;-webkit-box-orient: vertical;max-width: 300px"
                    slot="content">测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试{{item}}
                </div>

                <div  style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;cursor: pointer">
                  ■ dd测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试{{index}}
                </div>

              </el-tooltip>

            </el-col>
          </el-col>
        </el-col>
        <el-col :span="12">
          <el-col>
            <el-col class="smallTitle">
              <label style="font-size: 12px"> &nbsp >></label>  问题与重点工作
            </el-col>
            <el-col class="paddingAllTen dottedUnderLine" v-for="(item,index) in 4" :span="12" :key="index">
              <el-tooltip placement="top">
                <div
                    style="display: -webkit-box;-webkit-box-orient: vertical;max-width: 300px"
                    slot="content">测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试{{item}}
                </div>

                <div  style="text-overflow: ellipsis;overflow: hidden;white-space: nowrap;cursor: pointer">
                  ■ dd测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试{{index}}
                </div>

              </el-tooltip>
            </el-col>
          </el-col>
        </el-col>
        <el-col :span="24">
          <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
             >
<!--            background-color="#545c64"-->
<!--            text-color="#fff"-->
<!--            active-text-color="#ffd04b"-->
            <el-menu-item v-for="(item, index) in menuList" :index="item.name" :key="index">
              {{item.name}}
            </el-menu-item>
          </el-menu>
          <el-col :span="16">
                <histogram :id="idH1" :option="optionH1" height="500px"></histogram>
          </el-col>
          <el-col :span="8">
            <el-col v-for="(item,index) in idH" :key="index">
              <histogram :id="item.id" :option="optionH2" height="166px"></histogram>
            </el-col>
          </el-col>
          <el-col class="midContainer" :span="12">
            <el-col>
              <el-col class="smallTitle">
                <label style="font-size: 12px"> &nbsp >></label>  投资控制
              </el-col>
              <el-col style="margin-top: 10px;" v-for="(item,index) in 3" :span="8" :key="index+'1'">
                测试测试测试测试{{index}}
              </el-col>
             <el-col class="paddingAllTen">
               <el-progress :stroke-width="13" :percentage="98" color="#FAECD8"></el-progress>
               <el-progress style="margin-top: 10px;" :stroke-width="13" :percentage="50" color="#409EFF"></el-progress>
               <el-col v-for="(item,index) in 3" :span="8" :key="index">
                 测试测试测试测试{{index}}
               </el-col>
               <el-progress :stroke-width="13" :percentage="98" color="#FAECD8"></el-progress>
               <el-progress style="margin-top: 10px;" :stroke-width="13" :percentage="50" color="#409EFF"></el-progress>
             </el-col>

            </el-col>
          </el-col>
          <el-col class="midContainer" :span="12">
            <el-col>
              <el-col class="smallTitle commonFlexStart">
                变更管理 <div style="right: 80px" class="titleButton">数据</div><div style="right: 50px" class="titleButton">饼图</div><div style="right: 20px" class="titleButton">详情</div>
              </el-col>
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
    </el-row>


  </div>
</template>

<script>
import store from "@/store";
import Highcharts from 'highcharts'
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
          text: '3D柱状图'
        },
        subtitle: {
          text: 'test'
        },
        plotOptions: {
          column: {
            depth: 30,
            opacity:0.8,
            stacking: 'normal',
            grouping: false,
            groupZPadding: 1
          },
        },	xAxis: [{
          categories: [
            '1', '2', '3', '4', '5','1', '2', '3', '4', '5','1', '2', '3', '4', '5','1', '2', '3', '4', '5','1', '2', '3', '4', '5','1', '2', '3', '4', '5'
          ],
          gridLineWidth: 0,
          tickWidth: 2,
          tickLength: 10,
          labels: {
            align: 'left',
            x: 0,
            y: 25,
          },
        },{
          categories: [
            '2015年', '2', '3', '4', '5','2015年', '2', '3', '4', '5','2015年', '2', '3', '4', '5','2015年', '2', '3', '4', '5','1', '2', '3', '4', '5','1', '2', '3', '4', '5'
          ],
          gridLineWidth: 0,
          minTickInterval: 5,
          labels: {whiteSpace: 'nowrap',
            textOverflow: 'none',
            step: 1,
            x: 0,
            y: 0,
          },
        },
        ],
        series: [{
          name: '温度',
          type: 'spline',
          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
          tooltip: {
            valueSuffix: ' °C'
          },
          stack: 0
        },
          {
            name: '温度',
            type: 'spline',
            data: [8.0, 116.9, 449.5, 514.5, 218.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,8.0, 116.9, 449.5, 514.5, 218.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,8.0, 116.9, 449.5, 514.5, 218.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            tooltip: {
              valueSuffix: ' °C'
            },
            stack: 0
          },{
            name:'图例1',
            type: 'column',
            xAxis: 1,//第二个X轴
            data: [1.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,1.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,1.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            stack: 1
          },{
            name:'图例1',
            type: 'column',
            data: [1.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
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
          text: ''
        },
        plotOptions: {
          column: {
            depth: 30,
            opacity:0.8,
            stacking: 'normal',
            grouping: false,
            groupZPadding: 1
          },
        },	xAxis: [{
          categories: [
            '1', '2', '3', '4', '5','1', '2', '3', '4', '5','1', '2', '3', '4', '5','1', '2', '3', '4', '5','1', '2', '3', '4', '5','1', '2', '3', '4', '5'
          ],
          gridLineWidth: 0,
          tickWidth: 2,
          tickLength: 10,
          labels: {
            align: 'left',
            x: 0,
            y: 25,
          },
        },{
          categories: [
            '2015年', '2', '3', '4', '5','2015年', '2', '3', '4', '5','2015年', '2', '3', '4', '5','2015年', '2', '3', '4', '5','1', '2', '3', '4', '5','1', '2', '3', '4', '5'
          ],
          gridLineWidth: 0,
          minTickInterval: 5,
          labels: {whiteSpace: 'nowrap',
            textOverflow: 'none',
            step: 1,
            x: 0,
            y: 0,
          },
        },
        ],
        series: [{
          name: '温度',
          type: 'spline',
          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
          tooltip: {
            valueSuffix: ' °C'
          },
          stack: 0
        },
          {
            name: '温度',
            type: 'spline',
            data: [8.0, 116.9, 449.5, 514.5, 218.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,8.0, 116.9, 449.5, 514.5, 218.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,8.0, 116.9, 449.5, 514.5, 218.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            tooltip: {
              valueSuffix: ' °C'
            },
            stack: 0
          },{
            name:'图例1',
            type: 'column',
            xAxis: 1,//第二个X轴
            data: [1.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,1.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,1.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            stack: 1
          },{
            name:'图例1',
            type: 'column',
            data: [1.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            stack: 1
          },]
      },
      idP1:'testP',
      optionP1:{
        chart: {
          height: 166,
          type: 'pie',
          options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
          }
        },
        title: {
          text: '2014年某网站不同浏览器访问量占比'
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
              enabled: true,
              format: '{point.name}'
            }
          }
        },
        series: [{
          type: 'pie',
          name: '浏览器占比',
          data: [
            ['Firefox',   45.0],
            ['IE',       26.8],
            {
              name: 'Chrome',
              y: 12.8,
              sliced: true,
              selected: true
            },
            ['Safari',    8.5],
            ['Opera',     6.2],
            ['Others',   0.7]
          ]
        }]
      },
      idP2:'testP2',
      optionP2:{
        chart: {
          height: 166,
          type: 'pie',
          options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
          }
        },
        title: {
          text: '2014年某网站不同浏览器访问量占比'
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
              enabled: true,
              format: '{point.name}'
            }
          }
        },
        series: [{
          type: 'pie',
          name: '浏览器占比',
          data: [
            ['Firefox',   45.0],
            ['IE',       26.8],
            {
              name: 'Chrome',
              y: 12.8,
              sliced: true,
              selected: true
            },
            ['Safari',    8.5],
            ['Opera',     6.2],
            ['Others',   0.7]
          ]
        }]
      },
      dashOpt1:{
        yAxis: {
          min: 0,
          max: 200,
          title: {
            text: '速度'
          }
        },
        credits: {
          enabled: false
        },
        series: [{
          name: '速度',
          data: [80],
          dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                '<span style="font-size:12px;color:silver">km/h</span></div>'
          },
          tooltip: {
            valueSuffix: ' km/h'
          }
        }]
      },
      dashOpt2:{
        chart: {
          height:250
        },
        pane: {
          size:'140%'
        },
        yAxis: {
          min: 0,
          max: 200,
          title: {
            text: '速度'
          }
        },
        credits: {
          enabled: false
        },
        series: [{
          name: '速度',
          data: [80],
          dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                '<span style="font-size:12px;color:silver">km/h</span></div>'
          },
          tooltip: {
            valueSuffix: ' km/h'
          }
        }]
      },
      activeIndex:'总体进度曲线',
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
    handleSelect(key,keyPath){
      console.log(key,keyPath)
    },
  },
  mounted() {

  },
  watch: {
    myArr: {
    }

  }
}
</script>

<style scoped>
#myMain{
  color: #909399;
  width: 100%;
}
.midContainer{
  border: 1px solid #adb2b8;
  border-bottom-right-radius:15px ;
}
.smallTitle{
  padding-left: 10px;
  font-weight: bold;
  color: white;
  line-height: 1.8;
  background: linear-gradient(to right, #99ceff, #2991ff);
  text-shadow:0px 2px 2px #000000;
}

.titleButton{

  position: absolute;
  font-size: 13px;
  border: 1px solid #b2ceff;
  float: right;
  cursor: pointer;
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
.dottedUnderLine{
  text-decoration: underline;
  text-decoration-style: dotted;
}
</style>
