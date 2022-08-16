// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.



//24


const Ordenados = (arr = undefined) =>{
    if(arr === undefined) return console.warn('No ingresaste un arreglo de numeros');
    if(!(arr instanceof Array)) return console.error('EL valor que ingresaste no es un arreglo')
    if(arr.length === 0) return console.error('EL arreglo esta vacio');

    for(let num of arr){
        if(typeof num !== 'number') return console.error(`El valor ${num} ingresado no es un arreglo, es un ${typeof num}`);
    }


    return console.info({
     arr,
     asc: arr.map(el => el).sort(),
     desc:arr.map(el => el).sort().reverse()
    })
}


//25

const Duplicados = (arr = undefined) =>{
    if(arr === undefined) return console.warn('No ingresaste un arreglo de numeros');
    if(!(arr instanceof Array)) return console.error('EL valor que ingresaste no es un arreglo')
    if(arr.length === 0) return console.error('EL arreglo esta vacio');

    return console.info({
     arr,
     sinDup : [... new Set(arr)]
    })
}

console.log(Duplicados([1,4,5,6,7]))

//26

const promedios = (arr = undefined) =>{
    if(arr === undefined) return console.warn('No ingresaste un arreglo de numeros');
    if(!(arr instanceof Array)) return console.error('EL valor que ingresaste no es un arreglo')
    if(arr.length === 0) return console.error('EL arreglo esta vacio');

    for(let num of arr){
        if(typeof num !== 'number') return console.error(`El valor ${num} ingresado no es un arreglo, es un ${typeof num}`);
    }


    return console.info(
        arr.reduce((total,num,index,arr) =>{
            total += num;
            if(index === arr.length-1){
                return `El promedio de ${arr.join(" + ")} es ${total /arr.length}`
            }
        })
    )
}