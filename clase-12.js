var carlos = {
  nombre: 'Carlos',
  apellido: 'Pérez',
  edad: 30,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true,
}

function imprimirProfesiones(persona){
  console.log(`${persona.nombre} es: `)

  if(persona.ingeniero){
    console.log('Ingeniero')
  }
  if (persona.cocinero) {
    console.log('Cocinero')
  }
  if (persona.cantante) {
    console.log('Cantante')
  }
  if (persona.dj) {
    console.log('Dj')
  }
  if (persona.guitarrista) {
    console.log('Guitarrista')
  }
  if (persona.drone) {
    console.log('Drone')
  }
}

imprimirProfesiones(carlos);

const MAYORIA_EDAD = 18;

/* 
var esMayorEdad = function (persona) {
  return persona.edad >= MAYORIA_EDAD
}
*/

//const esMayorEdad = (persona) => {   
  //Si la funcion tiene un solo parametro, se pueden omitir los paréntesis
  //Si solo retorna un valor se puedne omitir las llaves
  // desestructurando la funcion colocamos los parentesis y las llaves dentro el parametro del objeto al que queremos
  // acceder ({edad})

const esMayorEdad = ({ edad }) => edad >= MAYORIA_EDAD

function mayorEdad(persona) {
  console.log(`${persona.nombre} es: ${esMayorEdad(persona) ? 'mayor de edad' : 'es menor de edad'}`)
}

mayorEdad(carlos);
