function setRem () {
  const baseSize = 32 // 页面基准的文字大小 或者说是 元素大小 64px = 1rem
  const pageSize = 1920 // 页面基准的宽度
  const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
  const ratio = htmlWidth / pageSize // 计算页面实际宽度 与 页面基准宽度的比例
  // 得到html的Dom元素
  let htmlDom = document.getElementsByTagName('html')[0]
  // 设置根元素字体大小l
  if (htmlWidth <= 1300) {
    htmlDom.style.fontSize = baseSize * ratio + 'px' // 如果页面宽度 小于1920 （本地普通调试） 字体大小为1
  } else {
    htmlDom.style.fontSize = baseSize * ratio + 'px' // 计算缩放后的实际文字大小，字体大小乘上倍数
  }
}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}
