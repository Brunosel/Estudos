let array = [1, 3, 4, 6, 80, 33, 23, 90];

function substituirpares() {
    if (!array.length) {
        console.log('-1');
    }
    for (i = 0, x = array.length; i < x;i++) {
        if (array[i] % 2 === 0) {
            array[i] = 0;
        }
        console.log(array[i]);
    }
}

substituirpares();