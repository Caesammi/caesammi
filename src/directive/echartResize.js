import drevEcharts from 'echarts'
import { debounce } from './eResize'
let __resizeHandler = null

export default {
  inserted(el) {
    setTimeout(() => {
      let resizeDraw = drevEcharts.init(document.getElementById(el.id))
      __resizeHandler = debounce(() => {
        if (resizeDraw) {
          resizeDraw.resize()
        }
      }, 200)
      window.addEventListener('resize', __resizeHandler, true)
      window.addEventListener('click', __resizeHandler, true)
    }, 500)
  },
  unbind() {
    window.removeEventListener('resize', __resizeHandler, true)
    window.addEventListener('click', __resizeHandler, true)
  }
}
