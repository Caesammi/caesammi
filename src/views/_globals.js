import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  // components 文件夹的相对路径
  './CommonTable',
  // 是否查找子文件夹
  true,
  // 用于匹配组件文件名的正则表达式
  /Zc[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)
  // 取得组件的 Pascal 式命名
  const componentName = upperFirst(
    camelCase(
      // 将文件名前面的 `'./` 和扩展名剥离
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )
  // 如果组件是通过 `export default` 导出，
  // 则在 `.default` 中，查找组件选项，
  // 否则回退至模块根对象中，查找组件选项
  Vue.component(componentName, componentConfig.default || componentConfig)
})
