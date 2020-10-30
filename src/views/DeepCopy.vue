<template>
  <el-row style="min-height: 100%">
    <el-col style="font-size: 30px">
      Deep Copy
    </el-col>
    <el-col :span="8">
      <el-input type="textarea" :autosize="{ minRows: 8 }" v-model="JSON.stringify(origin)"></el-input>
    </el-col>
    <el-col style="width: 107px" :span="2">
      <el-button style="margin-top:50%;transform:translateY(-50%)" @click="deepCopy" type="ghost">Deep Copy
        <el-icon class="el-icon-right"></el-icon>
      </el-button>
    </el-col>
    <el-col :span="8">
      <el-input type="textarea" :autosize="{ minRows: 8 }" v-model="JSON.stringify(result)"></el-input>
    </el-col>
    <el-col style="margin-top:20px;margin-bottom: 20px" :span="24">
      <el-input type="textarea" :autosize="{ minRows: 1 }" v-model="deepCopyCode"></el-input>
    </el-col>
    <el-col style="font-size: 30px;line-height: 30px;margin-bottom: 20px">
      computed练习：<div> <el-button @click="computOrigin += '变'">变</el-button></div>
      {{computOrigin}}:{{computResult}}
    </el-col>
  </el-row>
</template>

<script>
import * as tools from '../tools/zcTools'
export default {
  name: "deepCopy",
  data() {
    return {
      computOrigin:'原始',
      origin: [
        {
          name: '第一层',
          'objTest': {
            'name2-1': '第二层',
            'name2-2': {
              name3: {
                'name3-1': '第三层',
                'myFun': ()=>{
                  return -1
                }
              }
            }
          },
          Arr:{
            arrTest: [
              {
                arrName1:[
                  {
                    arrName2:[
                      {
                        arrName3:'我是第三层'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        },

        ],
      result: null,
      deepCopyCode:'    copy(obj){\n' +
          '      let res = obj instanceof Object ? {} : [] //分类数组对象、 初始化返回值\n' +
          '      let resultObj = Object.entries(obj)       //将传入对象拆分成键值对\n' +
          '      for(let [k,v] of resultObj){              //解构遍历键值对数组\n' +
          '        res[k] = typeof v === \'object\' ? this.copy(v) : v //为res赋值\n' +
          '      }\n' +
          '      return res\n' +
          '    },'
    }
  },
  computed:{
    computResult(){
      let myResult =''
      myResult += this.computOrigin+ '加'
      return myResult
    }
},
  methods: {
    copy(obj){
      let res = obj.constructor === Object ? {} : [] //分类数组对象、 初始化返回值
      let resultObj = Object.entries(obj)       //将传入对象拆分成键值对
      for(let [k,v] of resultObj){              //解构遍历键值对数组
        res[k] = typeof v === 'object' ? this.copy(v) : v //为res赋值
      }
      return res
    },
    deepCopy() {
      this.result = tools.copy(this.origin)
      console.log('----------------------------');
      console.log(this.origin)
      console.log(this.result)
      console.log('----------------------------');
    },
    test(){
      let arrTest = [1,2,3,4]
      // tools.shuffle(arrTest)
      // console.log(pop);
      arrTest.forEach((a,i,n)=>{

      })
      console.log(arrTest);
    }
  },
  mounted() {
    setTimeout(()=>{
      this.test()

    },5000)
  },
}
</script>

<style scoped>
</style>
