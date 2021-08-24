var nombre = 'Jean Paul', apellido = "Williams Cuba"

/*Para el mayuscula es el "toUpperCase"*/ 
var nombreEnMayuscula = nombre.toUpperCase()

/* Para colocar en minusculas "ToLowerCase"*/
var apellidoEnMinusculas = apellido.toLowerCase()

/* Para saber el primer caracter "charAt"*/
var primeraLetraDelNombre = nombre.charAt(0)

/* Para saber la cantidad de letras "lenght"*/
var cantidadDeLetrasDelNombre = nombre.length

/*Como concatenar dos variables juntos*/
var nombreCompleto = nombre + ' ' + apellido

/*Interpolación de Texto - aplicamos la comilla invertida */
var nombreCompleto1 = `${nombre} ${apellido}`

/*Interpolación de Texto con letras mayúsculas - aplicamos la comilla invertida y el toUppercase */
var nombreCompleto2 = `${nombre} ${apellido.toUpperCase()}`

/*Podemos acceder a un substring dentro de un string*/
var str = nombre.charAt(1) + nombre.charAt(2)

var str1 = nombre.substr(1,2)

/* Reto 1 - Acceder a la ultima letra del apellido */
var ultimLetraDelApellido = apellido.charAt(apellido.length - 1)/**/

var ultimaLetraDelApellido2 = `${apellido.charAt(apellido.length -1)}`/*Interpolación de texto */

var ultimaLetraDelApellido3 = apellido.substr(-1) /*Con un subtring dentro de un string*/