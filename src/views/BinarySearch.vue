<template>
  <el-row>
    <div style="font-size: 30px">
      <div>BinarySearch（sorted）</div>
      <el-row>
        <el-col :span="6">
          <el-form>
            <el-form-item
              label-width="100px"
              label="最小值"
            >
              <el-input v-model="myLo" />
            </el-form-item>
            <el-form-item
              label-width="100px"
              label="最大值"
            >
              <el-input v-model="myHi" />
            </el-form-item>
            <el-form-item
              label-width="100px"
              label="数组长度"
            >
              <el-input v-model.number="testDataL" />
            </el-form-item>
            <el-form-item
              label="数据制造"
              label-width="100px"
            >
              负值开关
              <el-switch
                v-model="zaoValue"
                active-color="#13ce66"
              />
              <el-divider direction="vertical" />
              重复开关
              <el-switch
                v-model="unitValue"
                active-color="#13ce66"
              />
              <el-divider direction="vertical" />
              <el-button @click="createArr(zaoValue)">
                造
              </el-button>
            </el-form-item>
            <el-form-item
              label="Origin Data"
              label-width="100px"
            >
              <el-input
                v-model="originData.toString()"
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 8}"
              />
            </el-form-item>
            <el-form-item label-width="100px">
              <el-button @click="twoSum">
                ComputeTwoSum
              </el-button>
            </el-form-item>
            <el-form-item
              label="two sum value"
              label-width="100px"
            >
              <el-input
                v-model="twoSumValue"
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 8}"
              />
            </el-form-item>
            <el-form-item
              label-width="100px"
              label="键值"
            >
              <el-input
                v-model.number="myKey"
                :disabled="true"
              />
            </el-form-item>
            <el-form-item label-width="100px">
              <el-button @click="createKey">
                生成随机键值
              </el-button>
            </el-form-item>
            <el-form-item label-width="100px">
              <el-button
                type="primary"
                @click="main(originData)"
              >
                二分查找
              </el-button>
              <el-button
                type="ghost"
                @click="normalSearch(originData)"
              >
                普通搜索
              </el-button>
            </el-form-item>
            <el-form-item
              label="Result"
              label-width="100px"
            >
              二分查找结果
              <el-input v-model="result" />
              轮询结果
              <el-input v-model="result2" />
            </el-form-item>
          </el-form>
          <h5> 计算时间参考：console</h5>
        </el-col>
        <el-col
          :offset="1"
          :span="8"
        >
          <el-image
            style="width: 500px; height: 300px"
            :src="require('../assets/Algorithms/BinarySearch.png')"
            fit="contain"
          />
        </el-col>
      </el-row>
    </div>
  </el-row>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import * as tools from '../tools/zcTools'
