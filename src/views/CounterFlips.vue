<template>
  <el-row style="min-height: 20%">
    <div style="font-size: 30px">
      使用ADT实现 Flips
    </div>
    <el-col :span="12">
      <el-col :span="6">
        <el-input v-model="count"></el-input>
        <el-button @click="Flips">投硬币</el-button>
      </el-col>
      <el-col :span="12" style="font-size: 30px">
        Heads:{{heads}} <br>
        Tails:{{tails}} <br>
        Delta:{{delta}}
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
