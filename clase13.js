var jean = {
    nombre : 'Jean Paul',
    apellido : 'Williams',
    edad : 31,
    peso : 75
}

console.log(`Al inicio del año ${jean.nombre} pesa ${jean.peso}kg`)

//Modo tradicional
/*
function aumentarDePeso(persona) {
    return persona.peso += 200
}
*/

//Modo Arrowfunction
const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
    var random = Math.random()

    if(random < 0.25) {
        //aumentar de peso
        aumentarDePeso(jean)
    }else if(random < 0.5){
        //adelgazar
        adelgazar(jean)
    }
}

console.log(`Al final del año ${jean.nombre} pesa ${jean.peso.toFixed(1)}kg`)

