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
function imprimirSiEsMayorDeEdad(persona){
    console.log(`${persona.nombre}`)
    if(persona.edad >= 18){
        console.log('Es mayor de edad')
    }else{
        console.log('No es mayor de edad')
    }
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)
    
    if(persona.ingeniero){
        console.log('Ingeniero')
    }else{
        console.log('No es Ingeniero')
    }

    if(persona.cocinero){
        console.log('Cocinero')
    }

    if(persona.cantante){
        console.log('Cantante')
    }

    if(persona.dj){
        console.log('Dj')
    }

    if(persona.guitarrista){
        console.log('Guitarrista')
    }

    if(persona.drone){
        console.log('Piloto de Drone')
    }

}

//imprimirProfesiones(jeanpaul)
imprimirSiEsMayorDeEdad(jeanpaul)