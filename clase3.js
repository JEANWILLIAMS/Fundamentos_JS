var edad = 27

/*Incrementar 1 años a la edad*/
//edad = edad + 1

/*Metodo abreviado*/
edad += 1


var peso = 75
//peso = peso - 2
peso -= 2

/*  Sumar dos numeros distintos */
var sandwich = 1
//peso = peso + sandwich
peso += sandwich

/*Realizar deporte disminuye el peso */
var jugarAlFutbol = 3
//peso = peso - jugarAlFutbol
peso -= jugarAlFutbol


/*Número con decimales */
var precioDelVino = 200.3

//var total = precioDelVino * 3 //sale con muchos decimales
//var total = precioDelVino * 100 * 3 / 100 //Acortar decimales

/*Como recortar los decimales */
var total = Math.round(precioDelVino * 100 * 3) / 100
var totalStr = total.toFixed(2) //toFixed es para que tenga dos decimales - esto es un string
var total2 = parseFloat(totalStr) //Que salga como número y no como string - parse significa leer un string a un decimal
//metodo abreviado
var costoTotal = parseFloat((precioDelVino * 3).toFixed(2))

/*División */
var pizza = 8
var personas = 2
var cantidadDePorcionesPorPersona = pizza / personas