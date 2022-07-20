const user1 =  {
    id: 1
}

const user2 = {
    id: 3
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item) {
        return item * this.id;
    }, thisArg);
}

let nums = [1, 2, 3, 4];

console.log(mapComThis(nums, user1));