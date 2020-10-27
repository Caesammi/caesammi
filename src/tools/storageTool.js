// storage-start

//算法数据生成
export const readInts = (lo, hi) => {
  return Math.floor(Math.random()*(hi - lo) + lo)
}

export const setSession = (key, value) => {
  sessionStorage.setItem(key, value)
}

export const getSession = (key) => {
  return sessionStorage.getItem(key) || ''
}

export const removeSession = (key) => {
  return sessionStorage.removeItem(key)
}

export const setLocal = (key, value) => {
  localStorage.setItem(key, value)
}

export const getLocal = (key) => {
  return localStorage.getItem(key) || ''
}

export const removeLocal = (key) => {
  return localStorage.removeItem(key)
}
// storage-end

// 数组对象搜索
export const zcJsonSearch = (arr, key, keyword) => {
  let zcResult = arr.filter((item) => {
    return item[key] === keyword
  })
  if (zcResult[0]) {
    return zcResult
  } else {
    return '无匹配'
  }
}

// 翻转字符串
export const zcStringReverse = (value) => {
  return value.split('').reverse().join('')
}

// get拼接字符串
export const zcQs = (url, value) => {
  let param = value
  let query = ''
  Object.keys(param).forEach((item, index) => {
    if (param[item]) {
      query += `${index === 0 ? '?' : '&'}${item}=${param[item]}`
    }
  })
  return `${url}${query}`
}

// 判断IOS安卓
export const zcMobileDevice = () => {
  let u = navigator.userAgent
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
  let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
  if (isAndroid) {
    return 'android'
  }
  if (isiOS) {
    return 'ios'
  }
}

// 数组对象排序
export const zcJsonCompare = (value, key) => {
  let myCompare = function(val) {
    value.sort((a, b) => {
      let value1 = a[val]
      let value2 = b[val]
      return value1 - value2
    })
  }
  return value.sort(myCompare(key))
}

// 数字排序
export const zcNumberCompare = (value) => {
  let myCompare = function(a, b) {
    if (a < b) { return -1 }
    if (a > b) { return 1 }
    return 0
  }
  return value.sort(myCompare)
}

// JSON 数字属性求和
export const zcJsonSum = (value, key) => {
  let EE = []
  value.forEach((a, i, n) => {
    EE.push(n[i][key])
  })
  return EE.reduce((prev, cur, index, array) => {
    return prev + cur
  })
}

// 数组去重
export const zcQuchong = (value) => {
  return [...new Set(value)]
}

// 获取时间范围内所有日期数组

export const zcDateArr = (begin, end) => {
  let datetimeparse = (timestamp, format, prefix) => {
    if (typeof timestamp === 'string') {
      timestamp = Number(timestamp)
    }
    // 转换时区
    let currentZoneTime = new Date(timestamp)
    let currentTimestamp = currentZoneTime.getTime()
    let offsetZone = currentZoneTime.getTimezoneOffset() / 60 // 如果offsetZone>0是西区，西区晚
    let offset = null
    // 客户端时间与服务器时间保持一致，固定北京时间东八区。
    offset = offsetZone + 8
    currentTimestamp = currentTimestamp + offset * 3600 * 1000

    let newtimestamp = null
    if (currentTimestamp) {
      if (currentTimestamp.toString().length === 13) {
        newtimestamp = currentTimestamp.toString()
      } else if (currentTimestamp.toString().length === 10) {
        newtimestamp = currentTimestamp + '000'
      } else {
        newtimestamp = null
      }
    } else {
      newtimestamp = null
    }
    let dateobj = newtimestamp ? new Date(parseInt(newtimestamp)) : new Date()
    let YYYY = dateobj.getFullYear()
    let MM = dateobj.getMonth() > 8 ? dateobj.getMonth() + 1 : '0' + (dateobj.getMonth() + 1)
    let DD = dateobj.getDate() > 9 ? dateobj.getDate() : '0' + dateobj.getDate()
    let HH = dateobj.getHours() > 9 ? dateobj.getHours() : '0' + dateobj.getHours()
    let mm = dateobj.getMinutes() > 9 ? dateobj.getMinutes() : '0' + dateobj.getMinutes()
    let ss = dateobj.getSeconds() > 9 ? dateobj.getSeconds() : '0' + dateobj.getSeconds()
    let output = ''
    let separator = '/'
    if (format) {
      separator = format.match(/-/) ? '-' : '/'
      output += format.match(/yy/i) ? YYYY : ''
      output += format.match(/MM/) ? (output.length ? separator : '') + MM : ''
      output += format.match(/dd/i) ? (output.length ? separator : '') + DD : ''
      output += format.match(/hh/i) ? (output.length ? ' ' : '') + HH : ''
      output += format.match(/mm/) ? (output.length ? ':' : '') + mm : ''
      output += format.match(/ss/i) ? (output.length ? ':' : '') + ss : ''
    } else {
      output += YYYY + separator + MM + separator + DD
    }
    output = prefix ? (prefix + output) : output

    return newtimestamp ? output : ''
  }
  let arr1 = begin.split('-')
  let arr2 = end.split('-')
  let arr1_ = new Date()
  let arrTime = []
  arr1_.setUTCFullYear(arr1[0], arr1[1] - 1, arr1[2])
  let arr2_ = new Date()
  arr2_.setUTCFullYear(arr2[0], arr2[1] - 1, arr2[2])
  let unixDb = arr1_.getTime()
  let unixDe = arr2_.getTime()
  for (let k = unixDb; k <= unixDe;) {
    arrTime.push(datetimeparse(k, 'yyyy-MM-DD'))
    k = k + 24 * 60 * 60 * 1000
  }
  console.log(arrTime)
  return arrTime
}

