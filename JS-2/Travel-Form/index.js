const form = document.travelForm
const submit = document.travelForm.submit

function myForm() {
    const firstName = form.elements["first-name"].value;
    const lastName = form.elements["last-name"].value;
    const age = form.elements["age"].value;
    const gender = form.elements["gender"].value;
    const location = form.elements["travel-location"].value;
    const diet = [];
    if (form.elements.vegan.checked) {
        diet.push(document.getElementById("vegan").value);
    }if (form.elements.vegetarian.checked) {
        diet.push(document.getElementById("vegetarian").value);
    }if (form.elements.kosher.checked) {
        diet.push(document.getElementById("kosher").value);
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nLocation: " + location + "\nDietary Restrictions: " + diet)
}

submit.addEventListener("click", myForm);