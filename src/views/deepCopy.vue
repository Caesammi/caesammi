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
  </el-row>
</template>

<script>
export default {
  name: "deepCopy",
  data() {
    return {
      origin: [
        {
          name: '第一层',
          'objTest': {
            'name2-1': '第二层',
            'name2-2': {
              name3: {
                'name3-1': '第三层'
              }
            }
          },
        },
        {
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
        ],
      result: [],
      deepCopyCode:
          'const deepCopy = (data) => {\n' +
          '        const t = typeof (data);\n' +
          '        let o;\n' +
          '        if (t === \'array\') {\n' +
          '          o = [];\n' +
          '        } else if (t === \'object\') {\n' +
          '          o = {};\n' +
          '        } else {\n' +
          '          return data;\n' +
          '        }\n' +
          '\n' +
          '        if (t === \'array\') {\n' +
          '          for (let i = 0; i < data.length; i++) {\n' +
          '            o.push(deepCopy(data[i]));\n' +
          '          }\n' +
          '        } else if (t === \'object\') {\n' +
          '          for (let i in data) { //遍历对象\n' +
          '            o[i] = deepCopy(data[i]);\n' +
          '          }\n' +
          '        }\n' +
          '        return o;\n' +
          '      }\n' +
          '      console.log(deepCopy(this.origin))\n' +
          '    }'
    }
  },
  methods: {
    deepCopy() {
      const deepCopy = (data) => {
        const t = typeof (data);
        let o;
        if (t === 'array') {
          o = [];
        } else if (t === 'object') {
          o = {};
        } else {
          return data;
        }

        if (t === 'array') {
          for (let i = 0; i < data.length; i++) {
            o.push(deepCopy(data[i]));
          }
        } else if (t === 'object') {
          for (let i in data) { //遍历对象
            o[i] = deepCopy(data[i]);
          }
        }
        return o;
      }
      console.log(deepCopy(this.origin))
    }
  },
  mounted() {
    console.log(JSON.stringify(this.origin))
  },
}
</script>

<style scoped>
</style>
