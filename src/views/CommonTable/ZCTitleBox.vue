<template>
  <el-row class="ZCTitleBox-wrap">
    <el-col class="smallTitle" :style="backgroundProp">
      <el-col class="vef-left-flex-container">
        <slot></slot>
        <div style="margin-left: 5px">{{ title }}</div>
        &nbsp;
        <el-popover
          v-if="showInfo"
          placement="right-start"
          :title="info.a"
          width="auto"
          trigger="hover"
          :content="info.b ? info.b : ''">
          <div style="cursor: pointer;display: inline;color: white" slot="reference"
               onclick="event.cancelBubble = true">
            <i class="el-icon-info"></i>
          </div>
        </el-popover>
      </el-col>
    </el-col>
  </el-row>

</template>
<script>
  export default {
    name: 'ZCTitleBox',
    components: {},
    props: {
      showInfo: {
        type: Boolean,
        default: true
      },
      info: {
        type: Object,
        default: () => {
          return {
            a: '',
            b: ''
          }
        }
      },
      backgroundProp: {
        type: String,
        default: ''
      },
      title: {
        type: String
      }
    },
    data() {
      return {}
    },
    methods: {},
    mounted() {
    },
    watch: {}
  }
</script>
<style lang="less">
  .ZCTitleBox-wrap {
    background: transparent;

    .smallTitle {
      font-size: 18px;
      padding-left: 10px !important;
      font-weight: bold;
      color: white;
      height: 36px;
      line-height: 36px;
      background: -webkit-linear-gradient(left, rgb(76, 135, 253) 0%, rgb(73, 190, 254) 48%, rgb(70, 250, 255) 100%);
      background: -o-linear-gradient(left, rgb(76, 135, 253) 0%, rgb(73, 190, 254) 48%, rgb(70, 250, 255) 100%);
      background: -ms-linear-gradient(left, rgb(76, 135, 253) 0%, rgb(73, 190, 254) 48%, rgb(70, 250, 255) 100%);
      background: -moz-linear-gradient(left, rgb(76, 135, 253) 0%, rgb(73, 190, 254) 48%, rgb(70, 250, 255) 100%);
      background: linear-gradient(to right, rgb(76, 135, 253) 0%, rgb(73, 190, 254) 48%, rgb(70, 250, 255) 100%);
      background-size: auto 100%;
    }
  }
</style>
