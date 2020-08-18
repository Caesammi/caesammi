<template>
  <div class="container">
    <div class="container" :id="id" :option="option">
      <el-col v-for="(item,index) in option.info" :span="12" :key="index">
        <el-col>
          <el-tooltip placement="top">
            <div
                style="display: -webkit-box;-webkit-box-orient: vertical;max-width: 300px"
                slot="content">{{item}}
            </div>

            <div style="text-overflow: ellipsis;
                              overflow: hidden;
                              word-space:nowrap;
                              cursor:pointer;">
              <el-link type="info"> {{'■'+item}} </el-link>
            </div>

          </el-tooltip>
        </el-col>
      </el-col>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import HighCharts from 'highcharts'

export default {
  name: "baseCard",
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
  },
  watch: {
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background: yellow;
  border-bottom-right-radius: 15px;
}
</style>