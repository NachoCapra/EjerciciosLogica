/*
6)Programa una función para contar el número de veces que se repite una palabra en un texto largo
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro),
 pe. mifuncion("Salas") devolverá true.

8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
 pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/



const textoEnCadena = (cadena = "", texto = "") =>{
    if(!cadena) return console.warn('no ingresaste texto largo')
    if(!texto) return console.warn('no ingresaste texto a evaluar')

    let i = 0,
    contador = 0;

    while(i!== -1) {
        i = cadena.indexOf(texto, i);
        if(i!== -1){
            i++
            contador++;
        }

    }
    return console.log(`La palabra ${texto} se repite ${contador} veces`)
    
}

textoEnCadena('hola mundo mundo','mundo');


//-------------------------------------------------------------------------------

//7


function esPalindromo(str){
    let array = str.split("");
    let reverse = array.reverse();
    return str == reverse.join("") ? true : false
}

console.log(esPalindromo('salas'))

//otra forma arrow function

const palindromo = (palabra = "") =>{
    if(!palabra) return console.warn('No ingresaste palabra/frase')
    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");

    return (palabra === alReves)
    ?console.info(`Si es palindromo, palaba original ${palabra}, palabra al reves ${alReves}`)
    :console.info(`No es palindromo, palaba original ${palabra}, palabra al reves ${alReves}`)
}

//8

const eliminarCaracteres = (texto = "", patron = "") =>{
    (!texto) 
    ?console.warn('no ingresaste el texto')
    :(!patron)
    ?console.warn('no ingresaste patron de caracteres')
    :console.info(texto.replace(new RegExp(patron,"ig"), ""))
}