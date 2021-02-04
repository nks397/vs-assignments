const form = document.pestControl
const submitBtn = document.pestControl.submit
const total = document.getElementById("totalCost")

submitBtn.addEventListener("click", function(e) {
    e.preventDefault()

    let goombasTotal = form.elements["total-goombas"].value
    let bobombsTotal = form.elements["total-bob-ombs"].value
    let cheepCheepsTotal = form.elements["total-cheep-cheeps"].value
    let newGoomba = parseInt(goombasTotal) * 5
    let goombasPrice = newGoomba
    let newBobombs = parseInt(bobombsTotal) * 7
    let bobombsPrice = newBobombs
    let newCheepCheeps = parseInt(cheepCheepsTotal) * 11
    let cheepCheepsPrice = newCheepCheeps
    total.textContent = ("Total: " + (goombasPrice + bobombsPrice + cheepCheepsPrice) + " Coins")
});
