var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output")

console.log(outputDiv.innerText);
outputDiv.innerText = "hello"
console.log(outputDiv.innerText);

console.log(txtInput);


function clickEventHandler() {
console.log("clicked :)");
console.log(txtInput.value)
}

btnTranslate.addEventListener("click", clickEventHandler);