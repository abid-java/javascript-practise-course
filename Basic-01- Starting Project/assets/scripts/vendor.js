const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-addition');
const subBtn = document.getElementById('btn-subtraction');
const mulBtn = document.getElementById('btn-multiplication');
const divBtn = document.getElementById('btn-divide');

const calculatedResult = document.getElementById('calculated-result');
const calculationResult = document.getElementById('current-calculation');

function outputResult(result, text) {
    console.log('<===== Testing - 1 =====>')
    calculatedResult.textContent = result;
    calculationResult.textContent = text;
    console.log('<===== Testing - 2 =====>')
}











