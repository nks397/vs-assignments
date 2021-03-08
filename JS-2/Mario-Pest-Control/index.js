const form = document.pestControl
const submitBtn = document.pestControl.submit
const total = document.getElementById("totalCost")

submitBtn.addEventListener("click", function(e) {
    e.preventDefault()

    let goombasTotal = form.elements["total-goombas"].value
    let bobombsTotal = form.elements["total-bob-ombs"].value
    let cheepCheepsTotal = form.elements["total-cheep-cheeps"].value
    let goombasPrice = goombasTotal * 5
    let bobombsPrice = bobombsTotal * 7
    let cheepCheepsPrice = cheepCheepsTotal * 11
    total.textContent = "Total: " + (goombasPrice + bobombsPrice + cheepCheepsPrice) + " Coins"
});
