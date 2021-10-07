var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output")

const text = txtInput.value;


function errorHandler(error) {
    console.log(error);
    alert("Something wrong with the server :(\nTry again after some time")
}

// Method - 1
// fetch(url)
//     .then(response => response.json())
//     .then(json => console.log(json))

// Method - 2
// fetch(url)
// .then(function responseHandler(response) { return response.json() })
// .then(function logJSON(json) { outputDiv.innerText = json; console.log(json)})

// console.log(outputDiv);


function clickEventHandler() {
    const text = txtInput.value;

    var url = "https://api.funtranslations.com/translate/minion.json?text=" + text
    // var url = "https://lessonfourapi.pnchinmay.repl.co/translate/yoda.json?text=" + text

    // outputDiv.innerText = "banana " + txtInput.value;

    // Method - 1 -- easier way
    fetch(url)
        .then(response => response.json())
        .then(json => {
            outputDiv.innerText = json.contents.translated;
            console.log(json.contents.translated)
        })
        .catch(errorHandler)

    // Method - 2
    // fetch(url)
    //     .then(function responseHandler(response) {
    //         return response.json()
        // })
        // .then(function logJSON(json) {
        //     outputDiv.innerText = json.contents.translated;
        //     console.log(json)
        // })
}

btnTranslate.addEventListener("click", clickEventHandler);