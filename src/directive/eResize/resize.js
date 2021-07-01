import { debounce } from './index'

export default {
  props: {
    layoutFresh: {
      type: Number,
      default: 0
    },
    height: {
      type: String,
      default: '100%'
    },
    width: {
      type: String,
      default: '100%'
    }
  },
  data() {
    return {
      $_sidebarElm: null
    }
  },
  mounted() {
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHandler, true)

    // this.$_sidebarElm = document.getElementsByClassName('sidebar-container')[0]
    // this.$_sidebarElm && this.$_sidebarElm.addEventListener('transitionend', this.$_sidebarResizeHandler)
    // if (this.chart !== null) {
    //   setTimeout(() => {
    //     this.chart.resize()
    //   }, 1000)
    // }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.__resizeHandler)

    this.$_sidebarElm && this.$_sidebarElm.removeEventListener('transitionend', this.$_sidebarResizeHandler)
  },
  watch: {
    layoutFresh: function(val) {
      this.chart.resize()
    }

  },
  methods: {
    // use $_ for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
    $_sidebarResizeHandler(e) {
      if (e.propertyName === 'width') {
        this.__resizeHandler()
      }
    }
  }
}
