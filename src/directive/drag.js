export default {
    bind(el) {
        let oDiv = el
        let oDivChild = el.childNodes[0]
        // 禁止选择网页上的文字
        document.onselectstart = function() {
            return false
        }
        oDivChild.onmousedown = function(e) {
            // 鼠标按下，计算当前元素距离可视区的距离
            let disX = e.clientX - oDiv.offsetLeft
            let disY = e.clientY - oDiv.offsetTop
            document.onmousemove = function(e) {
                // 通过事件委托，计算移动的距离
                let l = e.clientX - disX
                let t = e.clientY - disY
                // 移动当前元素
                oDiv.style.left = l + 'px'
                oDiv.style.top = t + 'px'
            }
            document.onmouseup = function(e) {
                document.onmousemove = null
                document.onmouseup = null
            }
            return false
        }
    }
}
