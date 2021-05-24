<template>
    <div class="NumberPanel-wrap__pxtorem">
        <div class="box-item">
            <li :class="{'number-item': !isNaN(item), 'mark-item': isNaN(item) }"
                v-for="(item,index) in orderNum"
                :key="index">
          <span v-if="!isNaN(item)">
            <i :ref="id">.0123456789</i>
          </span>
                <span class="comma" v-else>{{item}}</span>
            </li>
        </div>
    </div>
</template>
<script>
export default {
  name: 'NumberPanel',
  props: {
    numberData: {
      type: Number,
      default: 6319
    },
    id: {
      type: String,
      default: 'numberItem'
    }
  },
  data() {
    return {
      orderNum: ['0', '0', '0', '0', '0'],
      timer: null
    }
  },
  mounted() {
    this.timer = setTimeout(() => {
      this.toOrderNum(this.numberData)
    }, 1000)
  },
  beforeDestroy() {
    clearTimeout(this.timer)
  },
  methods: {
    // 设置文字滚动
    setNumberTransform() {
      const numberItems = this.$refs[this.id] // 拿到数字的ref，计算元素数量
      const numberArr = this.orderNum
      // 结合CSS 对数字字符进行滚动,显示订单数量
      for (let index = 0; index < numberItems.length; index++) {
        const elem = numberItems[index]
        elem.style.transform = `translate(-50%, -${numberArr[index + 1] * 13}%)`
      }
    },
    // 处理总订单数字
    toOrderNum(num) {
      num = num.toString()
      console.log(num)
      // 把订单数变成字符串
      if (num.length < 5) {
        num = '0' + num // 如未满八位数，添加"0"补位
        this.toOrderNum(num) // 递归添加"0"补位
      } else if (num.length === 5) {
        // 订单数中加入逗号
        // num = num.slice(0, 2) + ',' + num.slice(2, 5) + ',' + num.slice(5, 8)
        this.orderNum = num.split('') // 将其便变成数据，渲染至滚动数组
      } else {
        // 订单总量数字超过八位显示异常
        this.$message.warning('总量数字过大')
      }
      this.setNumberTransform()
    }
  },
  watch: {
    numberData: function(val) {
      this.toOrderNum(val)
    }
  }
}
</script>
<style lang='less' scoped>
.NumberPanel-wrap__pxtorem {
    /*订单总量滚动数字设置*/
    .box-item {
        margin-top: -2px;
        height: 31px;
        overflow: hidden;
        position: relative;
        /* width: 100%; */
        font-weight: bold;
        font-size: 23px;
        line-height: 20px;
        text-align: center;
        list-style: none;
        color: #f6d22a;
        text-shadow: 1px 0px 20px #f6d22a;
        -webkit-writing-mode: vertical-lr;
        -ms-writing-mode: tb-lr;
        writing-mode: vertical-lr;
        text-orientation: upright;
        position: relative;
    }
    /* 默认逗号设置 */
    .mark-item {
        width: 10px;
        height: 100px;
        margin-right: 5px;
        line-height: 10px;
        font-size: 48px;
        position: relative;
        & > span {
            position: absolute;
            width: 100%;
            bottom: 0;
            writing-mode: vertical-rl;
            text-orientation: upright;
        }
    }
    /*滚动数字设置*/
    .number-item {
        width: 26px;
        height: 75px;
        background-size: 100% 100%;
        list-style: none;
        border-radius: 4px;
        & > span {
            position: relative;
            display: inline-block;
            margin-right: 10px;
            width: 100%;
            height: 100%;
            writing-mode: vertical-rl;
            text-orientation: upright;
            overflow: hidden;
            & > i {
                font-style: normal;
                position: absolute;
                top: 6px;
                left: 50%;
                transform: translate(-50%,0);
                transition: transform 1s ease-in-out;
                letter-spacing: 10px;
            }
        }
    }
    .number-item:last-child {
        margin-right: 0;
    }
}
</style>
