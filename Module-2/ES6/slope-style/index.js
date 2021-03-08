// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

const collectAnimals = (...pets) => pets;

console.log (collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));

// Write a function that returns a food object with the array names as properties using Object Literals:

const combineFruit = (fruit, sweets, vegetables) => ({fruit, sweets, vegetables})

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))

// Use destructuring to use the property names as variables. Destructure the object in the parameter:

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
    };
    
    const parseSentence = ({location, duration}) => `We're going to have a good time in ${location} for ${duration}.`
    
    console.log(parseSentence(vacation))

// Use destructuring to make this code ES6:****

const returnFirst = (items) => {
  const [firstItem] = items 
  return firstItem
}
console.log(returnFirst(["blue", "orange", "red"]))
// ***NOTE: Why cant I use a fat arrow on line 29? If I wanted to get the second item, how would I do that?

// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:
// 
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
  let[firstFav, secondFav, thirdFav]=arr
     return `My top three favorite activities are ${firstFav}, ${secondFav} and ${thirdFav}.`
}

console.log(returnFavorites(favoriteActivities))

// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

const combineAnimals = (...animals) => [].concat(...animals)

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)); 

// Try to make the following function more ES6xy:

const product = (...num) => {
  let numbers = [...num];
    return numbers.reduce((acc, number) => acc * number, 1)
  } 
  console.log(product(2,5))

// Make the following function more ES6xy. Use at least both the rest and spread operators: **

const ES6xy = (array, ...abc) => array.concat(...abc)
console.log(ES6xy([2, 4, 6],"a", "b", "c", "d", "e"))


// Write some destructuring code to help this function out. Use object literals to simplify it:
// **
const populatePeople = (names) => names.map((name) => {
  name = name.split(" ");
  ({firstName, lastName} = {firstName: name[0], lastName: name[1]})
  return {
    firstName: firstName,
    lastName: lastName
  }
});

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
