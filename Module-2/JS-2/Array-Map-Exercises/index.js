// 1) Make an array of numbers that are doubles of the first array

const arr1 = [2, 5, 100]

const result1 = arr1.map(num => num * 2);
  
console.log(result1);

// 2) Take an array of numbers and make them strings

const arr2 = [2, 5, 100]

const result2 = arr2.map(num => num.toString());
  
console.log(result2);

// 3) Capitalize each of an array of names

const arr3 = ["john", "JACOB", "jinGleHeimer", "schmidt"]

const result3 = arr3.map(name => name.charAt(0).toUpperCase() + name.substr(1).toLowerCase());
 
console.log(result3);

// 4) Make an array of strings of the names

function namesOnly(arr4){
    return arr4.map(i => i.name)
}

const people = (namesOnly([
  {
      name: "Angelina Jolie",
      age: 80
  },
  {
      name: "Eric Jones",
      age: 2
  },
  {
      name: "Paris Hilton",
      age: 5
  },
  {
      name: "Kayne West",
      age: 16
  },
  {
      name: "Bob Ziroll",
      age: 100
  }
])); 
console.log(people)

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
const arr5 = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

const result5 = arr5.map(function(matrix){
  if(matrix.age >= 18) {
    return(matrix.name + " can go to The Matrix")
  } else if(matrix.age < 18) {
    return(matrix.name + " is underage!!")
  }
});
console.log(result5)

// 6) Make an array of the names in h1s, and the ages in h2s

const arr6 =  [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

const result6 = arr6.map(function(DOM){
  return "<h1>" + DOM.name + "</h1>" + "<h2>" + DOM.age + "</h2>" 
});
console.log(result6); 