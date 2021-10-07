var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output")

console.log(outputDiv);


function clickEventHandler() {
    outputDiv.innerText = "banana " + txtInput.value;
}

btnTranslate.addEventListener("click", clickEventHandler);