const clickBtn = document.getElementById("clickMe")
let count = 0;

clickBtn.addEventListener("click", myBtn);


function myBtn() {
    count += 1;
    let myCount = document.getElementById("counter")
    myCount.textContent = ("Clicks: " + count)
    localStorage.setItem("clicker", count)
}
    if (localStorage.getItem("clicker") === null) { 
        localStorage.setItem("clicker", 0)
    }

    myCount = JSON.parse(localStorage.getItem("clicker"))

