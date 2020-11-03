let duplicateArr = [2,1,4,2,5,3,4,4,3,5,6]
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
