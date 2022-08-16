/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.


10) Programa una función que reciba un número y evalúe si es capicúa o no
 (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.


11) Programa una función que calcule el factorial de un número
 (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.


*/ 





//9

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

//otra forma arrow function

const aleatorio = () => console.log(Math.round((Math.random() * 100) + 500));


//10 

const capicua = (numero = 0) =>{
    if (!numero) return console.warn("no ingresaste numero");
    if(typeof numero !== "number") return console.error(`el valor ${numero} ingresado no es un numero`);

    numero = numero.toString();
    let alReves = numero.split("").reverse().join("");
    return (numero === alReves)
    ?console.info(`es capicua, numero original ${numero} , numero al reves ${alReves}`)
    :console.info(`no es capicua, numero original ${numero} , numero al reves ${alReves}`)
}

//otro metodo sin validacion

function esCapicua(numero){
    numero = numero.toString();
    let alReves = numero.split("").reverse().join("");
    if(numero === alReves){
        return(`es Capicua, numero ingresado ${numero} ,numero al reves ${alReves}`)
    }else{
        return(`No es Capicua, numero ingresado ${numero} ,numero al reves ${alReves} `)
    }
}

console.log(esCapicua(2002))


//11 (incluye recursividad.) 

let resultado;
const factorial = function(num){
    if(num === 0){
        return 1
    }else{
        if(num<0){
            console.log('pone un numero positivo')
        }else{
            return(resultado = num * factorial(num-1))
        }
    }
}


console.log(factorial(5))


//Otra opcion


function esFactorial(numero){
    let factorial = 1;
    for(let i=numero;i>1;i--){
        factorial *= i;
    }
    return `el factorial de ${numero} es ${factorial}`
}

console.log(esFactorial(5))
