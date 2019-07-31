// == compara dos variables, tomando los valores y llevandolo a un mismo de dato para poder compararlos
// === permite comparar dos variables, comparando su valor y tipo de dato

var x = 4,
    y = '4'


// Los objetos no se pueden comparra ya que al crear un objeto es considerado como otro completamanete nuevo

var carlos = {
  nombre: 'Carlos'
}

var otraPersona ={
  nombre: 'Carlos'
}

var juan = {
  nombre: 'Juan'
}

var otraPersona2 ={
  ...juan
}

//Le indico que el nuevo objeto apunte a la misma direccion de memoria de pepe, por lo cual ambos objetos seran iguales

var pepe = {
  nombre: 'Pepe'
}

var otraPersona3 = pepe
