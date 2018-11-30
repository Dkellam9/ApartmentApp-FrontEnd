const BASE = 'http://localhost:3001'

let getApartments = function () {
  return fetch(BASE + '/apartments')
  .then((resp) => {
    let json = resp.json()
    console.log(json)
    return json
  })
}

let getApartment = function (id) {
  return fetch(BASE + '/apartments/' + id)
  .then((resp) => {
    let json = resp.json()
    console.log(json)
    return json
  })
}

let newApartment = function (apartment) {
  console.log(apartment)
  return fetch(BASE + '/apartments', {
    body: JSON.stringify(apartment),  // <- we need to stringify the json for fetch
    headers: {  // <- We specify that we're sending JSON, and expect JSON back
        "Content-Type": "application/json"
    },
    method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
  })
  .then(resp => {
    let json = resp.json()
    console.log(json)
    return json
  })
}

export { getApartments, getApartment, newApartment }
