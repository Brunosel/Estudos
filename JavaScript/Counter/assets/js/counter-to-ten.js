var numberbox = document.getElementById('number');
var Current_number = 0;

function decrement() {
    if (Current_number > 0) {
        Current_number = Current_number - 1;
        numberbox.innerHTML = Current_number;
    }
}

function increment() {
    if (Current_number < 10) {
        Current_number = Current_number + 1;
        numberbox.innerHTML = Current_number;
    }
}