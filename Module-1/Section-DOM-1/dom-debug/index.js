const colors = ["red", "blue", "green"]

const add = document.getElementById("add")
add.addEventListener("click", function(e){
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
    // console.log("Hi")
})

function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option") 
        option.text = colors[i]
        option.value = colors[i]
        dropDown.append(option)

        console.log(option.value)
    }
    dropDown.addEventListener("change", colorChange)
    return dropDown
}

  var red = colors[0]
  var blue = colors[1]
  var green = colors[2]

function colorChange(e) {
    const subItem = e.target.parentElement
    console.log(subItem)
    if (e.target.value === red) {
      subItem.style.backgroundColor = "red";
    } else if (e.target.value === green) {
      subItem.style.backgroundColor = "green";
    } else if (e.target.value === blue) {
      subItem.style.backgroundColor = "blue";
    }
}

function createSubItem(){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input")
    subItem.textContent = subItemValue.value
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    
    return subItem

}