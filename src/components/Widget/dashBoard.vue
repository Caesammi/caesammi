<template>
  <div class="container">
    <div :id="id" :option="option"></div>
  </div>
</template>

<script>
import store from "@/store";
import HighCharts from 'highcharts/highstock';
// 这个一定要引入 不然报错
import HighchartsMore from 'highcharts/highcharts-more';
import SolidGauge from 'highcharts/modules/solid-gauge.js'
HighchartsMore(HighCharts)
SolidGauge(HighCharts);
export default {
  name: "dashBoard",
  store:store,
  props: {
    id: {
      type: String
    },
    //option 是图表的配置数据
    option: {
      type: Object
    }
  },
  // components: { Sticky },
  computed: {},
  data() {
    return {
      chartOptions: {
      }
    }
  },
  methods: {
  },
  mounted() {
    HighCharts.setOptions({
      chart: {
        type: 'solidgauge',
        height:200
      },
      title: null,
      pane: {
        center: ['50%', '85%'],
        size: '100%',
        startAngle: -90,
        endAngle: 90,
        background: {
          backgroundColor: (HighCharts.theme && HighCharts.theme.background2) || '#EEE',
          innerRadius: '60%',
          outerRadius: '100%',
          shape: 'arc'
        }
      },
      tooltip: {
        enabled: false
      },
      yAxis: {
        stops: [
          [0.1, '#55BF3B'], // green
          [0.5, '#DDDF0D'], // yellow
          [0.9, '#DF5353'] // red
        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickPixelInterval: 400,
        tickWidth: 0,
        title: {
          y: -70
        },
        labels: {
          y: 16
        }
      },
      plotOptions: {
        solidgauge: {
          dataLabels: {
            y: 5,
            borderWidth: 0,
            useHTML: true
          }
        }
      }
    });
    HighCharts.chart(this.id, this.option)
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
