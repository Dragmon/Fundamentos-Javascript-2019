const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true}

function obtenerPersona(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $.get(url, opts, function (data) {
    console.log(data)
    console.log(`Hola, mi nombre es ${data.name}`)

    if (callback) {
      callback()
    }

  })
}

obtenerPersona(1, function() {
  obtenerPersona(2, function(){
    obtenerPersona(3)
  })
})