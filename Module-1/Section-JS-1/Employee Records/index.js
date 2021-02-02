var employees = []

function Employee(name, title, salary, status = "Full-time"){
    this.name = name
    this.title = title
    this.salary = salary
    this.status = status
}

    var person1 = new Employee("Tim", "Teacher", "$18/hour")
    var person2 = new Employee("Sarah", "Counselor", "$20/hour")
    var person3 = new Employee("Jill", "Administrator", "25/hour")

    function printEmployeeForm() {
    console.log(person1, person2, person3)
}

employees.push(person1, person2, person3)
console.log(employees)


