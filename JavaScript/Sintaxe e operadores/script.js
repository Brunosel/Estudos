function operator(x, y) {
    var soma = x + y;
    if (x === y) {
        var compare = "são iguais";
    } else {
        compare = "não são iguais";
    }
    if (soma >= 10) {
        var compare10 = "maior do que 10";
        if (soma > 20) {
            var compare20 = "maior do que 20";
        } else if (soma === 20) {
             compare20 ="igual a 20";
        } else {
            compare20 ="menor do que 20";
        }
    } else if (soma === 10) {
        compare10 = "igual a 10";
    } else {
        compare10 = "menor do que 10";
    }
    return console.log(`Sua soma é ${soma}, os numeros ${x} e ${y} ${compare}, que é ${compare10} e ${compare20}`);
}

operator(10, 10);