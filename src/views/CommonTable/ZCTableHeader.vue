<template>
  <el-table-column :width="data.columnWidth ? data.columnWidth : ''" :align="data.colAlign ? data.colAlign : 'center'">
    <template slot="header" slot-scope="scope">
      <div class="headerBox" :style="{color: data.titleColor, fontSize: '16px'}">{{ data.name }} <span :style="{color: data.titleUnitColor}">{{data.unit}}</span></div>
    </template>
    <template v-if="!data.children" slot-scope="scope">
      <!--      <el-tooltip v-if="data.slotType!=='text'" placement="top">-->
      <!--        <div slot="content"-->
      <!--             style="font-size: 16px;max-width:500px;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-box-orient: vertical;">-->
      <!--          {{ scope.row[data.value] }}-->
      <!--        </div>-->
      <div
        v-if="data.negative && data.negative === true"
        style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 1;">
        <p v-if="parseFloat(scope.row[data.value]) > 0" :style="{color: '#00d539',lineHeight:columnHeight ? columnHeight : ''}">+{{ scope.row[data.value] }}</p>
        <p v-if="parseFloat(scope.row[data.value]) === 0" :style="{color: data.color,lineHeight:columnHeight ? columnHeight : ''}">{{ Math.abs(scope.row[data.value]) }}</p>
        <p v-if="parseFloat(scope.row[data.value]) < 0" :style="{color: '#ff0000',lineHeight:columnHeight ? columnHeight : ''}">{{ scope.row[data.value] }}</p>
      </div>
      <div
        v-else
        style="font-size: 16px;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 1;">
        <p :style="{color: data.color,lineHeight:columnHeight}">{{ scope.row[data.value] ? scope.row[data.value] : '--' }}</p>
      </div>
      <!--      </el-tooltip>-->
      <slot name="tableSlot" v-if="data.slotType==='text'"></slot>
    </template>
    <template v-if="data.children && data.children.length > 0">
      <table-header v-for="(item, index) in data.children" :data="item" :key="`${index}id`"/>
    </template>
  </el-table-column>
</template>

<script>
  export default {
    name: 'ZCTableHeader',
    components: {},
    props: {
      columnHeight: {
        type: String,
        default: ''
      },
      data: []
    },
    computed: {},
    data() {
      return {
        id: this._.uniqueId('tableHeader')
      }
    },
    methods: {},
    created() {
    },
    mounted() {
    }
  }
</script>

<style lang="less">
  .tableHeader-wrap {
  }
</style>
