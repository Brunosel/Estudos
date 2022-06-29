function show_even(array) {
    let even_nums = [];
    for (let i = 0; i < 5; i++) {
        if (array[i] % 2 === 0) {
            even_nums.push(array[i]);
        } 
        else {
            console.log(`O numero ${array[i]} não é par`);
        }
    }
    console.log("Os numeros pares são:", even_nums);
}

let numbers = [1, 2, 3, 4, 5];

show_even(numbers);