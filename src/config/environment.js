// let baseURL = 'http://localhost:3000/v0/'
let baseURL = 'https://diyar-server.herokuapp.com/v0/'

if(process.env.NODE_ENV === 'production')
  baseURL = 'https://diyar-server.herokuapp.com/v0/'

export {baseURL};