// Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.

var greeting = "hello"

function myFunc1(greeting) {
    var uppercasedString = greeting.toUpperCase()
    // console.log(uppercasedString)

    var lowercasedString = greeting.toLowerCase()
    // console.log(lowercasedString)

    var upperLower = uppercasedString.concat(lowercasedString) 
    // console.log(upperLower)
    return upperLower
    }
myFunc1(greeting)

// Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.

var fruit = "blueberry"

function myFunc2(fruit) {
    var x;
    if(fruit.length % 1 === 0) {
        x = (fruit.length/2)
} 
    // console.log(x)
    var integer = Math.floor(x);
    console.log(integer)

}
myFunc2(fruit)

// Write a function that uses slice() and the other functions you've written to return the first half of the given string.

var makeOfCar = "Nissan"

function myFunc3(makeOfCar) {
    var halfWayThrough = makeOfCar.length / 2
    var stringSliced = makeOfCar.slice(0, halfWayThrough)

    console.log(stringSliced)

}
myFunc3(makeOfCar)

// Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.

var makeOfCar = "Nissan"

function myFunc4(makeOfCar) {
    var firstHalf = makeOfCar.length / 2
    var stringSliced = makeOfCar.slice(0, firstHalf)
    var upper = stringSliced.toUpperCase()

    console.log(upper)
    
    var secondHalf = makeOfCar.length / 2
    var stringSliced2 = makeOfCar.slice(secondHalf)
    var lower = stringSliced2.toLowerCase()

    console.log(lower)
    
}
myFunc4(makeOfCar)