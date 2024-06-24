function summation(x,y,z){
  this.add = x + y +z
}
const sum = Reflect.construct(summation, [1,2,3,4,5])
console.log(sum)

// Result: summation {add: 6}
