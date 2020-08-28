<template>
  <div id="myMain">
    <el-row :gutter="5" style="margin: 0;min-width: 1400px">
      <el-col :span="8">
        <el-col class="marginTopTen">
          <el-col class="smallTitle">
            <el-col>
              <label style="font-size: 12px"> </label> 项目基本信息
              <div class="moreButton">more</div>
            </el-col>
          </el-col>
          <el-col style="font-size: 14px;padding-bottom: 15px;padding-left: 10px;padding-right: 10px;position: relative"
                  class="paddingAllTen midContainer DarkTheme">
            ● 总投资:4.3亿元 <br>
            ● 开工日期: 2013年3月23日 <br>
            ● 计划投科日期: 2013年4月2日
            <el-divider></el-divider>
            <el-col :span="12">
              ● 主要建设内容:<br>
              建设内容文字建设内容文字建设内容文字<br>
              建设内容文字建设内容文字建设内容文字<br>
            </el-col>
            <el-col :span="12">
              ●当前进展概要<br>
              建设内容文字建设内容文字建设内容文字<br>
              建设内容文字建设内容文字建设内容文字<br>
            </el-col>
          </el-col>
        </el-col>
        <el-col class="marginTopTen">
          <el-col class="smallTitle">
            <label style="font-size: 12px"> </label> HES与质量
          </el-col>
          <el-col style="padding-bottom: 20px;" class="midContainer DarkTheme">
            <el-col :span="8">
              <dashBoard id="dash1" :option="optionDash2" bom="mini" height="136px"></dashBoard>
              <el-col align="center">
                <div class="mySubTitleDark">HES情况</div>
              </el-col>
            </el-col>
            <el-col :span="8">
              <dashBoard id="dash2" :option="optionDash2" bom="mini" height="136px"></dashBoard>
              <el-col align="center">
                <div class="mySubTitleDark">质量情况</div>
              </el-col>
            </el-col>
            <el-col :span="8">
              <dashBoard id="dash3" :option="optionDash2" bom="mini" height="136px"></dashBoard>
              <el-col align="center">
                <div class="mySubTitleDark">风险管理情况</div>
              </el-col>
            </el-col>
          </el-col>
        </el-col>
        <el-col class="marginTopTen DarkTheme DarkShadow"
                style="border-bottom-right-radius: 15px;border-bottom-left-radius: 15px;padding-bottom: 5px">
          <el-col class="smallTitle">
            <label style="font-size: 12px"> </label> 里程碑完成情况
          </el-col>

          <el-col
              class="DarkCover">
            <el-col>
              <dashBoard id="dash4" :option="optionDash1" bom="big" height="270px"></dashBoard>
              <el-col style="margin-top: -15px;margin-bottom: 15px;" class="dashBoardTitle" align="center">
                <div style="width: 35%" class="mySubTitleDark">总体状况</div>
              </el-col>
            </el-col>
          </el-col>
          <el-col
              class="DarkCover dark"
              align="center">
            <el-col style="margin-top: 20px;background: transparent" class="paddingAllTen">
              <el-col style="line-height: 1">
                <el-col align="right" :span="5">按期完成率：</el-col>
                <el-col class="dark" :span="18">
                  <el-progress :stroke-width="13" :percentage="98" color="#FF9131"></el-progress>
                </el-col>
              </el-col>
              <el-col style="margin-top: 20px;line-height: 1">
                <el-col align="right" :span="5">平均滞后天数：</el-col>
                <el-col :span="18">
                  <el-progress :stroke-width="13" :percentage="50" color="#409EFF"></el-progress>
                </el-col>
              </el-col>

            </el-col>
            <el-button-group style="margin-top: 20px;margin-bottom: 20px">
              <el-button size="mini" type="info"><i style="color: #295f00" class="el-icon-s-marketing"></i> 图示
              </el-button>
              <el-button size="mini" type="info"><i style="color: #24c400" class="el-icon-s-marketing"></i> 图示
              </el-button>
              <el-button size="mini" type="info"><i style="color: #ff7400" class="el-icon-s-marketing"></i> 图示
              </el-button>
              <el-button size="mini" type="info"><i style="color: #ff0000" class="el-icon-s-marketing"></i> 图示
              </el-button>
            </el-button-group>
          </el-col>
        </el-col>


      </el-col>
      <el-col :span="16">
        <el-col class="marginTopTen" :span="12">
          <el-col>
            <el-col class="smallTitle">
              <el-col>
                <label style="font-size: 12px"> </label> 项目要闻
                <div class="moreButton">more</div>
              </el-col>
            </el-col>

            <el-col class="midContainer DarkTheme" style="padding-bottom: 10px">
              <el-col class="paddingAllTen" v-for="(item,index) in 4" :span="12" :key="index">
                <el-tooltip placement="top">
                  <div
                      style="display: -webkit-box;-webkit-box-orient: vertical;max-width: 300px"
                      slot="content">方向副主任和殷明汉总共分别出席活动方向副主任和殷明汉总共分别等等方向副主任和殷明汉总共分别等等{{ item }}
                  </div>
                  <div style="padding:0 10px;">
                    <div
                        style="font-size: 14px;border-bottom: 1px solid #606266;overflow: hidden;#F4F4F5-space: nowrap;text-overflow: ellipsis;cursor: pointer;">
                      ● 方向副主任和殷明汉总共分别出席活动方向副主任和殷明汉总共分别等等方向副主任和殷明汉总共分别等等{{ index }}
                    </div>
                  </div>

                </el-tooltip>

              </el-col>
            </el-col>
          </el-col>
        </el-col>
        <el-col class="marginTopTen" :span="12">
          <el-col>
            <el-col class="smallTitle">
              <el-col>
                <label style="font-size: 12px"> </label> 问题与重点工作
                <div class="moreButton">more</div>
              </el-col>
            </el-col>
            <el-col class="midContainer DarkTheme" style="padding-bottom: 10px">
              <el-col class="paddingAllTen" v-for="(item,index) in 4" :span="12" :key="index">
                <el-tooltip placement="top">
                  <div
                      style="display: -webkit-box;-webkit-box-orient: vertical;max-width: 300px"
                      slot="content">陈刚主任出席ISO第9次理事要闻陈刚主任出席ISO第9次理事要闻陈刚主任出席ISO第9次理事要闻{{ item }}
                  </div>
                  <div style="padding:0 10px;">
                    <div
                        style="font-size: 14px;border-bottom: 1px solid #606266;overflow: hidden;#F4F4F5-space: nowrap;text-overflow: ellipsis;cursor: pointer;">
                      ● 陈刚主任出席ISO第9次理事要闻陈刚主任出席ISO第9次理事要闻陈刚主任出席ISO第9次理事要闻{{ index }}
                    </div>
                  </div>
                </el-tooltip>
              </el-col>
            </el-col>
          </el-col>
        </el-col>
        <el-col class="dark" :span="24">
          <el-tabs style="margin-left: 3px;margin-top: 5px" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane v-for="(item, index) in menuList" :key="index" :label="item.name"
                         :name="item.name"></el-tab-pane>
          </el-tabs>
          <el-col :span="16" class="DarkTheme" style="box-shadow:0 6px 7px -5px #1c1c1c;position: relative;">
            <div :style="myFontColorData" class="echartsLabelBig">总体进度曲线</div>
            <histogram :id="idH1" :option="optionH1" bom="big" width="100%" height="500px"></histogram>

          </el-col>
          <el-col :span="8" style=" box-shadow:4px 8px 5px -5px #CCCCCC;margin-top: -5px;padding-left: 5px;">
            <el-col v-for="(item,index) in idH" :key="index" class="DarkTheme" style="margin-top: 5px;position: relative;">
              <div class="echartsLabelMini">{{ item.name }}</div>
              <histogram :id="item.id" :option="optionH2" bom="mini" height="163px"></histogram>
            </el-col>
          </el-col>
          <el-col :span="12" style="margin-top: 10px">
            <el-col>
              <el-col class="smallTitle">
                <label style="font-size: 12px"> </label> 投资控制
              </el-col>
              <el-col class="midContainer DarkTheme" style="padding-left: 10px">
                <el-col style="margin-top: 20px;" v-for="(item,index) in touZiList" :span="8" :key="index+'1'">
                  <i v-if="index!==0" :style="{color:item.color}" class="el-icon-s-marketing"></i>
                  <i v-else class="el-icon-caret-right"></i>
                  {{ item.content }}
                </el-col>
                <el-col style="margin-top: 10px;" class="paddingAllTen dark">
                  <el-progress :stroke-width="13" :percentage="98" color="#ff9131"></el-progress>
                  <el-progress style="margin-top: 20px;" :stroke-width="13" :percentage="50"
                               color="#409EFF"></el-progress>
                  <el-col style="margin-top: 20px" v-for="(item,index) in touZiList" :span="8" :key="index">
                    <i v-if="index!==0" :style="{color:item.color}" class="el-icon-s-marketing"></i>
                    <i v-else class="el-icon-caret-right"></i>
                    {{ item.content2 }}
                  </el-col>
                  <el-col style="margin-top: 20px;margin-bottom: 25px">
                    <el-progress :stroke-width="13" :percentage="98" color="#ff9131"></el-progress>
                    <el-progress style="margin-top: 20px;" :stroke-width="13" :percentage="50"
                                 color="#409EFF"></el-progress>
                  </el-col>
                </el-col>
              </el-col>

            </el-col>
          </el-col>
          <el-col :span="12" style="margin-top: 10px">
            <el-col>
              <el-col class="smallTitle commonFlexStart">
                变更管理
                <div style="right: 110px" class="titleButton">数据</div>
                <div style="right: 65px" class="titleButton">饼图</div>
                <div style="right: 20px" class="titleButton">详情</div>
              </el-col>
              <el-col class="midContainer DarkTheme" style="padding-top:20px;padding-bottom: 20px">
                <el-col :span="12">
                  <Pie :id="idP1" :option="optionP1" height="220px"></Pie>
                </el-col>
                <el-col :span="12" style="padding-right: 10px">
                  <Pie :id="idP2" :option="optionP1" height="220px"></Pie>
                </el-col>
              </el-col>
            </el-col>
          </el-col>
        </el-col>

      </el-col>
    </el-row>


  </div>
