const express = require('express');
const server = express(); //I can use the express methods using server variable
const pokeData = require('./assets/poke.json');
const cors = require('cors');
server.use(cors()); //make my server opened for everyone

const PORT = 3020; 

//localhost:3010/
server.get('/',(req,res) =>{
    res.send('I am in the root route, I am Roaa');
})

//localhost:3010/getPokeNames
server.get('/getPokeNames',(req,res)=>{
    let pokeNames = pokeData.results.map(item=>{
        return item.name;
    })
    res.send(pokeNames);
})

//localhost:3010/getPoke?pokeName=bulbasaur
server.get('/getPoke',(req,res)=>{
    let pokeNamePra = req.query.pokeName;
    let pokeItem = pokeData.results.find(item =>{
        if(item.name == pokeNamePra)
        return item;
    })
    res.send(pokeItem);
})


//localhost:3010/test
server.get('/test',(req,res) =>{
    res.send('hello from test route');
})

//localhost:3010 .....
server.get('*',(req,res) =>{
    res.status(404).send('sorry, this page not found');
})

server.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
})

