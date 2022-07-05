function findMax() {
    let max = -Infinity;

    for (let i = 0, x = arguments.length; i < x;i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

function showArgs() {
    return arguments;
}