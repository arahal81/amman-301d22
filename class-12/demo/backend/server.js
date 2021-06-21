'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());

const PORT = process.env.PORT;

//connect the express server with mongodb
mongoose.connect('mongodb://localhost:27017/cats', {useNewUrlParser: true, useUnifiedTopology: true});

//create a schema
const kittySchema = new mongoose.Schema({
    catName: String,
    breed: String
});

//create a schema
const ownerSchema = new mongoose.Schema({
    ownerName: String,
    cats: [kittySchema]
}); 

//create a model 
const myCatModel = mongoose.model('Kitten', kittySchema);

//create a model
const myOwnerModel = mongoose.model('owner', ownerSchema);

//data seeding (store data)
function seedKittenCollection (){
    const frankie = new myCatModel({
        catName : 'frankie',
        breed : 'British'
    })

    const sherry = new myCatModel({
        catName : 'sherry',
        breed : 'Baladi'
    })

    // console.log(frankie);
    // console.log(sherry);

    frankie.save();
    sherry.save();
}

// seedKittenCollection();

//data seeding
function seedOwnerCollection (){
    const roaa = new myOwnerModel({
        ownerName : 'roaa',
        cats: [
            {
                catName: 'fluffy',
                breed : 'American'
            },
            {
                catName: 'Mefleh',
                breed : 'Baladi'
            }
        ]

    })

    const ahmad = new myOwnerModel({
        ownerName : 'ahmad',
        cats: [
            {
                catName: 'Meshmesh',
                breed : 'American'
            }
        ]

    })

    roaa.save();
    ahmad.save();
}

// seedOwnerCollection();

app.get('/',homeHandler);
app.get('/cat', getCatsHandler);

function homeHandler(req,res){
    res.send('Home Route');
}

function getCatsHandler(req,res){
    let requestedOwnerName = req.query.name;
    myOwnerModel.find({ownerName:requestedOwnerName},function(err,ownerData){
        if(err){
            console.log('something went wrong');
        }
        else
        {
            // console.log(ownerData[0].cats);
            res.send(ownerData[0].cats);
        }
    })
}

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})