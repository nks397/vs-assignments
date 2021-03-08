const readlineSync = require("readline-sync")
const statuses = ["Powered Up", "Big", "Small", "Dead"]
const namePicked = ["Mario", "Luigi"] 

class Player {
    constructor () {
        this.name = "";
        this.totalCoins = 0;
        this.status = "Small";
        this.hasStar = false;
        this.gameActive = true;
    }

    setName() {
        const names = readlineSync.keyInSelect(namePicked)
        if(names === 0) {
            this.name = "Mario "
        } else if(names === 1) {
            this.name = "Luigi"
        }
    }
   
    gotHit() {
        if(this.status === statuses[0] && this.hasStar === true) {
            console.log("Your star has protected you!")
            this.gameActive = false
        } else if(this.status === statuses[0]) {
            this.status = statuses[1]
            console.log("You got hit 🔨 !!!")
        } else if(this.status === statuses[1]) {
            this.status = statuses[2]
            console.log("You got hit 🔨 !!!")
        } else if(this.status === statuses[2]) {
            this.status = statuses[3]
            this.gameActive = false
            console.log("You got hit 🔨 !!!")
            console.log("You lost the game. You died ☠️ ")
            console.log(`Your final score was ${this.totalCoins}.`)
         }   
    } 

    addCoin() {
        this.totalCoins += 1
    }
   
    powerUp() {
        if(this.status === statuses[2]) {
            this.status = statuses[1]
        } else if(this.status === statuses[1]) {
            this.status = statuses[0]
        } else if(this.status === statuses[0]) {
            console.log("Congratulations! You got a star.")
            this.hasStar = true
        }
    }

    print() {
        let isAStar = ""
        if(this.hasStar === true){
            isAStar = "You have a ⭐"
        }

        console.log(`
        Name: ${this.name} 
        Total Coins: ${this.totalCoins}
        Status: ${this.status}
        ${isAStar}
        `)
         
    }  
} 

    const character = new Player();
    character.setName()
    function startGame() {
        const randomRange = Math.floor(Math.random() * 3)  

        if(randomRange === 0) {
            character.gotHit()
        } else if(randomRange === 1) {
            character.powerUp() 
        } else if(randomRange === 2) {
            character.addCoin()
        }
    
        if(character.gameActive === false) {
          clearInterval(intervalId)  
        }
        character.print()
 } 

    const intervalId = setInterval(startGame, 1500)