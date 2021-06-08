<template>
    <el-row :gutter="10" style="font-size:30px;margin: 10px 0 20px 0;" class="demoBox">
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
            <el-col style="font-size: 30px;line-height: 30px;margin-top:10px;margin-bottom: 10px;">
                代码测试:
                <el-button size="medium" @click="test" type="ghost">点击测试</el-button>
            </el-col>
            <el-col :span="12" class="htmlContent">
                <!--        <el-input v-model="originData" type="textarea" :autosize="{ minRows: 8 }"/>-->
                <jsonEditor v-model="originData"/>
            </el-col>
            <el-col :span="12" class="htmlContent">
                <!--        <el-input v-model="resultData" type="textarea" :autosize="{ minRows: 8 }"/>-->
                <jsonEditor v-model="resultData"/>
            </el-col>
        </el-col>
        <el-col v-if="false" style="height: 600px">
            <dv-flyline-chart-enhanced :config="config" style="width:100%;height:100%;" />
        </el-col>
        <el-col :span="12">
            <div style="height: 28px;overflow: hidden">
                <Roller :text="testNum.toLocaleString('en-US')"/>
<!--                <vue-number-counter class='my-number' :value="-17842.7129" :option='myOption' />-->
            </div>
            <Roller :text="testNum.toLocaleString('en-US')"/>
            <count-to :start-val=0 :end-val='10.1' decimal="." :duration="2600" class="card-panel-num"/>
            <number-panel id="number_" :number-data="0.025"/>
        </el-col>
        <el-col>
            <div class="bottle-bg">
                <div :style="{bottom: '10px'}" class="bottle-cover"></div>
            </div>
            <div :class="[{contentTest: isActive}, {defaultTest: !isActive}]"></div>
            <el-color-picker
                size="medium"
                v-model="color"
                show-alpha
                :predefine="predefineColors">
            </el-color-picker>
        </el-col>
        <el-col :span="11">
            <editor id="t1" v-model="myValue" :init="init"></editor>
        </el-col>
        <el-col align="center" :span="2">
            <el-button @click="outputHtml">生成代码</el-button>
            <editorImage class="editor-upload-btn" @successCBK="imageSuccessCBK"/>
        </el-col>
        <el-col :span="11" class="htmlContent">
            <span v-html="tinyHtml"></span>
        </el-col>
        <el-col>
            <div style="height: 400px;width: 100%;margin-top:20px;background: #112439" id="echart1"></div>
        </el-col>
    </el-row>
</template>

<script>
import * as api from '../request/api'
import echarts from 'echarts'
import * as tools from '../tools/zcTools'
import jsonEditor from '../components/JsonEditor/index'
import tinymce from 'tinymce/tinymce'
import Editor from '@tinymce/tinymce-vue'
import editorImage from '../components/EditorImage'

// 引入富文本编辑器主题的js和css
import 'tinymce/themes/silver/theme.min.js'
import 'tinymce/icons/default'
import 'tinymce/skins/ui/oxide/skin.min.css'

