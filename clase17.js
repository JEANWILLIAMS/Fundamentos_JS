var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

var personas = [sacha, alan, martin, dario, vicky, paula]

for (var i = 0; i < personas.length; i++){
    var persona = personas [i]
    console.log(`${persona.nombre} mide ${persona.altura}mts.`)
}

//JS ARRAYS
/* Es una colección de datos o valores asignadas a sus variables

//variable    //conjunto de valores entre [] separados por comas
Let array =  [valor1, valor2,....valor00+] 

Los valores dentro de un array se organizan con un índice donde la posición cero o
        [valor1, valor2, valor3, valor 4]
array       0,     1    ,    2,       3     //array.lenght = 4, Es una propiedad de los arrays que guarda la cantidad de elementos que contiene.

ACCEDER A UN ELEMENTO
array [i]   // i : indice de elemento

ORDENAR ELEMENTOS
array.sort(callback)
-> Para ordenar elementos numéricos se asegura como un parámetro una función de ordenamiento.sort(a,b) => a-b)

INVERTIR ORDEN
array.reverse()  Invierte el orden de los eleento de un arreglo

// Los arreglos nos permiten almacerna una colección de datos en un contenedor o variable.

Los elementos se organizan con un índice desde o hasta la longitud del arreglo. 



*/ 