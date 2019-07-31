var carlos ={
  nombre: 'Carlos',
  apellido: 'Pérez',
  edad: 29
}

var dario ={
  nombre: 'Darios',
  aoellido: 'Goméz',
  edad: 32
}

//Diferentes maneras de acceder al objeto

function imprimirNombreMayusculas(persona){
  var nombre = persona.nombre.toUpperCase()
  console.log(nombre);

  console.log( persona.nombre.toUpperCase())
}


function imprimirNombreMayusculas2 ({nombre}){
  console.log(nombre.toUpperCase())
}

imprimirNombreMayusculas(carlos)
imprimirNombreMayusculas(dario)

imprimirNombreMayusculas2(carlos)
imprimirNombreMayusculas2(dario)
