const form = document.addItem
const list = document.getElementById("list")
const items = form.items.value

form.addEventListener("submit", function(e) {
    if (form.items.value != "") {
        e.preventDefault() 
    } 

//create list
    const myList = document.createElement("li")
    list.append(myList)
  
// create div for list names
    const div = document.createElement("div")
    div.textContent = form.items.value
    myList.prepend(div)
    console.log ("hello")
  
// // create buttons
    const editBtn = document.createElement("button")
    editBtn.classList.add("change")
    editBtn.textContent = "edit"
    editBtn.style.margin = ("4px")
    myList.append(editBtn)

    editBtn.addEventListener("click", editItem)
    function editItem(event) {
        if(event.target.classList.contains("edit")){
            event.target.closest("li").edit();
        }
    }

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete");
    deleteBtn.textContent = "X"
    myList.append(deleteBtn)

   
    deleteBtn.addEventListener("click", deleteItem)
    function deleteItem(event) {
        // Determine if it was a delete button that was clicked
        if(event.target.classList.contains("delete")){
            // Remove the closest li ancestor to the clicked element
            event.target.closest("li").remove();
        } 
    }

form.items.value = ""

});























