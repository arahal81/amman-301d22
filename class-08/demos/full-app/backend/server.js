'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const server = express();

const PORT=process.env.PORT;

server.use(cors()); //my server can get any req from any clinet

//localhost:3001/
server.get('/',homeHandler)
server.get('/photo',photoHandler)



//localhost:3001/
function homeHandler(req,res){
    res.send('Home route');
}

//localhost:3001/photo?searchQuery=book
function photoHandler(req,res) {
    let photoQuery= req.query.searchQuery;
    const key = process.env.KEY;
    let url = `https://api.unsplash.com/search/photos?client_id=${key}&query=${photoQuery}`;
    
    // try {
    //     const apiResult = await axios.get(url);
    //     console.log(apiResult);
    //     const photoArray = apiResult.data.results.map(photoItem=>{
    //     return new Photo(photoItem);
    // })

    // res.send(photoArray);
    // }
    // catch {
    //     res.send('there is an error in getting the data');
    // }

    // try {
    //     axios.get(url).then(apiResult =>{
    //         console.log('inside promise');
    //         const photoArray = apiResult.data.results.map(photoItem=>{
    //         return new Photo(photoItem);
    //     })
    //     res.send(photoArray);
    // })
    // console.log('after promise');
    
    // }
    // catch {
    //     res.send('there is an error in getting the data');
    // }

        axios.get(url).then(apiResult =>{
            console.log('inside promise');
            const photoArray = apiResult.data.results.map(photoItem=>{
            return new Photo(photoItem);
            })
        res.send(photoArray);
        })
        .catch(err =>{
            res.send(`there is an error in getting the data => ${err}`);
        })
    
}

class Photo{
    constructor(item){
        this.imgUrl = item.urls.raw;
        this.numLikes = item.likes;
    }
}

server.listen(PORT, ()=>{
    console.log(`Listening on PORT ${PORT}`);
})