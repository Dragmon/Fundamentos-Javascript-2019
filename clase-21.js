function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
}

Persona.prototype.saludar = () => {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)  
}

var sacha = new Persona('Sacha','Lifszyc')
var erika = new Persona('Erika', 'Luna')
var arturo = new Persona('Arturo', 'Martinez')