var nombre = 'Jean Paul'

function imprimirNombreEnMayuscula () {
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayuscula()

/*Toda variable que no esta definida en una función está definida en el objeto global que en este caso en el navegador window.
....
Aprendí que para crear una variable local asi tenga el mismo nombre que una global tengo que escribir su nombre como parametro en una función que en JAVASCRIPT  en general queremos que una variable local no contamine el codigo
.....
¿Que logre?
........
Logre crear una funcion usando tanto variables globales como locales.
.......
¿Que podré lograr?
........
Podre crear un codigo sostenible en el tiempo Un programador evita efectos coalterles en su codigo. */
//..................
/*En esta hablaremos del alance que tienen las funciones. SI una variable no está definida dentro del cuerpo de una función hablanos de una variable global.
Por el contratrio, una variable definida dentro de una función es una variable local.
Para que la ejecución de una función no modifique una variable global usamos parámetros en lugar de pasar directamente la variable.
Es posible utilizar el mismo nombre para una variable global y para el parametro de una función con un alcance local.
...............
Una variable que no esta definida dentro del cuerpo de una función hablamos de una variable de alcance global porque se puede acceder a a ella desde cualquier función.
También significa que al definirla asi sea variable se le asigna al objeto global porque se puede acceder a ella desde cualquier función. También significa que al definirla
asi esa variable se le asigna al objeto global y este depende de donde estemos ejecutando js(servidor entorno de node y en el navegador de window la ventana).
Cuando una función accede a una variable global tiene un efecto de lado (side effects) lo que hace es al invocar una función va a modificar variables que no están definida dentro de ellas. (hay que evitarlo dentro de nuestro código)
ejemplo:
    var = nombre = "Jean Paul" //variable de alcance global porque no esta definida dentro de una funcion
    function imprimirNombreEnMayuscula (){
        nombre = nombre.toUpperCase()
        console.log(nombre)
    }

    imprimirNombreEnMayuscula()

    //Si accedemos a la variable nombre retorna JEAN PAUL (Modificamps una variable global)

QUE PODEMOS HACER PARA NO MODIFICAR LA VARIABLE GLOBAL? USANDO VARIABLES LOCALES
1. Pasandole parametros a la funcion(n), cambiando nombre por "n" y así serán variables locales dentro de la función que son parámetros
y asi estariamos modificando la variable local n y NO la global nombre.
2. Y tenemos que enviarle este parámetro cuando llamamos a la función / imprimirNombreEnMayuscula(nombre)
3. Si queremos acceder a la variable "n", podemos ver que no esta definida, solo está definida dentro de la función.
............

Entonces las variables globales son las que no están definidas dentro de una función y se pueden acceder a ellas desde cualquier función.
Cuando una función accede a una variable global tiene un efecto de lado que va a modificar esa variable global por su valor original(hayq eu evitarlo dentro de nuestro codigo).
Variable local son las que están dentro de una función, solo existe dentro de la función.
*/