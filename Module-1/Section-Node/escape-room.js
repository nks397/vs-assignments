const readlineSync = require("readline-sync");   
const options = ['hole', 'key', 'door']

let isAlive = true
const index = readlineSync.keyInSelect (options, 'You are stuck in a room and have three options: put your hand in the hole, find the key, or open the door. ');

while (isAlive === true) {
    if(options[index]==='hole'){
    console.log ('You stuck your hand into the hole and felt a sharp pain in your palm. You immediately pulled your hand out to see that you were bitten by a snake. Stuck in the room and unable to recieve medical attention, you died. ')
 
    isAlive=false

    } else if(options[index]==='key') {
        console.log ('You searched every area of the room, until you spot a piece of metal hidden under a rug. Picking up the small object, you noticed it was the key.')
        const index2 = readlineSync.keyInYN ('You have found the key. Do you want to escape? ')
        if(index2===true) {
            console.log("The door is open. You have escaped. ")
        break
        }  else {
            isAlive=false
             console.log('You made the foolish decision to not escape the room and you, eventually, died. ')
         
            }
        
    } else if(options[index]==="door") {
        console.log ('You tried to open the door without the key. You remained trapped in the room and died.')
        break
    }
}
console.log(options[index]);
