var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  altura: 1.72,
  cantidadLibros: 111
}

var alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86,
  cantidadLibros: 78
}

var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85,
  cantidadLibros: 132
}

var dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71,
  cantidadLibros: 90
}

var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56,
  cantidadLibros: 91
}

var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76,
  cantidadLibros: 182
}

var personas = [sacha, alan, martin, dario, vicky, paula]

const esAlta = personas => personas.altura > 1.8

const esBaja = personas => personas.altura < 1.8

var personasAltas = personas.filter(esAlta)

var personaBajas = personas.filter(esBaja)
/*
const pasarAlturaACms = persona => {
  // Nuevo objeto
  return {
    ...persona,
    altura: persona.altura * 100
  }
}
*/
//Al encerrar nuestro return entre parentecis, indicamos que nos regresara el objeto creado
const pasarAlturaACms = persona => ({  
  ...persona,
  altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms)

/*
var acum = 0;

for (let i = 0; i < personas.length; i++) {
  acum = acum + personas[i].cantidadLibros;
}
*/

/*
const reducer = (acum, persona) => {
  return acum + persona.cantidadLibros
}
*/

//const reducer = (acum, persona) => acum + persona.cantidadLibros

const reducer = (acum, {cantidadLibros}) => acum + cantidadLibros


var totalLibros = personas.reduce(reducer,0)

console.log(`Total de todos los libros ${totalLibros}`);