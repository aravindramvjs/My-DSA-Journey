const numberArray = [40, 1, 5, 200];


function compareNumbers(a, b) {
    return a - b;
  }

// numberArray.join(); // '40,1,5,200'
// numberArray.sort(); // [1, 200, 40, 5]
console.log(numberArray.sort(compareNumbers)); // [1, 5, 40, 200]