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
  // var nombre = persona.nombre
  var {nombre} = persona
  console.log( persona.nombre.toUpperCase())
}


imprimirNombreMayusculas(carlos)
imprimirNombreMayusculas(dario)

function saludar(datos){
  var {nombre, edad} = datos
  console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años de edad`);
}

saludar(carlos)
saludar(dario)