// 引入插件
import 'tinymce/plugins/image'
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/wordcount'
import NumberPanel from '@/views/NumberPanel'
import CountTo from 'vue-count-to'
import Roller from 'vue-roller'
// import 'public/lineheight/plugin'
  let logo = require('../../src/assets/logo.png')

  let echartData = {
  'name': 'flare',
  'children': [
    {'name': 'ArrayInterpolator', 'value': 1983},
    {'name': 'ColorInterpolator', 'value': 2047},
    {'name': 'DateInterpolator', 'value': 1375},
    {'name': 'Interpolator', 'value': 8746},
    {'name': 'MatrixInterpolator', 'value': 2202},
    {'name': 'NumberInterpolator', 'value': 1382},
    {'name': 'ObjectInterpolator', 'value': 1629},
    {'name': 'PointInterpolator', 'value': 1675},
    {'name': 'RectangleInterpolator', 'value': 2042}
  ]
}
  let points = [
  {
    name: '郑州',
    coordinate: [0.0, 0.99],
    icon: {
      src: logo,
      width: 30,
      height: 30
    }
  },
  {
    name: '新乡',
    coordinate: [0.52, 0.23]
  },
  {
    name: '焦作',
    coordinate: [0.43, 0.29]
  },
  {
    name: '开封',
    coordinate: [0.59, 0.35]
  },
  {
    name: '许昌',
    coordinate: [0.53, 0.47]
  },
  {
    name: '平顶山',
    coordinate: [0.45, 0.54]
  },
  {
    name: '洛阳',
    coordinate: [0.36, 0.38]
  },
  {
    name: '周口',
    coordinate: [0.62, 0.55]
  },
  {
    name: '漯河',
    coordinate: [0.56, 0.56]
  },
  {
    name: '南阳',
    coordinate: [0.37, 0.66]
  },
  {
    name: '信阳',
    coordinate: [0.55, 0.81]
  },
  {
    name: '驻马店',
    coordinate: [0.55, 0.67]
  },
  {
    name: '济源',
    coordinate: [0.37, 0.29]
  },
  {
    name: '三门峡',
    coordinate: [0.20, 0.36]
  },
  {
    name: '商丘',
    coordinate: [0.76, 0.41]
  },
  {
    name: '鹤壁',
    coordinate: [0.59, 0.18]
  },
  {
    name: '濮阳',
    coordinate: [0.68, 0.17]
  },
  {
    name: '安阳',
    coordinate: [0.59, 0.10]
  }
]
  let lines = [
  {
    source: '新乡',
    target: '郑州'
  },
  {
    source: '焦作',
    target: '郑州'
  },
  {
    source: '开封',
    target: '郑州'
  },
  {
    source: '许昌',
    target: '郑州'
  },
  {
    source: '平顶山',
    target: '郑州'
  },
  {
    source: '洛阳',
    target: '郑州'
  },
  {
    source: '周口',
    target: '郑州'
  },
  {
    source: '漯河',
    target: '郑州'
  },
  {
    source: '南阳',
    target: '郑州'
  },
  {
    source: '信阳',
    target: '郑州'
  },
  {
    source: '驻马店',
    target: '郑州'
  },
  {
    source: '济源',
    target: '郑州'
  },
  {
    source: '三门峡',
    target: '郑州'
  },
  {
    source: '商丘',
    target: '郑州'
  },
  {
    source: '鹤壁',
    target: '郑州'
  },
  {
    source: '濮阳',
    target: '郑州'
  },
  {
    source: '安阳',
    target: '郑州'
  }
]
  let icon = {
  show: true,
    src: logo
}
  let bgImgSrc = logo
