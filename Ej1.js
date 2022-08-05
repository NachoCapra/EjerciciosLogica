//Programa una funcion que cuente el numero de caracteres de una cadena de texto, Ej: mifuncion('Hola Mundo') Dvolvera 10

function cantidad(valor){
    for(let i=0;i<valor.length;i++){
        return valor.length;
    }
}
console.log(cantidad('Hola mundo'))

//otra forma con arrow function

const contarCaracteres = (cadena = "") => 
(!cadena)
?console.warn('No ingresaste ninguna cadena')
:console.info(`La cadena ${cadena} tiene ${cadena.length} caracteres`)





//--------------------Programa una funcion que te devuelva un texto recortado segun el numero de caracteres indicados---------------




function caracteres(cadena,recorte){
    return cadena.substring(0,recorte)
}

console.log(caracteres('Hola mundo', 4))

//otra forma con arrow function 

const recortarTexto = (cadena = "",longitud = undefined) => 
(!cadena)
? console.warn('no ingresaste ninguna cadena')
: (longitud === undefined)
? console.warn('no ingresaste la longitud')
: console.info(cadena.slice(0,longitud))





//---------------------Programa una funcion que dada una string te devuelva un array de textos separados por cierto caracter-------------



function separar(cadenaADividir,separador) {
    let arrayDeCadenas = cadenaADividir.split(separador);
    return arrayDeCadenas;
    }


console.log(separar('hola que tal', ' '))

//Otra forma con arrow function 

const cadenaAArreglo = (cadena="", separador = "") =>
(!cadena)
?console.warn('no ingresaste cadena')
:(separador === undefined)
?console.warn('No ingresaste caracter separador')
:console.info(cadena.split(separador))





//Programa una funcion que repita un texto x veces , EJ: mifuncion('hola mundo' 3) devolvera hola mundo hola mundo hola mundo

function Repeat(cadena,veces){
    let cadenaRepetida = cadena.repeat(veces)
    return cadenaRepetida
}

console.log(Repeat('hola mundo ', 3))

//otra forma arrow function manejando posibles errores.

const repetirTexto = (texto = '', veces = undefined) => {
    if(!texto) return console.warn('No ingresaste texto');
    if(!veces || veces === 0) return console.warn('No ingresaste la cantidad de veces');
    if(Math.sign(veces) === -1) return console.error('el numero de veces no puede ser negativo')

    for(let i = 0; i<=veces;i++){
        console.info(`${texto}, ${i}`)
    }
}



//Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH" */

function invertirCadena(cad) {
    return cad.split("").reverse().join("");
}
console.log(invertirCadena("hola mundo"));