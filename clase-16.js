let signo = prompt('¿Cuál es tu signo?')

console.log(`su signo es ${signo}`)

switch (signo) {
  case 'libra':
    console.log(`su signo es ${signo}`)
    break;

  default:
    console.log(`su signo no es valido`)
    break;
}