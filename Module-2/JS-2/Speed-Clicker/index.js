const clickBtn = document.getElementById("clickMe")

let count = 0;
clickBtn.addEventListener("click", myBtn);
function myBtn() {
    console.log("hi")
    count += 1;
    let myCount = document.getElementById("counter")
    myCount.textContent = ("This button has been clicked: " + count)
    localStorage.setItem(myCount.textContent, ("This button has been clicked: " + count))
    localStorage.getItem(myCount.textContent)
}