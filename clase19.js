var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

//Metodo Arrowfunction
const esAlta = persona => persona.altura > 1.8
//Metodo largo
/*
const esAlta = (persona) => {
    return persona.altura > 1.8
}
*/

var personas = [sacha, alan, martin, dario, vicky, paula]
                                      //lleva una condición y debe ser una función  
var personasAltas = personas.filter(esAlta)


// var personasAltas = personas.filter(function (persona){
//     return persona.altura > 1.8
// })


//metodo largo
/*
const pasarAlturaACms = persona =>{
    //metodo abreviado
    //persona.altura *= 100
    //metodo largo
    //persona.altura = persona.altura * 100
    return {
        ...persona,
        altura: persona.altura * 100
    }
}
*/

//metodo arrowfunction
const pasarAlturaACms = persona => ({ 
    ...persona,
    altura: persona.altura * 100
})

//map nos devuelve un nuevo array
var personasCms = personas.map(pasarAlturaACms)

console.log(personasCms)

/*
//TRANSFORMAR UN ARRAY
En esta clase veremos cómo transformar un array. Él método macp() itera sobre los elementos de un array en el orden de inserción y devuelve array nuevo con los elementos modificados.

const pasarAlturaACms = (persona) => ({
    ...persona,
    altura: persona.altura * 100
})
var personaCms = personas.map(pasarAlturaACms)
console.log(personasCms)

1. Funciona así el map itera cada objeto del array y lo manda a la función.
2. Recibimos al objeto persona en la función.
3. Desglosamos a la persona en la función creando un nuevo objeto y modificamos el atributo altura, retornarndo el objeto nuevo modificado y se guardan el array nuevo modificado en la variable.

DIFERENCIA ENTRE MAP() Y FILTER()
1. La función map(), devuelve un nuevo array donde va a modificar cada uno de los elementos que le pasemos del array original, para evitar eso retornamos un nuevo objeto.
2. La filter lo que hace es filtrar y retorna un array con esos elementos filtrados.

PARA RETORNAR OBJETOS DESDE UN ARROW FUNCTION
1. Se colocan paréntesis, con esto decimos que es un objeto y no el cuerpo de la función | const hola = () => ({})

Esta función map(), devuelve un nuevo array pero si dentro de la función modificamos atributos de el objeto se modificará el array original.
*/