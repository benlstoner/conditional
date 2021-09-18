var ele = document.body.querySelector(".box")
var eleAnswer = document.body.querySelector(".answer")

var numberOne=Number(prompt("Enter a number"));
var numberTwo=Number(prompt("Enter another number"));
var operator=prompt("Enter operator (* , + , - , /)")


//This is the conditional of the numbers

if (isNaN(numberOne)){
    ele.innerHTML="First number is invalid";
}else if(isNaN(numberTwo)){
    ele.innerHTML="Second number is invalid.";
}else if (operator!=="-" && operator!=="*" && operator!=="+" && operator!=="/"){
    ele.innerHTML="Operator is invalid";
}

if (operator === "+"){
    eleAnswer.innerHTML= numberOne += numberTwo;
}else if (operator === "-"){
    eleAnswer.innerHTML= numberOne -= numberTwo;
}else if (operator === "/"){
    eleAnswer.innerHTML= numberOne /= numberTwo;
}else if (operator === "*"){
    eleAnswer.innerHTML= numberOne *= numberTwo;
}















