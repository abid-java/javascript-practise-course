const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-addition');
const subBtn = document.getElementById('btn-subtraction');
const mulBtn = document.getElementById('btn-multiplication');
const divBtn = document.getElementById('btn-divison');

const currentResult = document.getElementById('initial-result');
const calculationResult = document.getElementById('current-calculation');

function outputResult(result, text) {
    currentResult.textContent = result;
    calculationResult.text = text;
}











