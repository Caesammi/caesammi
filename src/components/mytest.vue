<template>
  <div id="myMain">
    <Pie :id="idP1" :option="optionP1"></Pie>
    <histogram :id="idH1" :option="optionH1"></histogram>
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
