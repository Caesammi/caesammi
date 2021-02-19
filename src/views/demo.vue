<template>
    <el-row :gutter="10" style="font-size:30px;margin: 10px 0 20px 0;">
        <el-col>
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
import elCascaderMulti from './multi-cascader-base-element/multi-cascader'

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
// import 'public/lineheight/plugin'

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
export default {
  name: 'demo',
  components: {
    jsonEditor, Editor, editorImage, elCascaderMulti
  },
  data() {
    return {
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
      debugger
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
    api.login({}).then(res => {
      console.log(res)
      debugger
    }).catch((res) => {
      console.log(res)
      debugger
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
.htmlContent {
    resize: both;
    background: black;
    height: 300px;
    overflow: scroll;
}
</style>
