<template>
  <el-row class="home">
    <div style="height: 5000px;font-size: 30px">
      <div>BinarySearch</div>
      <el-col :span="6">
        <div style="width: 300px">
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
              <el-button @click="startTest">造</el-button>
            </el-form-item>
            <el-form-item label="Origin Data" label-width="100px">
              <el-input v-model="myData.toString()" type="textarea"
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
              <el-button type="primary" @click="main(myData)">二分查找</el-button>
              <el-button type="ghost" @click="normallSearch(myData)">普通搜索</el-button>
            </el-form-item>
            <el-form-item label="Result" label-width="100px">
              二分查找结果
              <el-input v-model="result"></el-input>
              轮询结果
              <el-input v-model="result2"></el-input>
            </el-form-item>
          </el-form>
         <h5> 计算时间参考：console</h5>
        </div>
      </el-col>
      <el-col :span="8">
        <el-image
            style="width: 500px; height: 300px"
            :src="require('../assets/Algorithms/BinarySearch.png')"
            fit="contain"></el-image>
      </el-col>
    </div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </el-row>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import * as tools from '../tools/storageTool'
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
      myData: [16, 17, 18, 26, 35, 32, 35, 45, 50, 50, 51, 55, 56, 58, 60, 94],
      myKey: 0,
      result: '',
      result2: '',
    }
  },
  methods: {
    createKey() {
      let index = Math.floor(Math.random() * this.myData.length)
      this.myKey = this.myData[index]
    },
    normallSearch(args) {
      let sortData = [...args]
      console.log(tools.zcNumberCompare(sortData));
      let sortedArr = tools.zcNumberCompare(sortData)
      console.time()
      this.result2 = sortedArr.indexOf(this.myKey)
      console.log('-------普通用时-------')
      console.timeEnd()
      console.log(sortedArr[this.result])
    },
    rank(key, arr) {
      let lo = 0
      let hi = arr.length - 1
      while (lo <= hi) {
        let mid = Math.floor(lo + (hi - lo) / 2)
        if (key < arr[mid]) {
          hi = mid - 1
        } else if (key > arr[mid]) {
          lo = mid + 1
        } else {
          return mid
        }
      }
      return -1
    },
    main(args) {
      let sortData = [...args]
      console.log('this is keyObj', {ddd: this.myKey})
      console.log(tools.zcNumberCompare(sortData));
      let sortedArr = tools.zcNumberCompare(sortData)
      console.time()
      this.result = this.rank(this.myKey, sortedArr)
      console.log('-------二分用时-------')
      console.timeEnd()
      console.log(sortedArr[this.result])
    },
    startTest() {
      // console.time()
      this.$nextTick(()=>{
        this.myData = []
        let randomArr = this.myData
        let randomNum = (lo, hi) => {
          return Math.floor(Math.random() * (hi - lo) + lo)
        }
        for (let i = 0; i < this.testDataL; i++) {
          randomArr.push(randomNum(this.myLo, this.myHi))
        }
        this.myData = tools.zcQuchong(this.myData)
        console.log(this.myData)
      })
    }
  },
  mounted() {}
}
</script>
<style scoped>
</style>
