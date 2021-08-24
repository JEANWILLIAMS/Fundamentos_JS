var jeanpaul = {
    nombre: "Jean Paul",
    apellido: "Williams",
    edad: 31,
    ingeniero: false,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: false,
}

var benjamin = {
    nombre : "Benjamin",
    apellido : "Williams",
    edad: 05 
}

const MAYORIA_DE_EDAD = 18

//arrow function - colocar "constant" 
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD


function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log('te faltan '+ (18 - (persona.edad)) + ' años para ser mayor de edad.')
    }
}

//CASO PRACTICO CON IF MODO ARROW FUNCTIONS
const permitirAcceso = ({ edad }) => !esMayorDeEdad ({ edad }) ?
    console.log("Acceso denegado") : console.log("Adelante")


/*  //MODO TRADICIONAL  
function permitirAcceso(persona) {
    if(!esMayorDeEdad(persona)) {
        console.log('ACCESO DENEGADO')
    }
}
*/
/*
function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log('te faltan '+ (18 - (persona.edad)) + ' años para ser mayor de edad.')
    }
}
*/

/* 
En esta clase aprenderemos OTRA FORMA DE ESCRIBIR LAS FNCIONES con Arrow Functions que permiten una nomenclatura más corta para escribir expresiones de funciones.
Este tipo de funciones deben definirse antes de ser utilizadas.

Al escribir las Arrow Functions no es necesario escribir la palabra function, la palabra return ni las llaves.
EN JS EXISTE OTRA MANERA DE ESCRIBIR FUNCIONES (es una variable que es una función)

1. Asignamos a una variable una función | var esMayorDeEdad = function(persona) {return persona.edad >= MAYORIA_DE_EDAD}
2. Eso es una función anónima porque no tiene nombre, pero esa función si la asignamos a una variable que si tiene nombre y se invoca como una función normal, es una variable que es una función.

OTRA FORMA DE HACER ESTO CON UN ARROW FUNCTIONS
const esMayorDeEdad = (persona) => {
    return persona.edad >= MAORIA_DE_EDAD}
1. Esta función es la misma que la anterior.
2. Y si tenemos un solo parámetro podemos obviar los paréntesis

Arrow functions (es equivalente a una función llamada esMayorDeEdad, con parámetros y dentro de la flecha retornaría eso que sería el cuerpo de la función)
    const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

Es equivalente a una función llamada esMayorDeEdad, le vamos a mandar un objeto y de ese objeto vamos a agarrar el atributo edad y dentro de la flecha retornaría eso (sería el cuerpo de la función)
    const esMayorDeEdad = {( edad )} => edad >= MAYORIA_DE_EDAD

Vimos funciones anónimas (una variable que es una función), los arrow function son funciones más simplificadas donde podemos retornar algún valor de forma simplificada
AL MOMENTO DE LLAMARLAS Y PASAR PARAMETROS ES TODO IGUAL.
*/