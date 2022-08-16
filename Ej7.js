// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

//21
const devolverCuadrados = (arr = undefined) => {

    if(arr === undefined) return console.warn('No ingresaste un arreglo de numeros');
    if(!(arr instanceof Array)) return console.error('EL valor que ingresaste no es un arreglo')
    if(arr.length === 0) return console.error('EL arreglo esta vacio');

    for(let num of arr){
        if(typeof num !== 'number') return console.error(`El valor ${num} ingresado no es un arreglo, es un ${typeof num}`);
    }

    const newArray = arr.map(el => el * el);
    
    return `Arreglo Original ${arr}, arreglo elevado al cuadrado ${newArray}`
}


console.log(devolverCuadrados([1,5,4,5]))


//22

const AltoyBajo = (arr = undefined) =>{
    if(arr === undefined) return console.warn('No ingresaste un arreglo de numeros');
    if(!(arr instanceof Array)) return console.error('EL valor que ingresaste no es un arreglo')
    if(arr.length === 0) return console.error('EL arreglo esta vacio');

    for(let num of arr){
        if(typeof num !== 'number') return console.error(`El valor ${num} ingresado no es un arreglo, es un ${typeof num}`);
    }

    return console.info(`Arreglo Original ${arr}\nValor Mayor ${Math.max(...arr)}\nValor Menor ${Math.min(...arr)}`)
}

console.log(AltoyBajo([1,4,5,6,7,-90]))



//23

const separarParesImpares = (arr = undefined) => {
    if(arr === undefined) return console.warn('No ingresaste un arreglo de numeros');
    if(!(arr instanceof Array)) return console.error('EL valor que ingresaste no es un arreglo')
    if(arr.length === 0) return console.error('EL arreglo esta vacio');

    for(let num of arr){
        if(typeof num !== 'number') return console.error(`El valor ${num} ingresado no es un arreglo, es un ${typeof num}`);
    }

    return console.info({
        pares: arr.filter(num => num % 2 === 0),
        impares: arr.filter(num => num % 2 === 1)
    })
}