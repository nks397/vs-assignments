const xhr = new XMLHttpRequest()
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200) {
        const JSONdata = this.responseText
        const JSdata = JSON.parse(JSONdata)
        showData(JSdata.objects[0].pokemon)
    }
}

// Make each Pokemon's name show up on a separate line in the browser.

 function showData(arr) {
    for (let i = 0; i < arr.length; i++) {

    const h2 = document.createElement("h2")
    h2.textContent = arr[i].name
    document.body.append(h2)
    } 
 }