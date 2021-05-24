// -------使用reduce实现-------

// -------计算数组中每一个元素出现的次数
// .
// .
// .
export const arrCounter = (arr) => {
  return arr.reduce((prev, cur) => {
    if(cur in prev){
      prev[cur]++
    }else{
      prev[cur] = 1
    }
    return prev // {key: number} 该返回值为一个数组值次数统计的解构
  },[])
}

// -------对象数组分类
// .
// .
// .
export const groupBy = (objArr,keyword) => {
  return objArr.reduce((prev, cur)=>{
    let key = cur[keyword]
    if(!prev[key]){
      prev[key] = []
    }
      prev[key].push(cur)
    return prev
  },{})
}

// -------JSON对象数组中的数组合并
// .
// .
// .
export const objArrMerge = (objArr, keyword) => {
  return objArr.reduce((prev,cur) => {
    return [...prev, ...cur[keyword]]
  },[])
}


// -------数组去重
// .
// .
// .


// -------使用reduce实现-------

// -------深拷贝
// .
// .
// .

// -------判断回文
// .
// .
// .

// 写一个计数器,包含增加功能和统计功能

// -------写一个掷色子模拟器
// .
// .
// .
