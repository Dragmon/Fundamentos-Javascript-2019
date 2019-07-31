var carlos = {
  nombre: 'Carlos',
  apellido: 'Pérez',
  edad: 30,
  peso: 70,
}

const INCEMENTO_PESO = 0.2,
      DIAS_AÑO = 365;

console.log(`Al inicio del año ${carlos.nombre} pesa ${carlos.peso} Kg`)

const subirPeso = persona => persona.peso += INCEMENTO_PESO
const bajarPeso = persona => persona.peso -= INCEMENTO_PESO

for (let index = 1; index <= DIAS_AÑO; index++) {
  let random = Math.random()
  
  if (random < 0.25) {
    subirPeso(carlos)    
  } else if (random < 0.5) {
    bajarPeso(carlos)
  }  
}

console.log(`Al final del año ${carlos.nombre} pesa ${carlos.peso.toFixed(2)} Kg`)