export default {
  name: 'demo',
  components: {
    CountTo,
    NumberPanel,
    jsonEditor, Editor, editorImage,
    Roller
  },
  data() {
    return {
      config: {
        points: points,
        lines: lines
      },
      testNum: 234567,
      myOption: {
        duration: 2000,
        characterWidth: 16,
        addCharacter: [],
        replaceCharacterMap: [],
        decimals: 2,
        thousandsSeparatorFlag: false
      },
      isActive: false,
      color: 'rgba(255, 69, 0, 0.68)',
      predefineColors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsva(120, 40, 94, 0.5)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, 0.73)',
        '#c7158577'
      ],
      ssss: true,
      tinyHtml: '请在左侧富文本编辑框输入内容',
      casData: [
        {
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }
      ],
      checkList: [],
      echartOpt: {
        title: {
          text: 'ddd',
          subtext: 'subtext',
          textStyle: {
            color: 'white'
          },
          subtextStyle: {
            left: 'right'
          },
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
        },
        series: [
          {
            type: 'tree',
            data: [echartData],
            top: '15%',
            left: '2%',
            right: '2%',
            bottom: '10%',
            edgeShape: 'polyline', // 直角连接线，只适用于4.7之后的版本
            lineStyle: {color: '#034978', borderColor: '#034978'},
            symbol: 'emptyCircle',
            symbolSize: 1,
            orient: 'vertical', // 方向
            expandAndCollapse: true,
            label: {
              formatter: function (val) {
                let name = typeof val.name != 'undefined' ? val.name : ''
                let value = typeof val.value != 'undefined' ? val.value : ''
                return `${name}\n${value}`
              },
              position: 'top',
              // rotate: -90,
              verticalAlign: 'middle',
              align: 'center',
              fontSize: 9,
              backgroundColor: '#0F344D',
              color: 'white',
              padding: 5,
              offset: [0, 5]
            },
            leaves: {
              label: {
                position: 'center',
                // rotate: -90,
                verticalAlign: 'middle',
                align: 'center'
              }
            },

            animationDurationUpdate: 750
          }
        ]
      },
      myValue: '',
      bb: '',
      cc: '',
      init: {
        language_url: '/tinymce/zh_CN.js',
        language: 'zh_CN',
        height: 300,
        skin_url: '/tinymce/skins/ui/oxide',
        branding: false,
        menubar: false,
        object_resizing: true,
        toolbar: ['fontselect | fontsizeselect | forecolor backcolor bold italic underline strikethrough | alignleft aligncenter alignright | outdent indent | hr bullist numlist lineheight imagetools | undo redo | '],
        plugins: ['lists image lineheight'],
        end_container_on_empty_block: true,
        powerpaste_word_import: 'clean',
        code_dialog_height: 450,
        code_dialog_width: 1000,
        advlist_bullet_styles: 'square',
        advlist_number_styles: 'default',
        default_link_target: '_blank',
        link_title: false,
        fontsize_formats: '11px 12px 14px 16px 18px 24px 36px 48px',
        font_formats: "微软雅黑=Microsoft YaHei;宋体='宋体';黑体='黑体';仿宋='仿宋';楷体='楷体';隶书='隶书';幼圆='幼圆';",
        lineheight_formats: '1 1.2 1.5 1.6 1.8 2 2.4',
        nonbreaking_force_tab: true, // inserting nonbreaking space &nbsp; need Nonbreaking Space Plugin
        convert_urls: false
      },
      init2: {
        plugins: ['advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount'],
        end_container_on_empty_block: true,
        powerpaste_word_import: 'clean',
        code_dialog_height: 450,
        code_dialog_width: 1000,
        advlist_bullet_styles: 'square',
        advlist_number_styles: 'default',
        default_link_target: '_blank',
        link_title: false,
        nonbreaking_force_tab: true, // inserting nonbreaking space &nbsp; need Nonbreaking Space Plugin
        convert_urls: false
      },
      huiWenData: '',
      myIsPalindrome: null,
      fullName: '',
      fileNameResult: '',
      originData: '',
      resultData: '',
      testData: {
        duplicateArr: [2, 1, 4, 2, 5, 3, 4, 4, 3, 5, 6],
        groupByArr: [{
          name: 'Anna',
          books: ['Bible', 'Bible', 'Harry Potter'],
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
    outputHtml() {
      this.tinyHtml = this.myValue.toString()
      console.log(this.myValue)

    },
    imageSuccessCBK(arr) {
      arr.forEach(v => this.myValue += `<img class="wscnph" src="${v.url}" >`)
    },
    testPre(method, originData) {
      this.resultData = method
    },
    test() {
      let originData = this.testData.groupByArr
      this.originData = originData
      let method = this.toolTest.objArrMerge(originData, 'books')
      this.testPre(method, originData)

    },
    getFileType() {
      this.fileNameResult = tools.getFileType(this.fullName)
      console.log(this.fileNameResult)
    },
    huiWen(data) {
      console.log(tools.isPalindrome(data))
      this.myIsPalindrome = tools.isPalindrome(data)
    },
    newP() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('fff')
          resolve('完成')
        }, 1111)
      })
    }
  },
  mounted() {
    // JSON 去重
    this.originData = [
      {a: 'a'},
      {a: 'a'},
      {b: 'b'},
      {b: 'b'}
    ]
    const objArrQuChong = (arr, key) => {
      let newobj = {};
      arr = arr.reduce((preVal, curVal) => {
        newobj[curVal[key]] ? '' : newobj[curVal[key]] = preVal.push(curVal);
        return preVal
      }, [])
      return arr
    }
    this.resultData = objArrQuChong(this.originData, 'b')
    console.log(objArrQuChong(this.originData, 'b'))
    // 数字排序
    // let testArr = [1,1,1,2,4,2,3,3,3,3]
    // let sortArr = (arr) => {
    //   arr.sort((a, b) => a - b)
    // }
    // sortArr(testArr)
    // console.log(testArr)
    // return
    // // 数组去重
    // let testArr = ['吧','啊','从','吧','啊','从']
    // let arrDuplicate = (array) => {
    //   return array.reduce((acc, cur) => {
    //     if (acc.indexOf(cur) === -1) {
    //       acc.push(cur)
    //     }
    //     return acc
    //   }, [])
    // }
    // let newArr = arrDuplicate(testArr)
    // console.log(newArr)
    // return
    let test = () => {
      // 数组去重
      let arrDuplicate = (array) => {
        return array.reduce((acc, cur) => {
          if (acc.indexOf(cur) === -1) {
            acc.push(cur)
          }
          return acc
        }, [])
      }
      // 汉字排序
      let testArr = ['吧','啊','从']
      let chineseSort = (array) => {
        array.sort((a, b) => a.localeCompare(b))
      }
      chineseSort(testArr)
      console.log(testArr)
    }
    setTimeout(() => {
      this.isActive = true
    }, 5000)
    let arrA = [{"GZMACNO":"1","CPY206006":1550},{"GZMACNO":"2","CPY206006":3209},{"GZMACNO":"3","CPY206006":368},{"GZMACNO":"4","CPY206006":2426},{"GZMACNO":"5","CPY206006":1550},{"GZMACNO":"6","CPY206006":3209}]
    let arrB = {"1":[{"GZMACNO":"1","GZOILGUN":"1","GZYLLW2":"92#","CPY206007":271,"CPY206008":6.59,"CPY206009":8},{"GZMACNO":"1","GZOILGUN":"2","GZYLLW2":"92#","CPY206007":510,"CPY206008":6.59,"CPY206009":16},{"GZMACNO":"1","GZOILGUN":"3","GZYLLW2":"92#","CPY206007":152,"CPY206008":6.59,"CPY206009":4},{"GZMACNO":"1","GZOILGUN":"4","GZYLLW2":"92#","CPY206007":43,"CPY206008":6.59,"CPY206009":1},{"GZMACNO":"1","GZOILGUN":"5","GZYLLW2":"95#","CPY206007":319,"CPY206008":7.01,"CPY206009":7},{"GZMACNO":"1","GZOILGUN":"6","GZYLLW2":"95#","CPY206007":255,"CPY206008":7.01,"CPY206009":5}],"2":[{"GZMACNO":"2","GZOILGUN":"10","GZYLLW2":"92#","CPY206007":48,"CPY206008":6.59,"CPY206009":2},{"GZMACNO":"2","GZOILGUN":"11","GZYLLW2":"95#","CPY206007":809,"CPY206008":7.01,"CPY206009":17},{"GZMACNO":"2","GZOILGUN":"12","GZYLLW2":"95#","CPY206007":350,"CPY206008":7.01,"CPY206009":8},{"GZMACNO":"2","GZOILGUN":"7","GZYLLW2":"92#","CPY206007":643,"CPY206008":6.59,"CPY206009":22},{"GZMACNO":"2","GZOILGUN":"8","GZYLLW2":"92#","CPY206007":1374,"CPY206008":6.59,"CPY206009":42},{"GZMACNO":"2","GZOILGUN":"9","GZYLLW2":"92#","CPY206007":84,"CPY206008":6.59,"CPY206009":2}],"3":[{"GZMACNO":"3","GZOILGUN":"14","GZYLLW2":"95#","CPY206007":44,"CPY206008":7.01,"CPY206009":1},{"GZMACNO":"3","GZOILGUN":"16","GZYLLW2":"98#","CPY206007":46,"CPY206008":7.99,"CPY206009":1},{"GZMACNO":"3","GZOILGUN":"17","GZYLLW2":"95#","CPY206007":118,"CPY206008":7.01,"CPY206009":3},{"GZMACNO":"3","GZOILGUN":"18","GZYLLW2":"95#","CPY206007":161,"CPY206008":7.01,"CPY206009":3}],"4":[{"GZMACNO":"4","GZOILGUN":"19","GZYLLW2":"95#","CPY206007":1507,"CPY206008":7.01,"CPY206009":32},{"GZMACNO":"4","GZOILGUN":"20","GZYLLW2":"95#","CPY206007":593,"CPY206008":7.01,"CPY206009":15},{"GZMACNO":"4","GZOILGUN":"21","GZYLLW2":"98#","CPY206007":63,"CPY206008":7.99,"CPY206009":1},{"GZMACNO":"4","GZOILGUN":"22","GZYLLW2":"98#","CPY206007":108,"CPY206008":7.99,"CPY206009":2},{"GZMACNO":"4","GZOILGUN":"23","GZYLLW2":"98#","CPY206007":157,"CPY206008":7.99,"CPY206009":3}],"5":[{"GZMACNO":"4","GZOILGUN":"19","GZYLLW2":"95#","CPY206007":1507,"CPY206008":7.01,"CPY206009":32},{"GZMACNO":"4","GZOILGUN":"20","GZYLLW2":"95#","CPY206007":593,"CPY206008":7.01,"CPY206009":15},{"GZMACNO":"4","GZOILGUN":"21","GZYLLW2":"98#","CPY206007":63,"CPY206008":7.99,"CPY206009":1},{"GZMACNO":"4","GZOILGUN":"22","GZYLLW2":"98#","CPY206007":108,"CPY206008":7.99,"CPY206009":2},{"GZMACNO":"4","GZOILGUN":"23","GZYLLW2":"98#","CPY206007":157,"CPY206008":7.99,"CPY206009":3}],"6":[{"GZMACNO":"4","GZOILGUN":"19","GZYLLW2":"95#","CPY206007":1507,"CPY206008":7.01,"CPY206009":32},{"GZMACNO":"4","GZOILGUN":"20","GZYLLW2":"95#","CPY206007":593,"CPY206008":7.01,"CPY206009":15},{"GZMACNO":"4","GZOILGUN":"21","GZYLLW2":"98#","CPY206007":63,"CPY206008":7.99,"CPY206009":1},{"GZMACNO":"4","GZOILGUN":"22","GZYLLW2":"98#","CPY206007":108,"CPY206008":7.99,"CPY206009":2},{"GZMACNO":"4","GZOILGUN":"23","GZYLLW2":"98#","CPY206007":157,"CPY206008":7.99,"CPY206009":3}]}
    let counter = 0
    let arrIndex = 0
    let preArr = []
    for (let i = 0; i<arrA.length; i++) {
      if (!preArr[arrIndex]) preArr[arrIndex] = []
      preArr[arrIndex].push(arrA[i])
      counter++
      if (counter === 4) {
        arrIndex++
        counter = 0
      }
    }
    console.log(preArr)

    api.login({}).then(res => {
      console.log(res)

    }).catch((res) => {
      console.log(res)

    })
    // let startTime = Date.parse(new Date())
    // this.newP().then(res=>{
    //   let endTime = Date.parse(new Date())
    //   console.log(endTime - startTime)
    // })
    console.time()
    this.newP().then(res => {
      console.timeEnd()
    })

    let newArray = [{
      name: 'aaa',
      value: 0
    }, {
      name: 'aaa',
      value: 0
    },
      {
        name: '单元',
        value: 3
      },
      {
        name: 'bbb',
        value: 1
      },
      {
        name: '单元',
        value: 4
      },
      {
        name: 'ccc',
        value: 2
      }]
    this.zcTools.zcJsonCompare(newArray, 'name')
    let fff = this.zcTools.objArrDuplicate(newArray, 'name')
    console.log(newArray)
    console.log(fff)
    this.myValue = ''
    let getID = document.getElementById('echart1')
    let thischart = echarts.init(getID)
    thischart.setOption(this.echartOpt)
  }
}
</script>

<style scoped>
.demoBox {
    /*background: grey;*/
}
.my-number {
    font-size: 40px;
}
.bottle-bg {
    height: 200px;
    width: 100px;
    position: relative;
    background: url("./bottleChaiBg.png") no-repeat center;
    background-size: 100% 100%;
}
.bottle-cover {
    position: absolute;
    height: 30px;
    width: 100%;
    background: url("./bottleChaiFlat.png") no-repeat center;
    background-size: 100% 100%;

}
.contentTest {
    transition-duration: 5s;
    background: #00feff;
    width: 100px;
    height: 100px
    /*animation: test 5s linear;*/
}
.defaultTest {
    transition-duration: 5s;
    background: #00ff80;
    width: 100px;
    height: 100px
}
.htmlContent {
    resize: both;
    background: black;
    height: 300px;
    overflow: scroll;
}
</style>
