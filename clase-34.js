const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true}

function obtenerPersona(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $
  .get(url, opts, callback)
  .fail(() => {
    console.log(`Erro al conseguir el personaje ${id}`)
  })
}

obtenerPersona(1, function(data) {
  console.log(data)
  console.log(`Hola, mi nombre es ${data.name}`)
  
  obtenerPersona(2, function(data){
    console.log(data)
    console.log(`Hola, mi nombre es ${data.name}`)
    obtenerPersona(3, function(data){
      console.log(data)
      console.log(`Hola, mi nombre es ${data.name}`)
    })
  })
})