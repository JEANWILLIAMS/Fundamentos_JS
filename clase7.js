var JeanPaul = {
    //clave   //valor string, booleanos, enteros y/o funciones
    nombre : 'Jean Paul',
    apellido : 'Williams Cuba',
    edad : 31
}

var Stefani = {
    nombre : 'Stefani',
    apellido : 'Fernandez Saavedra',
    edad : 30
}

//Desglosar el objeto en parametros
function imprimirNombreEnMayuscula (persona) { //poner el atributo que me interesa en llaves
    //var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}
imprimirNombreEnMayuscula(JeanPaul)
imprimirNombreEnMayuscula(Stefani)

function imprimirNombreyEdad(personaje){
    var { nombre } = personaje, { edad } = personaje
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}
imprimirNombreyEdad(JeanPaul)
imprimirNombreyEdad(Stefani)