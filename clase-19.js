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
var personasAltas = personas.filter(function(persona){
  return persona.altura > 1.8
})
*/

console.log(personasAltas);

console.log(personaBajas);

console.log(personasCms);