// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.




//18

const VocalesConsonantes = (texto) =>{
return `Vocales: ${texto.replace(/[^aeiouAEIOU]/g,'').length} , Consonantes ${texto.replace(/[ aeiouAEIOU]/g,'').length}`
}

console.log(VocalesConsonantes('Hola mundo'))



//19

const validarNombre = (texto) =>{
if(typeof texto === 'string'){
return 'Nombre Valido'
}else{
    return 'Nombre invalido'
}
}






//20

const validarEmail = (email) => {
if(!email) return console.warn('no ingresaste email');
if(typeof email !== 'string') return console.error('no ingresaste texto')
if(email.includes('@gmail.com') || email.includes('@hotmail.com') || email.includes('@outlook.es')){
    return `Email Valido`;
}else{
    return `No es un email valido`
}
}

console.log(validarEmail('jonathanmircha@gmail.com'))


