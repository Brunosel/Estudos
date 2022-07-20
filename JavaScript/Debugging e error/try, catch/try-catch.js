import {
    verificaPalindromo
} from './Debugging e error/throw.js'

function tryCatchExemplo(string) {
    try {
        verificaPalindromo(string);
    } catch (error) {
        console.log(error);
    }
} 

tryCatchExemplo('');