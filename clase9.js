var x = 4, y = '4'

var sacha = {
    nombre : 'sacha'
}

//var otraPersona = sacha

/*
var otraPersona = {
    ...sacha
}
*/


var OtraPersona = {
    nombre : 'Sacha'
}


/*
Existen varias maneras de comparar variables u objetos dentro de javascript. En el primer ejemplo le asignamos a X un valor numérico y a Y un string. Para poder compararlos debemos agregar dos signos de igual (==). Esto lo convierte al mismo tipo de valor y permite que se puedan comparar.

Cuando realizamos operaciones recomendable usar tres simbolos de igual (===). Esto permite que JavaScript no iguale las variables que son de distinto tipo. Te recomendamos que uses el triple igual siempre que estés comparando VARIABLES.

Existen cinco tipo de datos que son primitivos:
1. Boolean
2. Null
3. Undefined
4. Number
5. String

    var x = 4, y = "4"
1.  x == y //TRUE convierte al mismo tipo de valor y permite que se puedan comparar. (Compara si tiene el mismo valor, sin importar el tipo).
2.  x === y //FALSE no son iguales porque uno es un entero y el otro es un String

CUANDO COMPARAMOS OBJETOS SE COMPARA REFERENTE A LA VARIABLE DEL OBJETO
1.  sacha == OtraPersona // FALSE (porque sacha no es igual a otra persona, pueden tener los mismos atributos pero diferentes objetos)
2.  var otraPersona = sacha /-/ sacha == otraPersona // TRUE (Cuando hacemos esto otraPersona y sacha apuntan al mismo lugar)

JS tiene distitas maneras de comparar con == compara si tienen el mismo valor sin importar el tipo (4 == "4" //true) y con === cuando comparamos si son identicos los valores (4 === "4" ///false) CUANDO COMPARAMOS OBJETOS SE COMPARA REFERENTE A LA VARIABLE DEL OBJETO
*/