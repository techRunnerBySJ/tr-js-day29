// Currying in JavaScript
function multiply(a) {
    return function(b) {
      return a * b;
    };
  }
  
  const multiplyByTwo = multiply(2);
  const multiplyByThree = multiply(3);
  
  console.log(multiplyByTwo(5)); // 10
  console.log(multiplyByThree(5)); // 15
  