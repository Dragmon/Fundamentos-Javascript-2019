const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true}

function obtenerPersona(id) {
  return new Promise((resolve, reject)=>{
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
      .get(url, opts, function(data){
        resolve(data)
      })
      .fail(() => reject(id))
  })
}

function onError(id){
  console.log(`Sucedió un erro al obtener el personaje ${id}`)
}

obtenerPersona(1)
  .then(personaje => {
    console.log(`El personaje 1 es ${personaje.name}`)
    return obtenerPersona(2)
  })
  .then(personaje =>{
    console.log(`El personaje 2 es ${personaje.name}`)
    return obtenerPersona(3)
  })
  .then(personaje => {
    console.log(`El personaje 3 es ${personaje.name}`)
  })
  .catch(onError)
