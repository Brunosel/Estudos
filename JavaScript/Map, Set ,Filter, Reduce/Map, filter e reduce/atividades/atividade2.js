let number = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];

function filtraPar(arr) {
    return arr.filter((number) => number % 2 === 0);
}

console.log(filtraPar(number));

