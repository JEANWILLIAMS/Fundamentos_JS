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

//RETO
/*
function imprimirNombreyEdad(personaje){
    var { nombre } = personaje, { edad } = personaje
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}
imprimirNombreyEdad(JeanPaul)
imprimirNombreyEdad(Stefani)
*/

//MODO 1 DONDE LA FUNCION INCREMENTA AL OBJETO DE FORMA GLOBAL
function cumpleanos(persona){
    persona.edad += 1
}

//MODO2
function cumpleanos1(edad){
    edad += 1
}

//MODO3 - EJAMOS EL EFECTO DE LADO PERO QUE DEVUELVA UN NUEVO OBJETO que tenga lo mismo de la persona mas la edad incrementada
function cumpleanos2(persona){
    return{
        ...persona,
        edad: persona.edad +1 
    }
}

/*JavaScript se comoporta de manera distinta cuando le pasamos un objeto como parámetro.

Cuando los objetos se pasan como una referencia, esto se modifican fuera de la función. 
Para solucionar esto se puede crear un objeto diferente. Esto lo podemos hacer colocando tres puntos antes del nombre. ej. ...persona.*/

//VAMOS A VER COMO SE COMPORTA JAVASCRIPT CUANDO LE PASAMOS OBJETOS CUANDO LAMAMOS UNA FUNCION / Tiene efecto de lado (modifica el atributo del objeto).
/*
1. Crearemos una función que recibirá como parámetro persona y va a incrementar su edad / 
    function cumpleanos(persona){
        persona.edad + = 1 // incrementa en 1 atributo edad de persona
2. Ahora si llamamos la función pasando el objeto como parámetro desde el navegador - no devuelve nada pero incrementa en 1 el atributo edad del objeto.
3. Como podemos ver modifica el atributo edad del objeto - incrementa su valor cuando es llamada.
    } */


//PERO EN CAMBIO SI LE PASARAMOS SOLO LA EDAD POR PARÁMETRO, EL VALOR EDAD DE JEAN PAUL NO SE VERA AFECTADO / No tiene efecto de lado (no modifica el atributo del objeto)
/*
1.  function cumpleanos(edad) {
        edad += 1  //EL VALOR DE EDAD DE JEAN PAUL NO SE VERA AFECTADO
    } 
2. JavaScript se comporta distinto con los objetos, los objetos que pasamos por parámetro se pasan por referencia, eso quiere decir que si los modificamos dentro del cuerpo
de una función su valor se vera modificado fuera de la función (es decir cuando paso por parámetro un objeto se usa como referencia el valor del objeto y si modifico el objeto
    dentro de una función los cambios se verán reflejados fuera)
    */


// DEJAMOS EL EFECTO DE LADO PERO QUE DEVUELVA UN NUEVO OBJETO que tenga lo mismo de la persona mas la edad incrementada
/*
1. Retornar de esta función un objeto nuevo copiando todo lo que tenía el objeto interior / return{...persona} / desglosamos a la persona dentro del nuevo objeto.
2. Y podemos pisar sus atributos o añadir nuevo al objeto / 
    function cumpleanos(persona) {
        return (...persona, edad: persona.edad +1)
    }
3. Lo que hace esta función es devolvernos un nuevo objeto que va a tener un año mas que el objeto anterior
CUANDO LLAMAMOS A LA FUNCIÓN Y LE PASAMOS EL OBJETO JEAN PAUL INCREMENTA EN 1 LA EDAD PERO VEMOS QUE OBJETO JEAN PAUL NO ESTA MODIFICADO, podemos almacenar en variable el objeto que nos devuelve la funcion / var masviejo = cumpleanos(jeanpaul)
*/

//Tenemos que tener en cuenta como se comporta js cuando pasamos objetos como parámetros: Queremos que se modifiquen esos objetos que pasamos por parámetros(tener ese efecto de lado) o qu eno se modifique ese objeto ia existiendo y queremos u nuevo objeto modificado.