// 清空对象
export const zcClearObj = (value) => {
  // eslint-disable-next-line no-return-assign
  Object.keys(value).forEach((key) => value[key] = '')
}

// 日期格式化
export const zcGetDate = (pastHour) => {
  // eslint-disable-next-line no-extend-native
  Date.prototype.Format = function(fmt) {
    let o = {
      'M+': this.getMonth() + 1, // 月份
      'd+': this.getDate(), // 日
      'h+': this.getHours(), // 小时
      'm+': this.getMinutes(), // 分
      's+': this.getSeconds(), // 秒
      'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
      'S': this.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (let k in o) {
      // eslint-disable-next-line eqeqeq
      if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
    return fmt
  }
  if (pastHour) {
    // 获取之前的时间
    return new Date(new Date().getTime() - pastHour * 60 * 60 * 1000).Format('yyyy-MM-dd hh:mm:ss')
  } else {
    return new Date(new Date().getTime()).Format('yyyy-MM-dd hh:mm:ss')
  }
}

// 时间戳转换成日期
export const timestempToTime = (value) => {
  let date = new Date(value) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let Y = date.getFullYear() + '-'
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ''
  let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
  let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
  let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
  return Y + M + D + ' ' + h + m + s
}

// 检测是否是null 或 undefine
export const zcUndefined = (value) => {
  return !(value === undefined || value === null)
}

// 模糊搜索
export const zcFuzzyQuery = (value, key, keyword) => {
  let reg = new RegExp(keyword, 'i') // i不区分大小写
  let arr = []
  for (let i = 0; i < value.length; i++) {
    if (reg.test(value[i][key])) {
      arr.push(value[i])
    }
  }
  return arr
}

// 返回按照指定几率 返回true/false (抛硬币)
export const RandomBernoulli = (key) => {
  if(typeof key === "number" && key>=0 && key<= 1){
    return Math.random() >= key
  }else{
    return '无效值'
  }
}

//计数器类
export class Counter {
  constructor(name) {
    this.name = name
  }
  count = 0
  increment = () => {
    this.count++
  }
  tally = () => {
    return this.count
  }
  toString = () => {
    return this.count.toString()
  }
}

//抛硬币类
export class Flips {
  constructor(name) {
  this.name = name
  }
  main(args) {
    let T = parseInt(args[0])
    let heads = new Counter('heads')
    let tails = new Counter('tails')
    for(let t = 0; t < T; t++){
      if(RandomBernoulli(0.5)){
        heads.increment()
      }else{
        tails.increment()
      }
    }
    console.log(heads)
    console.log(tails)
    let d = heads.tally() - tails.tally()
    console.log('delta:' + Math.abs(d)) // Math.abs 返回指定数字的绝对值
  return {
      heads:heads,
      tails:tails,
      delta:Math.abs(d)
    }
  }
}

