<template>
  <el-row style="min-height: 20%;padding-left: 30px">
    <div style="font-size: 30px;margin-bottom: 20px">
      使用ADT实现 Flips
    </div>
    <el-col :span="13">
      <el-col :span="6">
        <el-input v-model="count"></el-input>
        <el-button @click="Flips">抛</el-button>
      </el-col>
      <el-col :span="1" style="height: 1px"></el-col>
      <el-col :span="12" style="font-size: 30px">
        Heads:<vue-count-to :startVal='0' :endVal='parseInt(heads)'/> <br>
        Tails:<vue-count-to :startVal='0' :endVal='parseInt(tails)'/> <br>
        Delta:<vue-count-to :startVal='0' :endVal='parseInt(delta)'/>
      </el-col>
      <el-col :span="24">
        <el-col :span="6">
          <div style="font-size: 30px;">猜正反</div>
          <el-input v-model="flipMaxCount"></el-input>
          <el-button @click="flipMax">猜</el-button>
        </el-col>
        <el-col :span="1" style="height: 1px"></el-col>
        <el-col style="font-size: 30px"  :span="12">
          {{flipMaxResult.name}} wins！<br>
          heads counts:<vue-count-to :startVal='0' :endVal='parseInt(flipMaxResult.xTally)'/><br>
          tails counts:<vue-count-to :startVal='0' :endVal='parseInt(flipMaxResult.yTally)'/>
        </el-col>
      </el-col>
      <el-col :span="24">
        <div style="font-size: 30px">
          掷色子
        </div>
        <el-col :span="6">
          <el-input v-model="rollCount"></el-input>
          <el-button @click="roll">掷</el-button>
        </el-col>
        <el-col :span="1" style="height: 1px"></el-col>
        <el-col :span="17">
          <div style="font-size: 30px" v-for="(item,key) in rollResult" :key="key">
            <div>{{item.name}}:<vue-count-to :startVal='0' :endVal='parseInt(item.count)'/>次</div>
          </div>
        </el-col>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
import * as tools from '../../src/tools/storageTool'
import VueCountTo from 'vue-count-to'



export default {
  name: "CounterFlips",
  data() {
    return {
      count: 0,
      flipMaxCount: 0,
      flipMaxResult: {
        name:'',
        xTally:0,
        yTally:0
      },
      heads: 0,
      tails: 0,
      delta: 0,
      rollCount:0,
      rollResult:null
    }
  },
  components:{VueCountTo},
  methods:{
    roll(){
      this.rollResult = new tools.Rolls('掷色子').main([this.rollCount])
      console.log(this.rollResult)
    },
    flipMax(){
      let result = new tools.FlipWin('sss').main([this.flipMaxCount])
      this.flipMaxResult = result
      console.log(result)
    },
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
