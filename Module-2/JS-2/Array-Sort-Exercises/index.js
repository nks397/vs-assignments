// 1) Sort an array from smallest number to largest

const arr1 = [1, 3, 5, 2, 90, 20]

arr1.sort(function(a, b) {
  return a - b
});

console.log(arr1);

// 2) Sort an array from largest number to smallest

const arr2 = [1, 3, 5, 2, 90, 20]

arr2.sort(function(a, b) {
  return b - a
});

console.log(arr2);

// 3) Sort an array from shortest string to longest

const arr3 = ["dog", "wolf", "by", "family", "eaten"]

arr3.sort(function(a, b) {
  return a.length - b.length
});

console.log(arr3);

// 4) Sort an array alphabetically

arr4 = ["dog", "wolf", "by", "family", "eaten"]

arr4.sort()

console.log(arr4);

// 5) Sort the objects in the array by age

arr5 = [
  { name: "Quiet Samurai", age: 22 },
  { name: "Arrogant Ambassador", age: 100 },
  { name: "Misunderstood Observer", age: 2 },
  { name: "Unlucky Swami", age: 77 }
]

arr5.sort(function(a, b) {
  return a.age - b.age
});

console.log(arr5);

