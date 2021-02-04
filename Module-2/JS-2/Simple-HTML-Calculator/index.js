 document.body.style.backgroundColor = "#30475e"
 document.body.style.textAlign = "center"
 document.body.style.margin = "auto"
 document.body.style.padding = "250px"

const addBtn = document.getElementById("addBtn").addEventListener("click", (addFunc));
function addFunc() {

    const aFirstNumber = parseInt(document.getElementById("aFirstNumber").value)
    const aSecondNumber = parseInt(document.getElementById("aSecondNumber").value)
   
    const result = (aFirstNumber + aSecondNumber)
    document.body.append("Result: " + result)
    
}

const subBtn = document.getElementById("subBtn").addEventListener("click", (subFunc));
function subFunc() {

    const sFirstNumber = parseInt(document.getElementById("sFirstNumber").value)
    const sSecondNumber = parseInt(document.getElementById("sSecondNumber").value)
   
    const result = (sFirstNumber - sSecondNumber)
    document.body.append("Result: " + result)
}

const mulBtn = document.getElementById("mulBtn").addEventListener("click", (mulFunc));
function mulFunc() {

    const mFirstNumber = parseInt(document.getElementById("mFirstNumber").value)
    const mSecondNumber = parseInt(document.getElementById("mSecondNumber").value)
   
    const result = (mFirstNumber * mSecondNumber)
    document.body.append("Result: " + result)

}

