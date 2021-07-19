function toCelsius(amount) {
    return Math.round((5/9)*(amount - 32));
}

function toFahrenheit(amount) {
    return Math.round((9/5)*amount + 32);
}

function changeToCelsius() {
    const mainTemp = document.getElementById('degrees-amount');
    mainTemp.innerText = toCelsius(mainTemp.innerText);

    for (let i = 1; i < 8; i++) {
        let forTemp = document.getElementById(`forecast-day${i}-temp`);
        forTemp.innerText = toCelsius(forTemp.innerText);
    }

}

function ChangeToFahren() {
    const mainTemp = document.getElementById('degrees-amount');
    mainTemp.innerText = toFahrenheit(mainTemp.innerText);

    for (let i = 1; i < 8; i++) {
        let forTemp = document.getElementById(`forecast-day${i}-temp`);
        forTemp.innerText = toFahrenheit(forTemp.innerText);
    }
}

export {changeToCelsius, ChangeToFahren};