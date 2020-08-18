<template>
  <div id="myMain">
    <el-row>
      <el-col class="midContainer" :span="8">
        <el-col>
          <el-col class="smallTitle">
            项目基本信息
          </el-col>
          <el-col>
            line1 <br>
            line2 <br>
            line3
            <el-divider></el-divider>
            <el-col :span="12">
              line1<br>
              line2<br>
              line3<br>
            </el-col>
            <el-col :span="12">
              line1<br>
              line2<br>
              line3<br>
            </el-col>
          </el-col>
        </el-col>
        我是左边
      </el-col>
      <el-col class="midContainer" :span="16">
        <el-col :span="12">
          <el-col>
            <el-col class="smallTitle">
              项目要闻
            </el-col>
            <el-col v-for="(item,index) in 4" :span="12" :key="index">
              item{{index}}
            </el-col>
          </el-col>
        </el-col>
        <el-col :span="12">
          <el-col>
            <el-col class="smallTitle">
              问题与重点工作
            </el-col>
            <el-col v-for="(item,index) in 4" :span="12" :key="index">
              item{{index}}
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
          <el-col :span="24">
                <histogram :id="idH1" :option="optionH1"></histogram>
<!--                <Pie :id="idP1" :option="optionP1"></Pie>-->
          </el-col>
        </el-col>
        我是右边
      </el-col>
    </el-row>


  </div>
</template>

<script>
import store from "@/store";
import Highcharts from 'highcharts'
import Pie from './Widget/dPie'
import histogram from './Widget/dHistogram'

export default {
  name: "mytest",
  components: { histogram },
  store:store,
  computed: {},
  data() {
    return {
      idH1: 'testH',
      optionH1: {
        chart: {
          type: 'column',
          options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            viewDistance: 25,
            depth: 40
          },
          marginTop: 80,
          marginRight: 40
        },
        title: {
          text: '以性别划分的水果消费总量'
        },
        xAxis: {
          categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
        },
        yAxis: {
          allowDecimals: false,
          min: 0,
          title: {
            text: '水果数量'
          }
        },
        tooltip: {
          headerFormat: '<b>{point.key}</b><br>',
          pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
        },
        plotOptions: {
          column: {
            stacking: 'normal',
            depth: 40
          }
        },
        series: [{
          name: '小张',
          data: [5, 3, 4, 7, 2],
          stack: 'male'
        }, {
          name: '小王',
          data: [3, 4, 4, 2, 5],
          stack: 'male'
        }, {
          name: '小彭',
          data: [2, 5, 6, 2, 1],
          stack: 'female'
        }, {
          name: '小潘',
          data: [3, 0, 4, 4, 3],
          stack: 'female'
        }]
      },
      idP1:'testP',
      optionP1:{
        chart: {
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
  width: 100%;
}
.midContainer{
  border: 1px solid #adb2b8;
  border-bottom-right-radius:15px ;
}
.smallTitle{
  font-weight: bold;
  color: white;
  background: linear-gradient(to right, #99ceff, #2991ff);
  text-shadow:0px 2px 2px #000000;
}
.sss {
  color: aliceblue;
}
</style>
