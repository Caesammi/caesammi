<template>
  <el-row class="home">
    <div style="font-size: 30px">
      <div>BinarySearch</div>
      <el-row>
        <el-col :span="6">
          <el-form>
            <el-form-item label-width="100px" label="最小值">
              <el-input v-model="myLo"></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="最大值">
              <el-input v-model="myHi"></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="数组长度">
              <el-input v-model.number="testDataL"/>
            </el-form-item>
            <el-form-item label="数据制造" label-width="100px">
              <el-button @click="createArr">造</el-button>
            </el-form-item>
            <el-form-item label="Origin Data" label-width="100px">
              <el-input v-model="originData.toString()" type="textarea"
                        :autosize="{ minRows: 4, maxRows: 8}"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="键值">
              <el-input :disabled="true" v-model.number="myKey"></el-input>
            </el-form-item>
            <el-form-item label-width="100px">
              <el-button @click="createKey">生成随机键值</el-button>
            </el-form-item>
            <el-form-item label-width="100px">
              <el-button type="primary" @click="main(originData)">二分查找</el-button>
              <el-button type="ghost" @click="normalSearch(originData)">普通搜索</el-button>
            </el-form-item>
            <el-form-item label="Result" label-width="100px">
              二分查找结果
              <el-input v-model="result"></el-input>
              轮询结果
              <el-input v-model="result2"></el-input>
            </el-form-item>
          </el-form>
          <h5> 计算时间参考：console</h5>
        </el-col>
        <el-col :offset="1" :span="8">
          <el-image
              style="width: 500px; height: 300px"
              :src="require('../assets/Algorithms/BinarySearch.png')"
              fit="contain"></el-image>
        </el-col>
      </el-row>
    </div>
  </el-row>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import * as tools from '../tools/zcTools'
import store from "@/store";

export default {
  name: 'BinarySearch',
  components: {
    HelloWorld
  },
  data() {
    return {
      myLo: 0,
      myHi: 0,
      testDataL: 100000,
      originData: [],
      myKey: 0,
      result: '',
      result2: '',
    }
  },
  methods: {
    createArr() {
      //创建数组
      // console.time()
      this.$nextTick(() => {
        this.originData = []
        let randomArr = this.originData
        let randomNum = (lo, hi) => {
          return Math.floor(Math.random() * (hi - lo) + lo)
        }
        for (let i = 0; i < this.testDataL; i++) {
          randomArr.push(randomNum(this.myLo, this.myHi))
        }
        this.originData = tools.zcQuchong(this.originData)
        console.log(this.originData)
      })
    },
    createKey() {
      // 从数组中随机取值
      let index = Math.floor(Math.random() * this.originData.length)
      this.myKey = this.originData[index]
    },
    rank(key, arr){
      // 二分查找
      let lo = 0
      let hi = arr.length - 1
      while( lo <= hi ){
        let mid = Math.floor( ( hi - lo )/2 + lo )
        if( key < arr[mid] ){
          hi = mid -1 // 如果查找的 项小于 中间键值的项 查找最大键值设置为 中间键值-1，此时查找范围缩小至数组前半段 （例lo 至 mid - 1）
        } else if( key > arr[mid] ) {
          lo = mid + 1 // 如果查找的 项大于 中间键值的项 查找最小键值设置为 中间键值+1，此时查找范围缩小至数组后半段 （例mid + 1 至 hi）
        } else {
          return mid // 如果相等则返回
        }
      }
      return -1 // 如果不存在则 返回-1
    },
    normalSearch(args) {
      // 轮询搜索
      let sortData = [...args]
      let sortedArr = tools.zcNumberCompare(sortData)
      console.time()
      this.result2 = sortedArr.indexOf(this.myKey)
      console.log('-------普通用时-------')
      console.timeEnd()
    },
    main(args) {
      let sortData = [...args]
      let sortedArr = tools.zcNumberCompare(sortData)
      console.time()
      this.result = this.rank(this.myKey, sortedArr)
      console.log('-------二分用时-------')
      console.timeEnd()
    }
  },
  mounted() {
    let arr = [1,2,3,4]
    this.zcTools.shuffle(arr)
    console.log(arr)
  }
}
</script>
<style scoped>
.home{
 min-width: 1000px;
}
</style>
