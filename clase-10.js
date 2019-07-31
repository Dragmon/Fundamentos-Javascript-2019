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

function mayorEdad(persona) {
  console.log(`${persona.nombre} es: ${persona.edad >= 18 ? 'mayor de edad' : 'es menor de edad'}`)
}

mayorEdad(carlos)
