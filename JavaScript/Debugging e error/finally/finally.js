import {
    verificaPalindromo
} from './Debugging e error/throw.js'

function tryCatchExemplo(string) {
    try {
        verificaPalindromo(string);
    } catch (error) {
        throw error;
    } finally {
        console.log('A string enviada foi: ' + string);
    }
} 

tryCatchExemplo('');