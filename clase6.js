//var nombre = 'Jean Paul'
//var nombre = 'Stefani' - No podemos tener dos variables con el mismo nombre 

/*
var nombreJeanPaul = 'Jean Paul'
var nombreStefani = 'Stefani'
var nombreVero = 'Veronikha' //No es lo mas prolijo de hacerlo
var nombreOswaldo = 'Oswaldo'//No es lo mas prolijo de hacerlo

function imprimirNombreEnMayuscula (nombre) {
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayuscula(nombreJeanPaul)
imprimirNombreEnMayuscula(nombreStefani)
imprimirNombreEnMayuscula(nombreVero)//No es lo mas prolijo de hacerlo
imprimirNombreEnMayuscula(nombreOswaldo)//No es lo mas prolijo de hacerlo
*/

/*Crearemos objetos*/
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
/* //Hay otra forma de hacerlo
//function imprimirNombreEnMayuscula (nombre) {   //Lo cambiaremos para acceder los datos de una persona con una variable
function imprimirNombreEnMayuscula (persona) {
    nombre = persona.nombre.toUpperCase()
    console.log(nombre)
}
imprimirNombreEnMayuscula(JeanPaul.nombre)
imprimirNombreEnMayuscula(Stefani.nombre)
*/

/* //Hay otra forma de hacerlo para que reciba el objeto
//function imprimirNombreEnMayuscula (nombre) {   //Lo cambiaremos para acceder los datos de una persona con una variable
function imprimirNombreEnMayuscula (persona) {
    var nombre = persona.nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayuscula(JeanPaul)
imprimirNombreEnMayuscula(Stefani)
*/

/*
function imprimirNombreEnMayuscula (persona) {
    console.log(persona.nombre.toUpperCase())
}
imprimirNombreEnMayuscula(JeanPaul)
imprimirNombreEnMayuscula(Stefani)
*/

//Desglosar el objeto en parametros
function imprimirNombreEnMayuscula ({ nombre }) { //poner el atributo que me interesa en llaves
    console.log(nombre.toUpperCase())
}
imprimirNombreEnMayuscula(JeanPaul)
imprimirNombreEnMayuscula(Stefani)

/*Vamos a empezar a trabajar con objetos, veremos como declararlos, cuáles son sus ventajas, cómo asignarles atributos y cómo trabajar con ellos dentro de las funciones.
.......
Los objetos se definen delimitados mediante llaves{clave(key) : valor(value)}
.......
Un atributo se compone de una clave(key) y un valor(value) que se separan entre sí por dos puntos ":". Los valores pueden ser de tipo string, entero, boobleanos, etc.
Cada atributo está separado por una coma. Un objeto puede tener todos los atributos que sean nevcesarios.
........
Para acceder al valor de dicho atributo para ese objeto. Escribir el nombre de un ibjeto separado po un punto del nombre de un atributo. Un objeto también puede pasar como atributo en una función.
.......
Las últimas versiones de JavaScript nos permiten desglosar el objeto para acceder únicamente al atributo que nos interesa. Esto se consigue encerrando el nombre del atributo en llaves{}*/
///
///
/*
//SUPONEMOS QUE TENEMOS QUE AGREGAR MAS NOMBRES Y IRLOS IMPRIMIENDO:
1. Una solución seria creando variables por cada nombre, pero no es lo mas correcto que podemos hacer.
2. Podemos usar un objeto que reuna estas características en común de un objeto de la vida real en este caso una persona.
3. Creamos un objeto var JeanPaul = {las llaves definen un objeto y dentro tiene atributos} y que este obketo va a tener varios atributos definido con clave: valor separados por coma

//PARA ACCEDER AL VALOR DE ESE OBJETO O PARA ACCEDER AL VALOR DE LOS ATRIBUTOS(es lo mismo)
1. Y para acceder al valor de un objeto se escribre (objeto.CLAVE DEL ATRIBUTO)
    //imprimirNombreEnMayusculas(JeanPaul.nombre)
  
//MEJORAMOS LA FUNCIÓN PARA QUE RECIBA POR PARAMETROS UN OBJETO Y PUEDA ACCEDER AL NOMBRE DE UNA PERSONA
    function imprimirNombreEnMayusculas(persona) {
        var nombre = persona.nombre.toUpperCase()
        console.log(nombre)}
    }       
        imprimirNombreEnMayusculas(jeanpaul)
        imprimirNombreEnMayusculas(stefani)

    1. La función lo que es que le pasamos el obketo y va acceder a su clave nombre y lo que tenga como valor va a transformarlo a mayuscula y lo almacena en la variable local nombre
    
//COMO LO UNICO QUE NOS INTERESA DEL OBJETO ES EL NOMBRE (CLAVE) PODEMOS DESGLOSAR EL OBJETO EN LOS PARAMETROS DE LA FUNCIÓN
1. En vez de escribir los parametros con persona (que va a tomar el nombre dle objeto)
2. Ponemos llaves y dentro los atributos que nos interesan {nombre}
    function imprimirNombreEnMayusculas ({ nombre }){
        console.log(nombre.toUpeerCase())}
    
    imprimirNombreEnMayusculas(JeanPaul)//accedemos al atributo nombre directamente de este objeto
    */

//IMPORTANTE
    /*Un obeto tiene características en común de un obketo de la vida real en este caso una persona, Declaramos objetos {}, definimos 
    sus atributos se componen con clave(key):valor(value), y asignamos valores a cada atributo, también pasamos objetos como parámetros en las funciones y accedemos a los valores dentro la función */