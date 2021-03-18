const todoForm = document.getElementById("todo")
const doneBtn = document.getElementById("submit")
const todoList = document.getElementById("todo-list")
let editing = false

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
        const listItem = document.createElement("li")
        const title = document.createElement("h2")
        const description = document.createElement("p")
        const price = document.createElement("p")
        const image = document.createElement("img")
        const checkBox = document.createElement("input")
        const deleteBtn = document.createElement("button")
        const editBtn = document.createElement("button")

        listItem.classList.add("list-items" + data[i]._id)
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
        editBtn.classList.add("edit-btn" + data[i]._id)
        
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

        editBtn.addEventListener("click", function() {
            if(editing === false) {
                let querySelectedListItem = document.querySelector(".list-Item" + data[i]._id)

                let changeTitle = document.createElement("input")
                changeTitle.defaultValue = data[i].title
                changeTitle.classList.add("title" + data[i]._id); //Added unique classnams to inputs using id's to access later
                let changeDescription =  document.createElement("input")
                changeDescription.defaultValue = data[i].description
                changeDescription.classList.add("description" + data[i]._id);
                let changePrice = document.createElement("input")
                changePrice.classList.add("price" + data[i]._id);
                changePrice.defaultValue = data[i].price
                let changeImage = document.createElement("input")
                changeImage.classList.add("image" + data[i]._id);
                changeImage.defaultValue = data[i].imgUrl
                let querySelectedEditBtn = document.querySelector(".edit-Btn" + data[i]._id)
                querySelectedListItem.append(changeTitle)
                querySelectedListItem.append(changeDescription)
                querySelectedListItem.append(changePrice)
                querySelectedListItem.append(changeImage)
                querySelectedEditBtn.textContent = "submit"
            }
                if(editing === true) {
                    let querySelectedChangeTitle = document.querySelector(".title" + data[i]._id) //It didn't seem like JS knew which inputs I was talking about unless I did this querySelector overkill. I think the block scopes of these if statements have to do with that.  
                    let querySelectedChangeDescription = document.querySelector(".description" + data[i]._id)
                    let querySelectedChangePrice = document.querySelector(".price" + data[i]._id)
                    let querySelectedChangeImage = document.querySelector(".image" + data[i]._id)
                    let querySelectedEditBtn = document.querySelector(".edit-Btn" + data[i]._id) //did querySelector overkill with the edit button as JS also didn't know what I was talking about once I got into this if statement
                    let editItems = {
                        title: querySelectedChangeTitle.value,
                        description: querySelectedChangeDescription.value,
                        price: querySelectedChangePrice.value,
                        imgUrl: querySelectedChangeImage.value
                    }
                
                    axios.put("https://api.vschool.io/nyjiascott/todo/" + data[i]._id, editItems)
                        .then(response => getTodo(response.data)) //auto-update page after put request
                        .catch(error => console.log(error))
                    querySelectedChangeTitle.remove()
                    querySelectedChangeDescription.remove()
                    querySelectedChangePrice.remove()
                    querySelectedChangeImage.remove()
                    querySelectedEditBtn.textContent = "edit"
            }
            editing = !editing //This exclamation point means to make whatever comes after it the oppposite of what it is. This statement is saying editing will noq equal of what editing was previously
            return
        })

        deleteBtn.textContent = "delete"
        todoList.append(listItem)
        listItem.append(title, description, price, image, checkBox, deleteBtn, editBtn)
   
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
            // listItem.append(saveEditBtn)

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

        

            todoList.append(listItem)
            listItem.append(title, description, price, image, editBtn, deleteBtn)
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
                    .then(response => getTodo(response.data))
                    .catch(error => console.log(error))
                    
                    console.log("Is doneBtn working?")
            })
}

getTodo()