let jsonUrl = "https://script.google.com/macros/s/AKfycbxwjrXvG5HKtsBWMp-zEQjavsljKm_ys6EsqpxknK0gCe4MqocZkaxI6qjTmshlngnv4w/exec";

let jsonData = {};

resultElement = document.getElementById('result');

function errorDisplay(text, error) {
    console.error(error);
    resultElement.textContent = text;
    resultElement.style.color = "red";
}

function finishLoading() {
    document.getElementById('form').style.display = "block";
    resultElement.style.color = "black";
    resultElement.textContent = "";
}

function check(){
    let is_state_exists = false;
    inputtedState = document.getElementById('state').value.trim().toUpperCase();

    resultElement.textContent = "Loading...";
    resultElement.style.color = "black";

    if (!jsonData) {
        errorDisplay("An error has occured!\n Please retry!", error);
        return;
    }

    Object.entries(jsonData).forEach(([key, value]) => {

        let hasState = value.find(state => state.code.includes(inputtedState));
        
        if (hasState) {
            if (!is_state_exists) {
                is_state_exists = true;
                resultElement.textContent = inputtedState + " STATE IS ACCEPTED FOR";
            }

            resultElement.textContent += " (" + key + ")";
            resultElement.style.color = "green";
        }
    })

    if (!is_state_exists) {
        resultElement.textContent = inputtedState + " STATE IS NOT ACCEPTED FOR ALL";
        resultElement.style.color = "red";
    } 
    
}

fetch(jsonUrl)
    .then(response => response.json()
        .then((data) => {
            jsonData = data;
            finishLoading();
        })
    )
    .catch(error => errorDisplay("An error has occured!\n Please retry!", error));


resultElement.textContent = "Loading...";
resultElement.style.color = "black";