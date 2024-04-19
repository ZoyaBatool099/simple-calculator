#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstnumber" },
  { message: "Enter your second number", type: "number", name: "secondnumber" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);

// conditional statement
if (answer.operator === "addition") { 
    console.log( + answer.firstnumber + answer.secondnumber);
} else if(answer.operator === "subtraction") {
    console.log( + answer.firstnumber - answer.secondnumber);
}  else if(answer.operator === "multiplication") {
    console.log( + answer.firstnumber * answer.secondnumber);
}  else if(answer.operator === "division") {
    console.log( + answer.firstnumber / answer.secondnumber);
} else {
    console.log("Please select valid operator")



    
}

console.log('THE END');


