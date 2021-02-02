var readline = require("readline-sync");

var math = function(num1, num2, oper) {
  this.one = parseInt(num1);
  this.two = parseInt(num2);
  this.oper = oper;

  this.result = function() {
    var one = this.one;
    var two = this.two;
    var oper = this.oper;

    if (oper === "add") {
      var result = one + two;
    } else if (oper === "mul") {
      var result = one * two;
    } else if (oper === "div") {
      var result = one / two;
    } else if (oper === "sub") {
      var result = one - two;
    }
    console.log ("The result is: " + result);
  };
}

var num1 = readline.question("Please enter your first number. ");
readline.question(num1)

var num2 = readline.question( "Please enter your second number. ");
readline.question(num2)

var oper = readline.question("Please enter the operation to perform: add, sub, mul, div. ");
readline.question(oper)


var calc = new math(num1, num2, oper);

calc.result();
