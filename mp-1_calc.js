// Addition
function doAdd() {
    let input1 = document.getElementById("first-number").value;
    input1 = Number(input1);
    let input2 = document.getElementById("second-number").value;
    input2 = Number(input2);
    let result = input1 + input2;
    displayResult(result);
}

// Subtraction
function doSubtract() {
    let input1 = document.getElementById("first-number").value;
    input1 = Number(input1);
    let input2 = document.getElementById("second-number").value;
    input2 = Number(input2);
    let result = input1 - input2;
    displayResult(result);
}

// Multiplication
function doMultiply() {
    let input1 = document.getElementById("first-number").value;
    input1 = Number(input1);
    let input2 = document.getElementById("second-number").value;
    input2 = Number(input2);
    let result = input1 * input2;
    displayResult(result);
}

// Division
function doDivide() {
    let input1 = document.getElementById("first-number").value;
    input1 = Number(input1);
    let input2 = document.getElementById("second-number").value;
    input2 = Number(input2);
    let result = input1 / input2;
    displayResult(result);
}

// Power
function doPower(){
    let input1 = document.getElementById("first-number").value;
    input1 = Number(input1);
    let input2 = document.getElementById("second-number").value;
    input2 = Number(input2);

    let result = 1;

    for(let i = 0; i < input2; i++) {
        result = input1 * result;
    }
    displayResult(result);
}

// Clear
function doClear() {
    document.getElementById("first-number").value="";
    document.getElementById("second-number").value="";
    document.getElementById("output").innerHTML="";
}

// Result function
function displayResult(result) {
    let outputElement = document.getElementById('output');
    outputElement.innerHTML = result;

    if (result < 0) {
        outputElement.style.color = 'red';
    } else {
        outputElement.style.color = '#033E3E';
    }
}