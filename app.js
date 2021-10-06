var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

// 1. textarea tag
var textArea = document.querySelector("textarea")
console.log(textArea)
console.log("hello")

// 2. btn-primary class
var btnPrimary = document.querySelector(".btn-primary");
console.log(btnPrimary)
console.log("hello")

// 3. input-btn id
var inputBin = document.querySelector("#input-bin");
console.log(inputBin)
console.log("hello")

// 4. input element with attribute name="translator"
var translator = document.querySelector("input[name='translator']");
console.log(translator)
console.log("hello")




// console.log(txtInput);


function clickEventHandler() {
console.log("clicked :)");
console.log(txtInput.value)
}

btnTranslate.addEventListener("click", clickEventHandler);