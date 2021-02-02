// Write a function that takes an array of numbers and returns the largest (without using Math.max())

let myNums = [5, 2, 8, 25, 16];

let maxNum = myNums.reduce(function(num1, num2) {
    // ternary operator: conditional statement, if true, if false
    return (num1 > num2) ? num1 : num2;
});

console.log(maxNum);

// Write a function that takes an array of words and a character and returns each word that has that character present.

let myArray = ["Hi!", "Hey!", "Hola$$$"]

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i].includes("!"))
  }


// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
function isDivideBy(num1, num2) {
    return num1 % num2 === 0
  }
  isDivideBy(4, 2)
