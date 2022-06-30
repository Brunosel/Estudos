var numberbox = document.getElementById('number');
var Current_number = 0;

function decrement() {
    Current_number--;
    numberbox.innerHTML = Current_number;
    if (Current_number < 0) {
        numberbox.style.color = 'red';
    } 
}

function increment() {
    Current_number++;
    numberbox.innerHTML = Current_number;
    if (Current_number >= 0) {
        numberbox.style.color = 'black';   
    }
}