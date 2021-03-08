// 1) Turn an array of numbers into a total of all the numbers

const arr1 = [1,2,3]

const result1 = arr1.reduce(function(final, sum) {
    final += sum
   return(final)
});

console.log(result1);

// 2) Turn an array of numbers into a long string of all those numbers.

const arr2 = [1,2,3]

const result2 = arr2.reduce(function(final, nums) {
    const string = final.length ? "" : "";
  return final + string + nums;
});

console.log(result2); // "123"


// 3) Turn an array of voter objects into a count of how many people voted

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const result = voters.reduce(function(final, people) {
    if(people.voted) {
        final ++
    }
    return final

},0);

console.log(result);

// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]

const total = wishlist.reduce(function(final, list) {
   return final + list.price
}, 0);


console.log(total);

// 5) Given an array of arrays, flatten them into a single array

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

const flatten = arrays.reduce(function(final, nums) {
    return final.concat(nums)
});

console.log(flatten);

// 6) Given an array of potential voters, return an object representing the results of the vote
// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    return arr.reduce(function (final, people) {
        if(people.age >= 18 & people.age <= 25) {
            final.numYoungPeople ++
            if(people.voted){
                final.numYoungVotes ++
            } 
        }

        if(people.age >= 26 & people.age <= 35) {
            final.numMidPeople ++
            if(people.voted) {
                final.numMidVotes ++
            } 
        }

        if(people.age >=36 & people.age <= 55) {
            final.numOldPeople ++
            if(people.voted) {
                final.numOldVotes ++
            } 
        } 
        return final
        
    }, {numYoungVotes: 0, numYoungPeople: 0, numMidVotes: 0, numMidPeople: 0, numOldVotes: 0, numOldPeople: 0});
}
console.log(voterResults(voters)); 