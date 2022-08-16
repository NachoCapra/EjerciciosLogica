/*

12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.


*/



//12


function esPrimo (numero){
    let divisible = false;
    for(let i=2;i<numero;i++){
        if((numero % i) === 0){
            divisible = true;
            break;
        }
    }
    return (divisible)
    ?console.log(`el numero ${numero} es primo`)
    :console.log(`el numero ${numero} no es primo`)
}






//13

function esPar(numero){
    (!numero) 
    ? console.warn('debe ingresar numero')
    : (numero % 2 === 0)
    ? console.info(`El numero ingresado: ${numero} es par`)
    : console.info(`El numero ingresado: ${numero}, es Impar`)
}
esPar(10)

//otro metodo

function par(numero){
   if(!numero){
    console.log('ingrese numero por favor, vuelva a intentar')
   }if(numero % 2 === 0){
    console.log(`el numero ${numero} es par`)
   }else{
    console.log(`el numero ${numero} es impar`)
   }
}




//14

function celciusAFarenheit(formula){
    let conversor = (formula*9/5) + 32;
    return conversor;
}

function FarenheitACelcius(formula){
    let conversor = (formula-32)* 5/9
    return `${conversor.toFixed(1)}C°`
}





