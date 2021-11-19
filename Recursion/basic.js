// Two essential parts of a recursive func:
// 1. base case
// 2. different input

function sumRange(num) {
  if (num === 1) return 1; //base case
  return num + sumRange(num - 1); //(num-1) is the different input
}

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// Where things usually go wrong
// 1. No base case
// 2. Forgetting to return or returning the wrong thing
// 3. Stack overflow

// Helper method recursion
// functio outer(input){
//     var outerScopedVariable = []
//     function helper(helperInput){
//         //modify the outerScopedVariable
//         helper(helperInput--)
//     }
//     helper(input)
//     return outerScopedVariable;
// }

function collectOddValues(arr) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }

  helper(arr);
  return result;
}

// Pure Recursion
function collectOddValues_pure(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValues_pure(arr.slice(1)));
  return newArr;
}

//console.log(collectOddValues([1, 2, 3, 4, 5]));
