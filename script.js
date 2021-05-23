"use strict";
let temp = "";
let evalAns = "";
let sum = 0;
const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const ans = document.querySelector(".ans");
display.style.fontSize = "2rem";
ans.style.fontSize = "2rem";

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
        if (
            numbers[i].textContent !== "+" &&
            numbers[i].textContent !== "-" &&
            numbers[i].textContent !== "*" &&
            numbers[i].textContent !== "**" &&
            numbers[i].textContent !== "/" &&
            numbers[i].textContent !== "%" &&
            numbers[i].textContent !== "(" &&
            numbers[i].textContent !== ")" &&
            numbers[i].textContent !== "[" &&
            numbers[i].textContent !== "]" &&
            numbers[i].textContent !== "{" &&
            numbers[i].textContent !== "}" &&
            numbers[i].textContent !== "=" &&
            numbers[i].textContent !== "←" &&
            numbers[i].textContent !== "cls"
        ) {
            if (numbers[i].textContent === ".")
                temp = temp + numbers[i].textContent;
            else temp = temp + Number(numbers[i].textContent);
            display.textContent = temp;
        } else if (numbers[i].textContent === "=") {
            sum = eval(temp);
            ans.textContent = sum;
            temp = String(sum);
            ans.style.backgroundColor = "rgb(105, 210, 60)";
        } else if (numbers[i].textContent === "cls") {
            temp = temp.replace(temp, "");
            evalAns = evalAns.replace(ans, "");
            display.textContent = "Expression";
            ans.textContent = "Ans";
            ans.style.backgroundColor = "rgba(173, 173, 173, 0.61)";
        } else if (numbers[i].textContent === "←") {
            if (temp[temp.length - 1] === " ") {
                temp = temp.slice(0, -2);
            } else {
                temp = temp.slice(0, -1);
            }
            display.textContent = temp;
            ans.style.backgroundColor = "rgba(173, 173, 173, 0.61)";
        } else {
            temp = temp + " " + numbers[i].textContent + " ";
            display.textContent = temp;
            ans.style.backgroundColor = "rgba(173, 173, 173, 0.61)";
        }
    });
}
