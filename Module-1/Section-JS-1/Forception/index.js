var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet){
var newArr = []

  for(var i = 0; i < people.length; i++ ) {
    newArr.push(people[i])
    // console.log(newArr)
    for(var j = 0; j < alphabet.length; j++) {
      var upper = alphabet.toUpperCase()
      var abcSplit = upper.split("")
    
      newArr.push(abcSplit[j])
    } 

    }console.log(newArr)
}
 
forception(people, alphabet)

