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
const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = jean.peso - 3 
var dias = 0
/*
while (condición) {
    // Este código se va a ejecutar siempre a menos que la condicion cambie
}
*/ 
while (jean.peso > META) {
    
    if(comeMucho()){
       //AumentoDePeso
        aumentarDePeso(jean)
    }
    if (realizaDeporte()){
        //adelgazar
        adelgazar(jean)
    }
    dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${jean.nombre} adelgazó 3kg.`)