</template>

<script>
import store from "@/store";
import echarts from 'echarts'
import Pie from './Widget/dPie'
import histogram from './Widget/dHistogram'
import dashBoard from './Widget/dashBoard'
import '../assets/css/DarkTheme.css'



export default {
  name: "mytest",
  components: {histogram, Pie, dashBoard},
  store: store,
  computed: {},
  data() {
    return {
      myFontColorData:'',
      touZiList: [
        {
          content: '年度完成情况',
          content2: '项目累计投资完成情况',
          color: 'ff9131'
        },
        {
          content: '累计完成投资',
          content2: '建安工程费支付',
          color: '#ff9131'
        },
        {
          content: '项目总体进度',
          content2: '项目施工进程',
          color: '#409EFF'
        }
      ],
      idH: [                         //id
        {id: 'testH2',name:'设计', option: this.optionH1},
        {id: 'testH3',name:'采购', option: this.optionH1},
        {id: 'testH4',name:'施工', option: this.optionH1},

      ],
      idH1: 'testH',
      optionH1: {},
      optionH2: {},
      idP1: 'testP',
      optionP1: {},
      idP2: 'testP2',
      optionP2: {},
      optionDash1: {},
      optionDash2: {},
      activeName: '总体进度曲线',
      menuList: [
        {
          name: '总体进度曲线'
        },
        {
          name: '设计进度情况'
        },
        {
          name: '采购进度情况'
        },
        {
          name: '施工进度情况'
        },
        {
          name: '生产准备情况'
        },
        {
          name: '进度百分比明细'
        }
      ],   //导航菜单
    }
  },
  methods: {

    handleClick(tab, event) {
      console.log(tab, event)
    },
    makeYear(){
      let pre2=[]
      for(let i = 0; i<49; i++){
        if(i<=12&&i>0){
          pre2.push('2015年')
        }
        if(i<=24&&i>12){
          pre2.push('2016年')
        }
        if(i<=36&&i>24){
          pre2.push('2017年')
        }
        if(i<=49&&i>36){
          pre2.push('2018年')
        }
      }
      console.log(pre2.length);
      console.log(JSON.stringify(pre2))
    },
  }
  ,
  mounted() {
    this.myFontColorData = `fontColor:${store.state.theme==='light' ? '#606266' : 'white'}`
  },
  watch: {
    activeName:function () {
      this.optionH1.title.text = this.activeName
      this.optionH2.title.text = this.activeName
    }
  }
}
</script>

