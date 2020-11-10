// -------使用reduce实现-------
// 计算数组中每一个元素出现的次数
// .
// .
// .
let duplicateArr = [2,1,4,2,5,3,4,4,3,5,6]
let arrCount = function (arr) {
  return arr.reduce((prev, cur) => {
    if(cur in prev){
      prev[cur] ++
    }else{
      prev[cur] = 1
    }
    return prev
  }, {})
}



// 对象数组分类
let groupByArr = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 21
}]
// .
// .
// .
let groupBy = (objArr, keyword)=>{
  return objArr.reduce((prev, cur)=>{
    let key = cur[keyword]
    if(!prev[key]){
      prev[key]=[]
    }else{
      prev[key] = cur
    }
    return prev
  },{})
}
// 对象数组中的数组合并
// .
// .
// .
let rebuseObjArr = (objArr, keyword) => {
  return objArr.reduce((prev, cur)=>{
    let key = cur[keyword]
    return [...prev, ...key]
  },[])
}

// 数组去重
// .
// .
// .
// -------使用reduce实现-------
let obj1 = {
  a:'a',
  b:'b',
  c:'c'
}
let {a:my1,b:my2} = obj1

let obj2 = {
  dd:my1,
  ee:my2
}

// 深拷贝
let deepCopy = (value) =>{
  let result = value.constructor === Array ? [] : {}
  for(let [k, v] in Object.entries(value)){
    result[k] = typeof v === 'object' ? deepCopy(v) : v
  }
  return result
}

// 判断回文
let isPalindrome = (value) => {
  let n = value.length
  for(let i = 0; i< n/2; i++){
    if(value.charAt(i) !== value.charAt(n-i-1)){
      return false
    }
  }
  return true
}
export class Counter {
  count = 0

  constructor(name) {
    this.name = name
  }

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
// 写一个掷色子模拟器
export class rollS {
  constructor(name) {
    this.name = name
  }
  main(time){
    let SIDES = 6
    let sidesCount = []
    for(let i = 0;i<SIDES;i++){
      sidesCount.push(new Counter(SIDES + i))
    }
    for(let i = 0; i<time;i++){
      let pre = Math.floor(Math.random()*7)
      sidesCount[pre].increment()
    }
    return sidesCount
  }
}

