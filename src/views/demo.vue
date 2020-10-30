<template>
  <el-row style="font-size:30px">
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
  </el-row>
</template>

<script>
import * as tools from '../tools/zcTools'

export default {
  name: "demo",
  data() {
    return {
      huiWenData: '',
      myIsPalindrome: null,
      fullName: '',
      fileNameResult: ''
    }
  },
  methods: {
    getFileType() {
      this.fileNameResult = tools.getFileType(this.fullName)
      console.log(this.fileNameResult)
    },
    huiWen(data) {
      console.log(tools.isPalindrome(data))
      this.myIsPalindrome = tools.isPalindrome(data)
    },
  },
  mounted() {}
}
</script>

<style scoped>

</style>
