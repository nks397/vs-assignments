const todoForm = document.getElementById("todo")
const doneBtn = document.getElementById("submit")
const todoList = document.getElementById("todo-list")

function getTodo() {
axios.get("https://api.vschool.io/nyjiascott/todo")
    .then(response => listTodo(response.data))
    .catch(error => console.log(error))
    console.log("Is getTodo working?")   
}

function listTodo(data) {
    clearOut()
    console.log("Is listTodo working?")

    for(let i = 0; i < data.length; i++) {
        const listItems = document.createElement("li")
        const title = document.createElement("h2")
        const description = document.createElement("p")
        const price = document.createElement("p")
        const image = document.createElement("img")
        const checkBox = document.createElement("input")
        const deleteBtn = document.createElement("button")
        const editBtn = document.createElement("button")

        listItems.classList.add("list-items")
        title.textContent = data[i].title
        title.classList.add("title")
        description.textContent = data[i].description
        description.classList.add("description")
        price.textContent = data[i].price
        price.classList.add("price")
        image.src = data[i].imgUrl
        image.classList.add("image")
        checkBox.setAttribute("type", "checkbox")
        checkBox.classList.add("checkbox")
        deleteBtn.textContent = "Delete"
        deleteBtn.classList.add("delete-btn")
        editBtn.textContent = "Edit"
        editBtn.classList.add("edit-btn")

        if(data[i].completed === true) {
            title.style.textDecoration = "line-through"
            checkBox.checked = true
        }

        checkBox.addEventListener("click", function(){
            axios.put("https://api.vschool.io/nyjiascott/todo/" + data[i]._id, {completed: !data[i].completed})
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
            getTodo()
        })

        deleteBtn.addEventListener("click", function(event) {
            event.preventDefault()

            console.log("Is deleteBtn working?")

            axios.delete("https://api.vschool.io/nyjiascott/todo/" + data[i]._id)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
            getTodo()
        })
        
        // editBtn.addEventListener("click", function(event) {
        //     event.preventDefault()

            
            // const changeTitle = document.createElement("input")
            // changeTitle.placeholder = "Title"
            
            // const changeDescription = document.createElement("input")
            // changeDescription.placeholder = "Description"
            
            // const changePrice = document.createElement("input")
            // changePrice.placeholder = "Price"

            // const changeImage = document.createElement("input")
            // changeImage.placeholder = "Image"

            // function editToggleBtn() {
            //     if (editBtn.style.display === "none") {
            //         editBtn.style.display = "block";
            //       } else {
            //         editBtn.style.display = "none";
            //       }
            //     }
            //     editToggleBtn()
            
            // editBtn.append(changeTitle, changeDescription, changePrice, changeImage)
            
            // const editItems = {
            //     title: changeTitle.value,
            //     description: changeDescription.value,
            //     price: changePrice.value,
            //     image: changeImage.value
            // } 
            // console.log("editItems")

            // const saveEditBtn = document.createElement("button")
            // saveEditBtn.textContent = "save"
            // listItems.append(saveEditBtn)

            // saveEditBtn.addEventListener("submit", function(event) {
            //     event.preventDefault() 

            //     changeTitle.textContent = changeTitle.value
            //     changeDescription.textContent = changeDescription.value
            //     changePrice.textContent = changePrice.value
            //     changeImage.textContent = changeImage.value
            
            //     console.log("saveEdit")
            // })

            // axios.put("https://api.vschool.io/nyjiascott/todo/" + data[i]._id, editItems)
            //     .then(response => console.log(response.data))
            //     .catch(error => console.log(error))

            //     console.log("Is editBtn working?")
        // })

            todoList.append(listItems)
            listItems.append(title, description, price, image, editBtn, deleteBtn)
            title.prepend(checkBox)
    
            console.log("Is for loop working?")
    }

            function clearOut(){
                const clear = todoList
                while(clear.firstChild){
                    clear.removeChild(clear.firstChild)
                }
                console.log("Is clearOut working?")
            }

            todoForm.addEventListener("submit", function(event) {
                event.preventDefault()

                const newItems = {
                    title: todoForm.title.value,
                    price: todoForm.price.value,
                    description: todoForm.describe.value,
                    imgUrl: todoForm.photo.value
                }

                todoForm.title.value = "",
                todoForm.price.value = "",
                todoForm.describe.value = "",
                todoForm.photo.value = ""

                axios.post("https://api.vschool.io/nyjiascott/todo", newItems)
                    .then(response => getTodo())
                    .catch(error => console.log(error))
                    
                    console.log("Is doneBtn working?")
            })
}

getTodo()