camp_states = new Map();

camp_states.set("FE", [
    "AL",
    "CA",
    "LA",
    "MI",
    "MO",
    "NC",
    "NH",
    "OH",
    "OK",
    "OR",
    "TX",
    "VA",
])

camp_states.set("ACA", [
    "AL",
    "AZ",
    "IA",
    "IL",
    "IN",
    "KS",
    "LA",
    "MI",
    "MO",
    "MS",
    "NE",
    "NH",
    "OH",
    "OK",
    "SC",
    "TX",
    "UT",
    "WI",
])

camp_states.set("SSDI", [
    "AL",
    "AR",
    "AZ",
    "CA",
    "CO",
    "CT",
    "DC",
    "DE",
    "IA",
    "ID",
    "IL",
    "IN",
    "KS",
    "KY",
    "LA",
    "MA",
    "MD",
    "ME",
    "MI",
    "MN",
    "MO",
    "MS",
    "MT",
    "ND",
    "NE",
    "NH",
    "NJ",
    "NM",
    "NV",
    "NY",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TX",
    "UT",
    "VA",
    "VT",
    "WA",
    "WI",
    "WV",
    "WY",
])

camp_states.set("MDQ", [
    "AZ",
    "CA",
    "CO",
    "CT",
    "FL",
    "GA",
    "IA",
    "IN",
    "KY",
    "LA",
    "ME",
    "MO",
    "NH",
    "NJ",
    "NV",
    "NY",
    "OH",
    "TN",
    "TX",
    "VA",
    "WA",
    "WI",
])
    
resultElement = document.getElementById('result')


function check(){
    let is_state_exists = false;
    inputtedState = document.getElementById('state').value.trim().toUpperCase()

    resultElement.textContent = "Loading..."
    resultElement.style.color = "black"

    camp_states.forEach((value, key, map) => {
        if (value.includes(inputtedState)) {
            if (!is_state_exists) {
                is_state_exists = true;
                resultElement.textContent = inputtedState + " STATE IS ACCEPTED FOR"
            }

            resultElement.textContent += " (" + key + ")"
            resultElement.style.color = "green"
        }
    })

    if (!is_state_exists) {
        resultElement.textContent = inputtedState + " STATE IS NOT ACCEPTED FOR ALL"
        resultElement.style.color = "red"
    } 
    
    
}