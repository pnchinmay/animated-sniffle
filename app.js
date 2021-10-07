var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output")

var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=I am Ironman"

fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))

// console.log(outputDiv);


function clickEventHandler() {
    outputDiv.innerText = "banana " + txtInput.value;
}

btnTranslate.addEventListener("click", clickEventHandler);