#!/usr/bin/env node
import inquirer from "inquirer"
const input1 = await inquirer.prompt({
    name:  "weight",
    type: "number",
    message: "What is your wait in Kilogram?\n"
})
const input2 = await inquirer.prompt({
    name:  "height",
    type: "number",
    message: "What is your height in meter?\n"
})
console.log("About You:");
let BMI = input1.weight / (input2.height * input2.height);
if (BMI < 17){
    console.log(`Your BMI is: ${BMI}, Eat Healthy Food! You are weak.`);
}
else if (BMI >= 17 && BMI < 23){
    console.log(`Your BMI is: ${BMI}, You are a Healthy person.`);
}
else if (BMI >= 23){
    console.log(`Your BMI is: ${BMI}, Avoid Eating Junk Food! You are overweight`);
}
else {
    console.log("Kindly enter correct weight(in kg) and height(in m)");
}