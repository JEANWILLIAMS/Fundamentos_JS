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
//MODO1
/*
function imprimirSiEsMayorDeEdad(persona){
    console.log(`${persona.nombre}`)
    if(persona.edad >= 18){
        console.log('Es mayor de edad')
    }else{
        consol e.log('No es mayor de edad')
    }
}
*/

//MODO 2
/*function imprimirSiEsMayorDeEdad(persona){
    if(persona.edad >= 18){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} no es mayor de edad`)111118ssssskdjkkkkdnmmdkkdn0pk vcfw.q´cjkplsomje``pkpknhuooiwaum-4yeekksjdoee9eidoeede'e'e'e'p'18
    }
}
*/
//MODO 3
const MAYORIA_DE_EDAD = 18

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