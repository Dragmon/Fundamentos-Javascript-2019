var nombre = 'Carlos'

/*
function imprimirNombreMayusculas(n){
  n = n.toUpperCase()
  console.log(n);
}
*/

//Se hace referencia a la variable nombre de la funcion de manera local
//no afecta la variable que se declaro de manera global

function imprimirNombreMayusculas(nombre){
  nombre = nombre.toUpperCase()
  console.log(nombre);
}

imprimirNombreMayusculas(nombre)
