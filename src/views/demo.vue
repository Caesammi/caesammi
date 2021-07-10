<template>
  <el-row
    :gutter="10"
    style="font-size:30px;margin: 10px 0 20px 0;"
    class="demoBox"
  >
    <swiper-test />
    <el-col>
      <ZcCard>
        <template #title>
          <ZcTitleBox
            :show-info="false"
            background-prop="background: #4282fa;color: white;border-top-left-radius: 3px;border-top-right-radius: 3px;"
            title="tableListTitle"
          >
            <div style="position: absolute;right: 5px;top: 0px">
              <span style="color: white;cursor: pointer"><i class="el-icon-close" /></span>
            </div>
          </ZcTitleBox>
        </template>
        <template #content>
          <span style="float: right">单位</span>
          <div
            id="scrollDiv"
            style="height: 530px;width: 100%;overflow: hidden;"
          >
            <div :style="scrollStyle">
              <ZcTable
                id="scrollDivA"
                height="530"
                :order-switch="true"
                header-style="background:red;color: white"
                row-class-name="tableHighBlue"
                :table-data="tableData"
                style="margin-top: 5px"
                :table-column="tableColumn"
              />
              <ZcTable
                id="scrollDivB"
                height="530"
                :order-switch="true"
                header-style="background:red;color: white"
                row-class-name="tableHighBlue"
                :table-data="tableData"
                style="margin-top: 5px"
                :table-column="tableColumn"
              />
            </div>
          </div>
        </template>
      </ZcCard>
    </el-col>
    <!--        <z-c-card>-->
    <!--          <template v-slot:title>-->
    <!--            <z-c-title-box style="width: 300px" title="sdf"/>-->
    <!--          </template>-->
    <!--        </z-c-card>-->
    <ZcCard>
      <template #content>
        <div
          id="echartsA"
          v-echart-resize
          style="width: 500px;height: 500px"
        />
      </template>
    </ZcCard>
    <el-col style="border: 1px solid black">
      <el-dropdown @command="handleCommand($event, 'handleYear')">
        <el-button
          size="mini"
          type="ghost"
        >
          {{ timeCas.yearValue }}<i class="el-icon-arrow-down el-icon--right" />
        </el-button>
        <el-dropdown-menu
          slot="dropdown"
          style="height: 100px;overflow: scroll"
        >
          <el-dropdown-item
            v-for="(item, index) in timeCas.year"
            :key="`casYear${index}`"
            :command="item"
          >
            {{ item }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown @command="handleCommand($event, 'handleMonth')">
        <el-button
          size="mini"
          type="ghost"
        >
          {{ timeCas.monthValue }}<i class="el-icon-arrow-down el-icon--right" />
        </el-button>
        <el-dropdown-menu
          slot="dropdown"
          style="height: 100px;overflow: scroll"
        >
          <el-dropdown-item
            v-for="(item, index) in timeCas.month"
            :key="`casMonth${index}`"
            :command="item"
          >
            {{ item }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown @command="handleCommand($event, 'handleDay')">
        <el-button
          size="mini"
          type="ghost"
        >
          {{ timeCas.dayValue }}<i class="el-icon-arrow-down el-icon--right" />
        </el-button>
        <el-dropdown-menu
          slot="dropdown"
          style="height: 100px;overflow: scroll"
        >
          <el-dropdown-item
            v-for="(item, index) in timeCas.day"
            :key="`casDay${index}`"
            :command="item"
          >
            {{ item }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
    <el-col :span="4">
      <div>
        回文判断
        <el-input v-model="huiWenData" />
        <el-button @click="huiWen(huiWenData)">
          判断
        </el-button>
        <br>
        结果: {{ myIsPalindrome }}
      </div>
      <el-divider />
      <div>
        文件类型判断
        <el-input v-model="fullName" />
        <el-button @click="getFileType()">
          get
        </el-button>
        <br>
        文件类型: {{ fileNameResult.fileType }}
      </div>
    </el-col>
    <el-col
      :span="20"
      style="font-size: 18px"
    >
      <el-col style="font-size: 30px;line-height: 30px;margin-top:10px;margin-bottom: 10px;">
        代码测试:
        <el-button
          size="medium"
          type="ghost"
          @click="test"
        >
          点击测试
        </el-button>
      </el-col>
      <el-col
        :span="12"
        class="htmlContent"
      >
        <!--        <el-input v-model="originData" type="textarea" :autosize="{ minRows: 8 }"/>-->
        <jsonEditor v-model="originData" />
      </el-col>
      <el-col
        :span="12"
        class="htmlContent"
      >
        <!--        <el-input v-model="resultData" type="textarea" :autosize="{ minRows: 8 }"/>-->
        <jsonEditor v-model="resultData" />
      </el-col>
    </el-col>
    <el-col
      v-if="false"
      style="height: 600px"
    >
      <dv-flyline-chart-enhanced
        :config="config"
        style="width:100%;height:100%;"
      />
    </el-col>
    <el-col :span="12">
      <div style="height: 28px;overflow: hidden">
        <Roller :text="testNum.toLocaleString('en-US')" />
        <!--                <vue-number-counter class='my-number' :value="-17842.7129" :option='myOption' />-->
      </div>
      <Roller :text="testNum.toLocaleString('en-US')" />
      <count-to
        :start-val="0"
        :end-val="10.1"
        decimal="."
        :duration="2600"
        class="card-panel-num"
      />
    </el-col>
    <el-col>
      <div class="bottle-bg">
        <div
          :style="{bottom: '10px'}"
          class="bottle-cover"
        />
      </div>
      <div :class="[{contentTest: isActive}, {defaultTest: !isActive}]" />
      <el-color-picker
        v-model="color"
        size="medium"
        show-alpha
        :predefine="predefineColors"
      />
    </el-col>
    <el-col :span="11">
      <editor
        id="t1"
        v-model="myValue"
        :init="init"
      />
    </el-col>
    <el-col
      align="center"
      :span="2"
    >
      <el-button @click="outputHtml">
        生成代码
      </el-button>
      <editorImage
        class="editor-upload-btn"
        @successCBK="imageSuccessCBK"
      />
    </el-col>
    <el-col
      :span="11"
      class="htmlContent"
    >
      <span v-html="tinyHtml" />
    </el-col>
    <el-col>
      <div
        id="echart1"
        v-echart-resize
        style="height: 400px;width: 100%;margin-top:20px;background: #112439"
      />
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
// import ZCCard from './CommonTable/ZCCard'

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
// import 'tinymce/plugins'
import CountTo from 'vue-count-to'
import Roller from 'vue-roller'
import SwiperTest from './SwiperTest'
// import 'public/lineheight/plugin'
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
  let daytest = vm.$dayjs().subtract(1, 'day').format('YYYYMMDD')
export default {
  name: 'Demo',
  components: {
    // ZCCard,
    SwiperTest,
    CountTo,
    jsonEditor, Editor, editorImage,
    Roller
  },
  data() {
    let that = this
    return {
      scrollTimerA:null,
      scrollStyle: '',
      scrollPos: 0,
        tableData: [],
      tableColumn: [ // 表格配置
        { name: 'id', color: '#939393', titleColor: 'white',children: [
            {
              name: `${this.$tools.parseTime(daytest, '{y}')}名称`,
              value: 'name',
              color: '#939393',
              titleColor: 'white'
            },
            {
              name: `${this.$tools.parseTime(daytest, '{m}')}年龄`,
              value: 'age',
              color: '#939393',
              titleColor: 'white'
            }
          ] },
        {
          name: `${this.$tools.parseTime(daytest, '{d}')}工作`,
          value: 'job',
          color: '#939393',
          titleColor: 'white'
        }
      ],
      timeCas: {
        year: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032,2033,2034,2035,2036,2037,2038,2039,2040,2041,2042,2043,2044,2045,2046,2047,2048,2049,2050,2051,2052,2053,2054,2055,2056,2057,2058,2059,2060,2061,2062,2063,2064,2065,2066,2067,2068,2069,2070,2071,2072,2073,2074,2075,2076,2077,2078,2079,2080,2081,2082,2083,2084,2085,2086,2087,2088,2089,2090,2091,2092,2093,2094,2095,2096,2097,2098,2099,2100,2101,2102,2103,2104,2105,2106,2107,2108,2109,2110,2111,2112,2113,2114,2115,2116,2117,2118,2119,2120,2121,2122,2123,2124,2125,2126,2127,2128,2129,2130,2131,2132,2133,2134,2135,2136,2137,2138,2139,2140,2141,2142,2143,2144,2145,2146,2147,2148,2149,2150,2151,2152,2153,2154,2155,2156,2157,2158,2159,2160,2161,2162,2163,2164,2165,2166,2167,2168,2169,2170,2171,2172,2173,2174,2175,2176,2177,2178,2179,2180,2181,2182,2183,2184,2185,2186,2187,2188,2189,2190,2191,2192,2193,2194,2195,2196,2197,2198,2199],
        month: [1,2,3,4,5,6,7,8,9,10,11,12],
        day: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
        yearValue: '年',
        monthValue: '月',
        dayValue: '日'
      },
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
              formatter: function(val) {
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
  watch: {
    timeCas: {
      handler(val) {
        console.log(val)
      },
      deep: true
    }
  },
  mounted() {
    this.$API.mockTest().then(res => {
      this.tableData = res.data.rows
      this.scrollStart()
    })
    let testenv = process.env.VUE_APP_ODS_GET_API
    console.log(testenv)
    // echartsA
    let myId = document.getElementById('echartsA')
    let myChart = this.$echarts.init(myId)
    let option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }]
    }
    myChart.setOption(option)
    let today = this.$dayjs()
    let yesterday = today.subtract(1, 'day').format('YYYYMMDD')
    console.log(yesterday)
    this.$API.mockTest().then(res => {
    })
    for(let i = 0; i < 31; i++) {
      this.timeCas.day.push(1 + i)
    }
    console.log(JSON.stringify(this.timeCas.day))
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
    this.$tools.zcJsonCompare(newArray, 'name')
    let fff = this.$tools.objArrDuplicate(newArray, 'name')
    console.log(newArray)
    console.log(fff)
    this.myValue = ''
    let getID = document.getElementById('echart1')
    let thischart = echarts.init(getID)
    thischart.setOption(this.echartOpt)
  },
  methods: {
    scrollStart() {
      let topA = null
      let topB = null
      let domA = document.getElementById('scrollDivA')
      let domB = document.getElementById('scrollDivB')
      debugger
      topA = domA.clientHeight
      topB = domB.clientHeight
      let topArr = [topA, topB]

      let rolling = () => {
        clearInterval(this.scrollTimerA)
        this.scrollTimerA = setInterval(() => {
          this.scrollStyle = `transform:translateY(-${this.scrollPos}px)`
          this.scrollPos += 0.5
          if (this.scrollPos === topB) {
            console.log(topB)
            topArr.reverse()
            this.scrollPos = 0
            this.scrollStyle = `transform:translateY(0)`
            domA.style.top = topArr[1] + 'px'
            domB.style.top = topArr[0] + 'px'
            rolling()
          }
        }, 5)
      }
      rolling()
    },
    handleCommand(val, type) {
      let handle = {
        handleYear: () => {
          this.timeCas.yearValue = val
        },
        handleMonth: () => {
          this.timeCas.monthValue = val
        },
        handleDay: () => {
          this.timeCas.dayValue = val
        }
      }
      handle[type]()
    },
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
