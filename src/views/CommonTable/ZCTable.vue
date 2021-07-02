<template>
  <el-col v-loading="loading" class="ZCTable-wrap" element-loading-background="white">
    <el-table
      :height="height"
      :border="false"
      :data="tableData"
      :show-header="showHeader"
      :header-cell-style="getHeaderClass"
      :row-class-name="tableRowClassName"
    >
      <!--            :row-class-name="tableRowClassName"-->
      <el-table-column v-if="orderSwitch" align="center" width="80px">
        <template slot="header" slot-scope="scope">
          <div align="center" class="headerBox" style="color: white">序号</div>
        </template>
        <template slot-scope="scope">
          <div slot="content"
               style="color: #939393;max-width:500px;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-box-orient: vertical;">
            {{ scope.$index + 1 }}
          </div>
        </template>
      </el-table-column>
      <table-header :column-height="columnHeight" v-for="(item, index) in tableColumn" :data="item" :key="index"/>
    </el-table>
  </el-col>

</template>
<script>
  import tableHeader from './ZCTableHeader'

  export default {
    name: 'ZCTable',
    components: { tableHeader },
    props: {
      rowClassName: {
        type: String,
        default: ''
      },
      headerStyle: {
        type: String,
        default: ''
      },
      orderSwitch: {
        type: Boolean,
        default: false
      },
      columnHeight: {
        type: String,
        default: ''
      },
      showHeader: {
        type: Boolean,
        default: true
      },
      height: {
        type: String,
        default: 'calc(100% - 45px)'
      },
      tableColumn: {
        type: Array,
        default: () => [
          { name: 'test1', value: 'name1', color: '#0DF5F9', negative: false },
          { name: 'test2', value: 'name2', color: 'yellow', negative: false },
          { name: 'test3', value: 'name3', color: 'yellow', negative: false }
        ]
      },
      tableData: {
        type: Array,
        default: () => [
          { name1: '111', name2: '222', name3: '333' },
          { name1: '111', name2: '222', name3: '333' },
          { name1: '111', name2: '222', name3: '333' },
          { name1: '111', name2: '222', name3: '333' },
          { name1: '111', name2: '222', name3: '333' },
          { name1: '111', name2: '222', name3: '333' },
          { name1: '111', name2: '222', name3: '333' },
          { name1: '111', name2: '222', name3: '333' },
          { name1: '111', name2: '222', name3: '333' },
          { name1: '111', name2: '222', name3: '333' },
          { name1: '111', name2: '222', name3: '333' },
          { name1: '111', name2: '222', name3: '333' },
          { name1: '111', name2: '222', name3: '333' },
          { name1: '111', name2: '222', name3: '333' },
          { name1: '111', name2: '222', name3: '333' }
        ]
      }
    },
    data() {
      return {
        loading: false
      }
    },
    methods: {
      tableRowClassName({ row, rowIndex }) {
        if (rowIndex % 2 === 1) {
          return this.rowClassName
        } else {
          return ''
        }
      },
      getHeaderClass() {
        return this.headerStyle
      }
      // tableRowClassName({ row, rowIndex }) {
      //   if (this.$store.state.shengLi.theme === 'Light') {
      //     if (rowIndex % 2 === 1) {
      //       return 'tableHighLight'
      //     } else {
      //       return ''
      //     }
      //   } else {
      //     if (rowIndex % 2 === 1) {
      //       return 'tableHighDark'
      //     } else {
      //       return ''
      //     }
      //   }
      // }
    },
    mounted() {
    },
    watch: {
      tableData: {
        handler(val) {
          this.loading = false
        },
        deep: true
      }
    }
  }
</script>
<style lang="less">
  .ZCTable-wrap {
    .blue .el-table th {
      background: white;
    }

    .el-table__row > td {
      /* 去除表格线 */
      border: none;
    }
    padding: 0;
    height: 100%;

    .headerBox {
      line-height: 1.5;
      padding-top: 5px;
    }
    .tableHighBlue {
      background: rgb(244, 250, 255);
    }
  }
</style>
