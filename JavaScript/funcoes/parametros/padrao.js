// pre ES-2015
function exponencial(array, num) {
    if (num === undefined) {
        num = 1;
    }

    const result = [];

    for (let i = 0, x = array.lenght; i < x;i++) {
        result.push(array[i] ** num);
    }
    return result;
}

// pos ES-2015
function exponencialn(array, num = 1) {
    const result = [];

    for (let i = 0, x = array.lenght; i < x;i++) {
        result.push(array[i] ** num);
    }
}