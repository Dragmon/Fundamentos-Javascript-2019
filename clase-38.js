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



async function obtenerPersonaje() {
  var ids = [1, 2, 3, 4, 5, 6]
  var promesas = ids.map(id => obtenerPersona(id))
  
  try {
    var personaje = await Promise.all(promesas)
    console.log(personaje)
  } catch (id) {
    onError(id)
  }
}

obtenerPersonaje()