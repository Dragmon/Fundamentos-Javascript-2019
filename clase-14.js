var carlos = {
  nombre: 'Carlos',
  apellido: 'Pérez',
  edad: 30,
  peso: 70,
}

const INCEMENTO_PESO = 0.2,
      DIAS_AÑO = 365,
      MENOS_PESO = 3;

let dias = 0;

console.log(`Al inicio del año ${carlos.nombre} pesa ${carlos.peso} Kg`)

const subirPeso = persona => persona.peso += INCEMENTO_PESO
const bajarPeso = persona => persona.peso -= INCEMENTO_PESO
const META = carlos.peso - MENOS_PESO
const comeMucho = () => Math.random() < 0.3
const haceDeporte = () => Math.random() < 0.4

while (carlos.peso > META) {  
    if (comeMucho()) {
      subirPeso(carlos)            
    }
    if (haceDeporte()) {
      bajarPeso(carlos)
    }
    dias += 1;
}

console.log(`pasaron ${dias} hasta bajar los ${MENOS_PESO} Kg`);

console.log(`Al final del año ${carlos.nombre} pesa ${carlos.peso.toFixed(2)} Kg`)