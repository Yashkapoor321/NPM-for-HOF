
const arrData = require('./index.js');

array = [1,1,2,2,3,3,4,5,6]

// Example Sum
let sumValue = arrData.sum(array)
console.log(`Sum = ${sumValue}`);

//Example average
let averageValue = arrData.average(array)
console.log(`Average = ${averageValue}`);

//Example maximum value
let maximumValue = arrData.max(array)
console.log(`MaxValue = ${maximumValue}`);

//Example minimum value
let minimumValue = arrData.min(array)
console.log(`MinValue = ${minimumValue}`);

//Example Filter value
let filterValue = arrData.filterNumber(array)
console.log(`Filter = ${filterValue}`);

//Example Unique value
let uniqueValue = arrData.unique(array)
console.log(`uniqueValue = ${uniqueValue}`);

//Example Square of an array
let squareOfArray = arrData.square(array)
console.log(`square of array = ${squareOfArray}`);

//Example to check no include or Not
let checkInclude = arrData.checkNoIncludeOrNot(array)
console.log(`Number include = ${checkInclude}`);

//Example Slice
let sliceResult = arrData.sliceMethod(array)
console.log(`Number after appling slice = ${sliceResult}`);

//Example Sort Decreasing value
let sortDecreasingOrder = arrData.sortDecreaseOrder(array)
console.log(`Array sort in decreasing order = ${sortDecreasingOrder}`);





