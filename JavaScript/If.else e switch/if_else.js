function numeroPositivo(num) {
    let resultado;
    
    if (num < 0){
        resultado = false;
    } else {
        resultado = true;
    }

    return resultado;
}

function numeroPositivo(num) {
    let resultado;

    const ehNegativo = num < 0;

    if (ehNegativo) {
        resultado = false;
    } else {
        resultado = true;
    }

    return resultado;
}

function numeroPositivo(num) {
    const ehNegativo = num < 0;

    if (ehNegativo) {
        return false;
    }
    return true;
}

// else if 

function numeroPositivo(num) {
    const ehNegativo = num < 0;
    const maiorDez = num > 10;

    if (ehNegativo) {
        return 'esse numero e negativo';
    } else if (!ehNegativo && maiorDez) {
        return 'esse numero e positivo e maior que dez'
    }

    return 'esse numero e positivo';
}