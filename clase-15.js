var contador = 0;

const llueve = () => Math.random() < 0.25

do {
  contador ++
} while (!llueve());

const repeticiones = contador == 1 ? 'vez' : 'veces';

console.log(`Fui a ver si llovía ${contador} ${repeticiones}`)