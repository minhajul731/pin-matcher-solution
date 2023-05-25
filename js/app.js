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

// keypad catch from website and display
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const displayNumber = document.getElementById('display-number');
    if (isNaN(number)) {
        if (number == 'C') {
            displayNumber.value = '';
        }
    }
    else {
        const previousNumber = displayNumber.value;
        const presentNumber = previousNumber + number;
        displayNumber.value = presentNumber;
    }
});

// match pin
function verifyPin() {
    const generatePin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('display-number').value;
    const varifyFail = document.getElementById('match-fail');
    const varifySuccess = document.getElementById('match-success');
    if (generatePin == typedNumber) {
        varifySuccess.style.display = 'block';
        varifyFail.style.display = 'none';
    }
    else {
        varifySuccess.style.display = 'none';
        varifyFail.style.display = 'block';
    }
}