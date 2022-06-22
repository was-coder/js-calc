let first_number = parseFloat(prompt("Enter first number : "));
let operator = prompt("Enter Operator (+, -, *, or /) : ");
let second_number = parseFloat(prompt("Enter second number : "));

let result;

const perform_operation = () => {
  if (operator == "+") {
    result = first_number + second_number;
    alert(`${first_number} + ${second_number} = ${result}`);
  } else if (operator == "-") {
    result = first_number - second_number;
    alert(`${first_number} - ${second_number} = ${result}`);
  } else if (operator == "*") {
    result = first_number * second_number;
    alert(`${first_number} * ${second_number} = ${result}`);
  } else if (operator == "/") {
    result = first_number / second_number;
    alert(`${first_number} / ${second_number} = ${result}`);
  } else {
    alert("Invalid Operator");
  }
};

perform_operation();
