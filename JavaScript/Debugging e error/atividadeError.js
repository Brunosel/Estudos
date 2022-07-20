function meuErro(arr, number) {
    if (!arr && !number) throw new ReferenceError("Envie os parametros");

    if (typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo Object");
    if (typeof number !== 'number') throw new TypeError("Parametro de tamanho precisa ser do tipo Number");

    if (arr.length != number) throw new RangeError("Tamanho invalido");

    return arr;
}

function meuErroTry(arr, number) {
    try {
        if (!arr && !number) throw new ReferenceError("Envie os parametros");

        if (typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo Object");
        if (typeof number !== 'number') throw new TypeError("Parametro de tamanho precisa ser do tipo Number");
    
        if (arr.length != number) throw new RangeError("Tamanho invalido");
    
        return arr;
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError");
        } else if (error instanceof TypeError) {
            console.log("Este erro é um TypeError");
        } else if (error instanceof RangeError) {
            console.log("Este erro é um RangeError");
        } else {
            console.log("Erro não identificado");
        }
    }
}