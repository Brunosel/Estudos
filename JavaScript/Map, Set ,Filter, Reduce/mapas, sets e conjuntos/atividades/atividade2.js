let numbers = [30, 30, 40, 5, 223, 2049, 3034, 5];
const mySet = new Set;

for (i = 0, x = numbers.length; i < x; i++) {
    mySet.add(numbers[i]);
}

console.log(mySet);

// function arraySet(arr) {
//     const mySet = new Set(arr);

//     return [...mySet]
// }

// console.log(arraySet(numbers));
