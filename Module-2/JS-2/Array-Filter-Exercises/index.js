// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

const arr1 = [3, 6, 8, 2]

const result = arr1.filter(function(num) {
    if(num >= 5) {
        return num
    }
});
  console.log(result);

// 2) Given an array of numbers, return a new array that only includes the even numbers.

const arr2 = [3, 6, 8, 2]

const result2 = arr2.filter(function(num2) {
    if(num2 % 2 === 0){
        return num2
    }
  });
  console.log(result2);

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length.

arr3 = ["dog", "wolf", "by", "family", "eaten", "camping"]

const result3 = arr3.filter(characters => characters.length <= 5)
    
  console.log(result3);

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

const arr4 = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

const result4 = arr4.filter(function(restrict){
  if(restrict.member === true){
  return restrict
  }
});
console.log(result4);

// 5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)

const arr5 = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

const result5 = arr5.filter(matrix => matrix.age >= 18)
console.log(result5); 
