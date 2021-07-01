export default {
  bind(el, binding, vnode) {
    if (!binding.value) {
      return
    }
    const dialogWrapper = el
    const dialogFooter = dialogWrapper.querySelector('.el-dialog__footer')
    const dialog = dialogWrapper.querySelector('.el-dialog')
    dialogWrapper.style.cssText = 'position: absolute;'
    const dialogWrapperheight = dialogWrapper.offsetHeight
    const dialogBodyHeight = dialogWrapperheight - 51
    dialog.style.cssText = 'width:100%;margin:0'
    if (dialogFooter) {
      dialogFooter.style.cssText = 'display: none;'
    }
    setTimeout(() => {
      const dialogBody = dialogWrapper.querySelector('.el-dialog__body')
      dialogBody.style.cssText = `max-height:none;height:${dialogBodyHeight}px`
    }, 20)
  }
}
