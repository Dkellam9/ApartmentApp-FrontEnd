import AuthService from '../api/authentication';
let auth = new AuthService();

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



export { getApartments, getApartment }
