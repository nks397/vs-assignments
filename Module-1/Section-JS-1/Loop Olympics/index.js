// Preliminaries

// Write a for loop that prints to the console the numbers 0 through 9.

for(var i = 0; i <= 9; i ++) {
    console.log(i)
}

// Write a for loop that prints to the console 9 through 0.

for(var i = 9; i >= 0 ; i--) {
    console.log(i)

}

// Write a for loop that prints these fruits to the console.
// var fruit = ["banana", "orange", "apple", "kiwi"]

for(var i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
}

// Bronze Medal

// Write a for loop that will push the numbers 0 through 9 to an array.

var num = []

for(var i = 0; i <= 9; i++){
    num.push(i);
}  
   console.log(num); 

// Write a for loop that prints to the console only even numbers 0 through 100.

for(var i = 0; i <= 100; i++) {
    if((i % 2) === 0){
        console.log(i)
    }
}

// Write a for loop that will push every other fruit to an array.

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var newArr = []
for(var i = 0; i < fruit.length; i++) {
    if((i % 2) === 0){
    newArr.push(fruit[i])
    }
}
console.log(newArr)
