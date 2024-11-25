//import json library
const jsonServer = require('json-server')

//create server
const mediaPlayerServer = jsonServer.create()

//create a middelware to parse the json data
const middelware = jsonServer.defaults()

//set up path to store data (json)
const router = jsonServer.router('db.json')

//use the middleware
mediaPlayerServer.use(middelware)
mediaPlayerServer.use(router)

//Set up port for the server
const PORT = 4000 || process.env.PORT

//listen to request 
mediaPlayerServer.listen(PORT,()=>{
    console.log(`Server Running Successfully at port number ${PORT}`);   
})