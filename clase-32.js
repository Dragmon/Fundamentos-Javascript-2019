const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true}

const onPeopleResponse = function (data) {
  // arguments: variable que tienen todas las funciones donde podemos ver que parametros recibe la función
  //console.log(arguments)
  console.log(data)
  console.log(`Hola, mi nombre es ${data.name}`)

}

function obtenerPersona(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(url, opts, onPeopleResponse)
}

obtenerPersona(1)
obtenerPersona(2)
obtenerPersona(3)