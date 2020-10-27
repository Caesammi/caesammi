<template>
  <el-row style="min-height: 20%">
    <div style="font-size: 30px;margin-bottom: 20px">
      使用ADT实现 Flips
    </div>
    <el-col :span="13">
      <el-col :span="6">
        <el-input v-model="count"></el-input>
        <el-button style="float: right" @click="Flips">抛</el-button>
      </el-col>
      <el-col :span="1" style="height: 1px"></el-col>
      <el-col :span="12" style="font-size: 30px">
        Heads: {{heads}} <br>
        Tails: {{tails}} <br>
        Delta: {{delta}}
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
import * as tools from '../../src/tools/storageTool'




export default {
  name: "CounterFlips",
  data() {
    return {
      count: 0,
      heads: '',
      tails: '',
      delta: ''
    }
  },
  methods:{
    Flips(){
     let result = new tools.Flips('sss').main([this.count])
      this.heads = result.heads
      this.tails = result.tails
      this.delta = result.delta
    }
  },
  mounted(){
  }
}
</script>

<style scoped>

</style>
