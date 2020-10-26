<template>
  <el-row style="min-height: 100%" :gutter="5">


    <el-col style="font-size: 30px;">
      Deep Copy
    </el-col>
    <el-col :span="8">
      <el-input type="textarea" :autosize="{ minRows: 8 }" v-model="JSON.stringify(origin)"></el-input>
    </el-col>
    <el-col style="width: 112px" :span="2">
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
    <el-col style="font-size: 30px;line-height: 30px;height:30px">
      computed练习：<div style="margin-top:30px;transform: translateY(-30px)" > <el-button @click="computOrigin += '变'">变</el-button></div>
      {{computOrigin}}:{{computResult}}
    </el-col>
  </el-row>
</template>

<script>
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
      deepCopyCode:' const deepCopy = (data) => {\n' +
          '        const t = data.constructor\n' +
          '        // typeof (data);\n' +
          '        let o;\n' +
          '        if (t === Array) {\n' +
          '          o = []\n' +
          '        } else if (t === Object) {\n' +
          '          o = {}\n' +
          '        } else {\n' +
          '          return data //如果是基础数据类型直接返回，下面的代码不执行\n' +
          '        }\n' +
          '\n' +
          '        if (t === Array) {\n' +
          '          for (let i = 0; i < data.length; i++) {\n' +
          '            o.push(deepCopy(data[i])) // 再次调用自身，继续完成该数组里面的内容\n' +
          '          }\n' +
          '        } else if (t === Object) {\n' +
          '          for (let i in data) { // 遍历对象\n' +
          '            o[i] = deepCopy(data[i]) // 再次调用自身，继续完成该对象里面的内容\n' +
          '          }\n' +
          '        }\n' +
          '        return o\n' +
          '        // 使用递归，节省很大工作量\n' +
          '      }'
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
    deepCopy() {
      const deepCopy = (data) => {
        const t = data.constructor
        // typeof (data);
        let o;
        if (t === Array) {
          o = []
        } else if (t === Object) {
          o = {}
        } else {
          return data //如果是基础数据类型直接返回，下面的代码不执行
        }

        if (t === Array) {
          for (let i = 0; i < data.length; i++) {
            o.push(deepCopy(data[i])) // 再次调用自身，继续完成该数组里面的内容
          }
        } else if (t === Object) {
          for (let i in data) { // 遍历对象
            o[i] = deepCopy(data[i]) // 再次调用自身，继续完成该对象里面的内容
          }
        }
        return o
        // 使用递归，节省很大工作量
      }
      this.result = deepCopy(this.origin)
      console.log('----------------------------');
      console.log(this.origin)
      console.log(this.result)
      console.log('----------------------------');
    }
  },
  mounted() {},
}
</script>

<style scoped>
</style>
