<template>
  <el-row :gutter="10" style="font-size:30px;margin-top: 10px">
    <el-col>
      <editor v-model="myValue" :init="init"></editor>
    </el-col>
    <el-col :span="4">
      <div>
        回文判断
        <el-input v-model="huiWenData"></el-input>
        <el-button @click="huiWen(huiWenData)">判断</el-button>
        <br>
        结果: {{ myIsPalindrome }}
      </div>
      <el-divider></el-divider>
      <div>
        文件类型判断
        <el-input v-model="fullName"></el-input>
        <el-button @click="getFileType()">get</el-button>
        <br>
        文件类型: {{ fileNameResult.fileType }}
      </div>
    </el-col>
    <el-col :span="20" style="font-size: 18px">
      <el-col style="font-size: 30px;line-height: 30px;margin-top:10px;margin-bottom: 10px">
        代码测试:
        <el-button size="medium" @click="test" type="ghost">点击测试</el-button>
      </el-col>
      <el-col :span="12">
<!--        <el-input v-model="originData" type="textarea" :autosize="{ minRows: 8 }"/>-->
        <jsonEditor v-model="originData" />
      </el-col>
      <el-col :span="12">
<!--        <el-input v-model="resultData" type="textarea" :autosize="{ minRows: 8 }"/>-->
        <jsonEditor v-model="resultData" />
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
import * as tools from '../tools/zcTools'
import jsonEditor from '../components/JsonEditor/index'
import tinymce from 'tinymce/tinymce'
import Editor from '@tinymce/tinymce-vue'

// 引入富文本编辑器主题的js和css
import 'tinymce/themes/silver/theme.min.js'
import 'tinymce/icons/default'
import 'tinymce/skins/ui/oxide/skin.min.css'

export default {
  name: "demo",
  components:{
    jsonEditor, Editor
  },
  data() {
    return {
      myValue: '',
      init: {
        language_url: '/tinymce/zh_CN.js',
        language: 'zh_CN',
        height: 300,
        skin_url: '/tinymce/skins/ui/oxide',
        branding: false,
        menubar: false,
      },
      huiWenData: '',
      myIsPalindrome: null,
      fullName: '',
      fileNameResult: '',
      originData:'',
      resultData:'',
      testData: {
        duplicateArr: [2, 1, 4, 2, 5, 3, 4, 4, 3, 5, 6],
        groupByArr: [{
          name: 'Anna',
          books: ['Bible', 'Harry Potter'],
          age: 21
        }, {
          name: 'Bob',
          books: ['War and peace', 'Romeo and Juliet'],
          age: 26
        }, {
          name: 'Alice',
          books: ['The Lord of the Rings', 'The Shining'],
          age: 21
        },
          {
            name: 'zc',
            books: ['test book', 'The Shining'],
            age: 21
          }
        ]
      }
    }
  },
  methods: {
    testPre(method, originData){
      this.resultData = method
    },
    test(){
      let originData = this.testData.groupByArr
      this.originData =originData
      let method = this.toolTest.objArrMerge(originData, 'books')
      this.testPre(method,originData)
      debugger
    },
    getFileType() {
      this.fileNameResult = tools.getFileType(this.fullName)
      console.log(this.fileNameResult)
    },
    huiWen(data) {
      console.log(tools.isPalindrome(data))
      this.myIsPalindrome = tools.isPalindrome(data)
    },
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>
