<template>
  <div id="myMain">
    <Pie :id="idP1" :option="optionP1"></Pie>
    <div style="width: 1000px">
      <histogram :id="idH1" :option="optionH1"></histogram>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import Highcharts from 'highcharts'
import Pie from './Widget/dPie'
import histogram from './Widget/dHistogram'

export default {
  name: "mytest",
  components: { histogram, Pie },
  store:store,
  computed: {},
  data() {
    return {
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
            depth: 50,
            viewDistance: 25
          },
          spacing:[10,10,10,10]
        },colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00',
          '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
        title: {
          text: '交互性3D柱状图'
        },
        subtitle: {
          text: '可通过滑动下方滑块测试'
        },
        plotOptions: {
          column: {
            depth: 30,
            opacity:0.8,
            stacking: 'normal',
            grouping: false,groupZPadding: 1
          },
        },	xAxis: [{
          categories: [
            '1', '2', '3', '4', '5','1', '2', '3', '4', '5','1', '2', '3', '4', '5','1', '2', '3', '4', '5','1', '2', '3', '4', '5','1', '2', '3', '4', '5'
          ],
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
      }
    }
  },
  methods: {
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
.sss {
  color: aliceblue;
}
</style>
