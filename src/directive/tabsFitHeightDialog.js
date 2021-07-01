export default {
  bind(el, binding, vnode) {
    // 找到祖先元素 el-dialog__body，并获取高度值
    setTimeout(() => {
      let dom = el
      while (dom.tagName !== 'BODY' && dom.className.indexOf('el-dialog__body') === -1) {
        dom = dom.parentNode
      }
      const dialogWrapperheight = dom.offsetHeight
      const tabsHeaderHeight = dom.querySelector('.el-tabs__header').offsetHeight
      const tabsContent = dom.querySelector('.el-tabs__content')
      const tabsContentHeight = dialogWrapperheight - tabsHeaderHeight - 20
      tabsContent.style.cssText = `overflow:auto;height:${tabsContentHeight}px`
    }, 50)
  }
}
