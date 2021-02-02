const readlineSync = require('readline-sync');

const greeting = readlineSync.question("Welcome to Bizzare Town, fresh meat! You're in for quite a ride. ")
const playerName = readlineSync.question('Give me your name newbie. ');
console.log('My name is ' + playerName + '.');
const index = readlineSync.keyIn("Hey " + playerName + ", enter 'w' to walk or 'q' to quit if, you're too chicken. ", {limit: "wpq"})

function MainCharacter(player, hp) {
    this.player = player;
    this.hp = hp;
}

function Enemies(enemyName, hp, summary, scenario, kryptonite, deathResponse, creatureAttack, weapon) {
    this.enemyName = enemyName;
    this.hp = hp;
    this.summary = summary;
    this.scenario = scenario;
    this.kryptonite = kryptonite;
    this.deathResponse = deathResponse;
    this.creatureAttack = creatureAttack;
    this.weapon = weapon;

}

let enemy = []
    let enemy1 = new Enemies("Ghoul", 100, ", the shape-shifting demon, ", " thick tree branch", " skull", "wailed", "slammed into you", "flail")
    let enemy2 = new Enemies("Gashadokuro", 100, ", the giant, starving, skeleton that feasts on human's blood, ", "metal pole laying on the ground", " knee caps", "cried out", "slapped you across the face with his boney hand. ", "crossbow")
    let enemy3 = new Enemies("Minotaur", 100, ", who has the body of a man and the head of a bull, ", " cracked wooden bat", " ribs", "gasped", "used his axe to slice your left arm. Luckily, you're right handed. ", "axe")
    let enemy4 = new Enemies("Draugur", 100, ", the monster that is undead with superhuman strength, ", " heavy wooden stick", " legs", "begged for mercy", "threw his spear into your right leg. ", "spear")

enemy.push(enemy1, enemy2, enemy3, enemy4)

let inventory = ["Monster"]

let player = new MainCharacter (playerName, 100)

let isAlive = true;
while (isAlive === true) {
    if(index === 'w') {
        walking ()   
    }else if(index === 'q') {
         console.log("Wow. I didn't take you as a quitter. ")
    break}
}

function walking () { 
 let random = Math.random(); 
 console.log(random)
    if(random > 0.70 ) {
        const index2 = readlineSync.keyIn("No enemies in sight. Keep walking 'w'. ", {limit: 'w'})
        if(index2 === 'w') {
        console.log("You continue on your journey. ")
        }
    } else {
        console.log(enemy.length)
        if(enemy.length <= 0) {
        console.log("You have defeated all of the enemies in Bizzare Town. Congratulations! You aren't a wimp after all. ")
        isAlive = false
        }else{
        enemyAppear()
        }
    }
}

function enemyAppear() {
    if(enemy.length <= 0) {
        console.log("You have defeated all of the enemies in Bizzare Town. Congratulations! You aren't a wimp after all. ")
        isAlive = false
    }else{
    let running = Math.random()
    let randomEnemy = enemy[Math.floor(Math.random() * enemy.length)]
        const index3 = readlineSync.keyIn("The enemy, " +randomEnemy.enemyName+ ", has appeared. Do you want to attack[a] or flee[f]?", {limit: 'af'})
        if(index3 === 'a') {
        console.log("You choose to attack. May the odds be in your favor.")
        attack(randomEnemy)
        }else if (index3 === 'f') {
        console.log("Fear took over you as you eye the creature. Like the coward you are, you attempt to flee Bizarre Town. ")
        flee(running)
        }
    }    
}

function attack(randomEnemy) {
    console.log(randomEnemy.enemyName + randomEnemy.summary + randomEnemy.creatureAttack)
    let playerLoseHp = Math.floor(Math.random()*100)
    let enemyLoseHp = Math.floor(Math.random()*100)
    
    console.log("You lose " + playerLoseHp + " health points.")
    console.log("Not giving up, you picked up a " + randomEnemy.scenario + " and swinged it as hard as you could against your enemy. You shattered the "+randomEnemy.enemyName+ "'s" + randomEnemy.kryptonite + " which caused him to lose " + enemyLoseHp + " health points.")
    console.log("While the " + randomEnemy.enemyName + " is stunned, you took his " + randomEnemy.weapon + " to finish him off. The demonic creature " + randomEnemy.deathResponse + " as you slaughtered him with his own weapon. ")
    console.log("Feeling victorious, you added the " + randomEnemy.weapon + " into your inventory and drank a Monster to replinish your energy. ")
    const randomEnemyIndex = enemy.indexOf(randomEnemy)
    enemy.splice(randomEnemyIndex, 1)
    inventory.push(randomEnemy.weapon)
    
    const index4 = readlineSync.keyIn("Do you want to check your inventory and continue [p] to embark on your journey into Bizarre Town or was that last enemy too much for you [q]?", {limit: "pq"})
    if(index4 === 'p'){
        console.log(inventory)
        console.log("After consuming the Monster, " + playerName + " has 100 health points.")
        console.log("You continue to walk through Bizzare Town. ")
        walking()
    } else if(index4 === 'q') {
        console.log("You couldn't take the heat, so you left Bizzare Town. ")
        isAlive = false
    }
}       

function flee(running) {
    if(running > 0.50) {
        console.log("Runnning full speed ahead, you escaped. ")
    } else {
        console.log("By trying to run away from the enemy, you tripped over a limb. The monstrous figure towered over you, ripping your leg out of your socket. Blood expeled everywhere as life drained from you and the final thought that crossed your mind as you took your final breath was, 'I died being a wimp'. ")
    isAlive = false
    }
}