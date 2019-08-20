const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true}
const onPeopleResponse = function (data) {
  // arguments: variable que tienen todas las funciones donde podemos ver que parametros recibe la función
  //console.log(arguments)
  console.log(data)
  console.log(`Hola mi nombre es, ${data.name}`)

}

$.get(lukeUrl, opts, onPeopleResponse)