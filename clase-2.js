//Asignacion de variables
var nombre = 'Carlos'
var apellido = 'Pérez'

//Conversion de variable todo a mayúsculas
var nombreMayusculas = nombre.toUpperCase()

//Conversion de variable todo a minúsculas
var apellidoMayuscula = nombre.toLowerCase()

//Obtener primer letra del nombre
var primerLetraNombre = nombre.charAt(0)

//Longitud de la variable
var longitudNombre = nombre.length

//Concatenar
//var nombreCompleto = nombre + ' ' + apellido

//Concatenar con  interpolacion de texto
//Nos permite escribir codigo javascript dentro de las llaves
var nombrecompletoInterpolacion = `${nombre} ${apellido.toUpperCase()}`

//acceder a un substring
var str = nombre.charAt(1) + nombre.charAt(2)
var str2 = nombre.substr(1,3)

//Ultima letra del nombre

var nombreCompleto = `${nombre} ${apellido}`
var ultimaLetraNombre = nombreCompleto.substr((nombreCompleto.length -1),1)
