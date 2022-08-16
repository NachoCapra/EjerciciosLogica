// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).


const convertirBinarioDecimal =(numero = undefined, base = undefined) =>{
    if(numero === undefined) return console.warn("no ingresaste el numero a convertir");
    if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado, no es un numero`);
    if(base === undefined) return console.warn('no ingresaste la base a convertir');
    if(typeof base !== "number") return console.error(`el valor ${base} ingresado no es un numero`)

    if(base === 2){
        return console.info(`${numero} base ${base} = ${parseInt(numero,base)} base 10`)
    }
}

console.log(convertirBinarioDecimal())





//16

const descuento = (descuento, cantidad) => {
    if(!descuento) return console.warn('no ingresaste el descuento');
    if(!cantidad)  return console.warn('no ingresaste la cantidad');
    if(Math.sign(descuento) === -1) return console.warn('no se aceptan numeros negativos')
    let rebaja = descuento * cantidad / 100
    return descuento - rebaja
}

console.log(descuento(1000,20))




//17.

const calcularAnios = (fecha=undefined) =>{
    if(fecha === undefined) return console.warn('no ingresaste la fecha')
    if(!(fecha instanceof Date)) return console.error("EL valor que ingresaste no es una fecha valida");

    let hoyMenosFecha = new Date().getTime() - fecha.getTime();
    let aniosEnMS = 1000 * 60 * 60 * 24 * 365
    let aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS)  

    return (Math.sign(aniosHumanos) === -1)
    ?console.info(`faltan ${Math.abs(aniosHumanos)} para el ${fecha.getFullYear()}`)
    :(Math.sign(aniosHumanos) === 1)
    ?console.info(`han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}`)
    :console.info(`Estamos en el año actual ${fecha.getFullYear()}`)
}