<style scoped>
#myMain {
  background: #354259;
  color: #606266;
  width: 100%;
}

.midContainer {
  background: #F4F4F5;
  border-bottom-right-radius: 15px;
}

.smallTitle {
  padding-left: 20px !important;
  font-weight: bold;
  color: #F4F4F5;
  line-height: 1.8;
  background: #3e4c6a;
  position: relative;
  z-index: 3;
  box-shadow: 0 6px 7px -5px #1c1c1c;
  /*background: linear-gradient(to right, #99ceff, #2991ff);*/
  text-shadow: 0px 2px 2px #484848;
}

.titleButton {
  background: #5FA4D0;
  padding: 0 3px 0 3px;
  margin-top: 5px;
  position: absolute;
  font-size: 12px;
  border: 1px solid #b2ceff;
  float: right;
  cursor: pointer;
  border-radius: 3px;
}

.moreButton {
  padding: 0 3px 0 3px;
  font-size: 13px;
  float: right;
  color: #63A6D1;
  cursor: pointer;
  text-shadow: none;
  margin-top: 3px;
  border-radius: 3px;
}

.commonFlexStart {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
}

.paddingAllTen {
  padding: 10px 10px 10px 10px
}

.marginTopTen {
  margin-top: 10px;
}

.mySubTitleLight {
  padding: 5px;
  position: relative;
  z-index: 2;
  font-size: 14px;
  width: 55%;
  background: rgb(225, 236, 252);
  border: 1px solid #9898ff33;
  border-radius: 5px;
}
.mySubTitleDark {
  padding: 5px;
  position: relative;
  z-index: 2;
  font-size: 14px;
  width: 55%;
  background: rgba(225, 236, 252, 0.1);
  border: 1px solid #9898ff33;
  border-radius: 5px;
}
.echartsLabelBig{
  font-weight: 500;
  position: absolute;
  z-index: 2;
  padding-left: 1%;
  padding-top: 10px;
  font-size: 20px;
}
.echartsLabelMini{
  font-weight: 500;
  position: absolute;
  z-index: 2;
  padding-left: 1%;
  padding-top: 10px;
  font-size: 13px;
}
.lightTheme{
  background: #F4F4F5;
}
.DarkTheme{
  background: #2a3446;
  color: #F4F4F5;
}
.lightShadow{
  box-shadow:4px 10px 8px -5px #e1e1e1;
}
.DarkShadow{
  box-shadow: 4px 10px 8px -5px #323232;
}
.lightCover{
  background: rgba(225,236,252,0.3);border-radius: 15px;border:1px solid rgb(195,219,255);margin-top:5px
}
.DarkCover{
  background: rgba(225,236,252,0.1);border-radius: 15px;border:1px solid rgba(195,219,255,0.1);margin-top:5px
}
</style>
