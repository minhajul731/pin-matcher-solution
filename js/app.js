// create pin and return it
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

// generate pin and display it 
function getGeneratedPin() {
    const generatePin = getPin();
    document.getElementById('display-pin').value = generatePin;
}