export default {
  name: 'BinarySearch',
  components: {
  },
  data() {
    return {
      myLo: 0,
      myHi: 100,
      testDataL: 100000,
      originData: [],
      myKey: 0,
      result: '',
      result2: '',
      twoSumValue: '',
      zaoValue: false,
      unitValue: false
    }
  },
  mounted() {
    const dd = [
      '0x0001',
      '0x0002',
      '0x0003',
      '0x0004',
      '0x0005',
      '0x0006',
      '0x0007',
      '0x0008',
      '0x0009',
      '0x000A',
      '0x000B',
      '0x000C',
      '0x000D',
      '0x000E',
      '0x000F',
      '0x0010',
      '0x0011',
      '0x0012',
      '0x0013',
      '0x0014',
      '0x0101',
      '0x0102',
      '0x0103',
      '0x0104',
      '0x0105',
      '0x0106',
      '0x0107',
      '0x0108',
      '0x0109',
      '0x010A',
      '0x010B',
      '0x010C',
      '0x010D',
      '0x010E',
      '0x010F',
      '0x0110']
    const ff = [
      '超速报警',
      '疲劳驾驶报警',
      '紧急报警',
      '进入指定区域报警',
      '离开指定区域报警',
      '路段堵塞报警',
      '危险路段报警',
      '越界报警',
      '盗警',
      '劫警',
      '偏离路线报警',
      '车辆移动报警',
      '超时驾驶报',
      '接打电话报警',
      '抽烟报警',
      '分神报警',
      '驾驶员异常报警',
      '碰撞报警',
      '频繁变道报警',
      '胎压报警',
      '侧翻报警',
      '前向碰撞预警',
      '车道偏离预警',
      '车距过近预警',
      '行人碰撞预警',
      '生理疲劳驾驶预警',
      '分神驾驶报警',
      '驾驶员身份认证报警',
      '盲点检测报警',
      '盲点检测报警',
      '盲点检测报警',
      '胎压异常报警',
      '胎压异常报警',
      '胎压异常报警',
      '胎压异常报警',
      '胎压异常报警'
    ]
    const asadf = []
    for (let i = 0; i < dd.length; i++) {
      asadf.push({
        ct: dd[i],
        ctName: ff[i]
      })
    }
    console.log(JSON.stringify(asadf))
    const arr = [1, 2, 3, 4]
    this.$tools.shuffle(arr)
    console.log(arr)
    const str = 'abcd'
    console.log(str.charAt(0))
    console.log(str.charAt(str.length - 1))
    console.log(str.indexOf('c'))
  },
  methods: {
    twoSum() {
      // 排序
      const a = this.originData
      this.$tools.zcNumberCompare(a)
      const N = a.length
      let cnt = 0
      for (let i = 0; i < N; i++) {
        if (this.rank2(-a[i], a) > i) {
          cnt++
        }
      }
      this.twoSumValue = cnt
    },
    createArr(isB) {
      // 创建数组
      // console.time()
      this.$nextTick(() => {
        this.originData = []
        const randomArr = this.originData
        const randomNum = (lo, hi) => {
          let reRandom = ''
          let isBernoulli = false
          if (isB === false) {
            isBernoulli = true
          } else {
            isBernoulli = this.$tools.RandomBernoulli(0.5)
          }
          if (isBernoulli) {
            reRandom = Math.floor(Math.random() * (
              hi - lo
            ) + lo)
          } else {
            reRandom = -Math.floor(Math.random() * (
              hi - lo
            ) + lo)
          }
          return reRandom
        }
        for (let i = 0; i < this.testDataL; i++) {
          randomArr.push(randomNum(this.myLo, this.myHi))
        }
        if (this.unitValue) {
          this.originData = [...new Set(randomArr)]
        } else {
          this.originData = randomArr
        }
      })
    },
    createKey() {
      // 从数组中随机取值
      const index = Math.floor(Math.random() * this.originData.length)
      this.myKey = this.originData[index]
    },
    rank(key, arr) { // 数字
      return new Promise((resolve, reject) => {
        // 有序 二分查找
        let lo = 0
        let hi = arr.length - 1
        const result = () => {
          while (lo <= hi) {
            const mid = Math.floor((
              hi - lo
            ) / 2 + lo) // 获取中间键
            if (key < arr[mid]) {
              hi = mid - 1 // 如果查找的值小于 中间键的值 查找最大键值设置为 中间键值-1，此时查找范围缩小至数组前半段 （例lo 至 mid - 1）
            } else if (key > arr[mid]) {
              lo = mid + 1 // 如果查找的值大于 中间键的值 查找最小键值设置为 中间键值+1，此时查找范围缩小至数组后半段 （例mid + 1 至 hi）
            } else {
              return mid // 如果相等则返回
            }
          }
          return -1 // 如果不存在则 返回-1
        }
        resolve(result())
      })
    },
    rank2(key, arr) {
      // 有序 二分查找
      let lo = 0
      let hi = arr.length - 1
      const result = () => {
        while (lo <= hi) {
          const mid = Math.floor((
            hi - lo
          ) / 2 + lo) // 获取中间键
          if (key < arr[mid]) {
            hi = mid - 1 // 如果查找的值小于 中间键的值 查找最大键值设置为 中间键值-1，此时查找范围缩小至数组前半段 （例lo 至 mid - 1）
          } else if (key > arr[mid]) {
            lo = mid + 1 // 如果查找的值大于 中间键的值 查找最小键值设置为 中间键值+1，此时查找范围缩小至数组后半段 （例mid + 1 至 hi）
          } else {
            return mid // 如果相等则返回
          }
        }
        return -1 // 如果不存在则 返回-1
      }
      return result()
    },
    normalSearch(args) {
      // 轮询搜索
      const sortData = [...args]
      tools.zcNumberCompare(sortData)
      const sortedArr = sortData
      console.time()
      this.result2 = sortedArr.indexOf(this.myKey)
      console.log('-------普通用时-------')
      console.timeEnd()
    },
    main(args) {
      const sortData = [...args]
      tools.zcNumberCompare((
        sortData
      ))
      const sortedArr = sortData
      console.time()
      this.rank(this.myKey, sortedArr).then(res => {
        this.result = res
        console.log('-------二分用时-------')
        console.timeEnd()
      })
    }
  }
}
</script>
<style scoped>
.home {
    min-width: 1000px;
}
</style>
