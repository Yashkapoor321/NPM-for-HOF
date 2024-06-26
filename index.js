// Sum all elements in an array
const sum  = (arr)=> {
 return arr.reduce((acc, val) => acc + val, 0);
}

// Calculate the average of an array
const average = (arr)=> {
    return sum(arr) / arr.length;
  }

// maximum value in an array
const max = (arr)=> {
    return Math.max(...arr);
  }

// minimum value in an array
const min = (arr)=> {
    return Math.min(...arr);
  }

//Filter Number > 4
const filterNumber = (arr) => {
  return arr.filter((num) => num > 4 )
} ;

//unique elements from an array
const unique = (arr)=> {
    return Array.from(new Set(arr));
  }

// Sort array in decreasing Order
const sortDecreaseOrder = (arr)=> {
  return arr.sort((a, b) => {
    return b - a;
  })
}
//Square of array
const square = (arr) => {
  return arr.map(element => {
   return element * element
  });
}

//Number includes or not
const checkNoIncludeOrNot = (arr) =>{
  return arr.includes(4)
}

//Slice
const sliceMethod = (arr) => {
  return arr.slice(2, 7)
}
  
  module.exports = {
    sum,
    average,
    max,
    min,
    filterNumber,
    unique,
    sortDecreaseOrder,
    square,
    checkNoIncludeOrNot,
    sliceMethod
  };