const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 4700
const mongoose = require('mongoose')
const mongodb_uri = process.env.URI
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(mongodb_uri)
    .then(() => {
        console.log('Database connected');
    })
    .catch((err) => {
        console.log(err);
    })


const nigerianFoods = [
    {
        id: 1,
        name: 'Jollof Rice',
        price: 500
    },
    {
        id: 2,
        name: 'Fried Rice',
        price: 600
    },
    {
        id: 3,
        name: 'Egusi Soup',
        price: 700
    },
    {
        id: 4,
        name: 'Efo Riro',
        price: 800
    },
    {
        id: 5,
        name: 'Amala',
        price: 900
    }
]

let userSchema = mongoose.Schema({
    item: String,
})

let userModel = mongoose.model('users', userSchema)

app.get('/home', (req, res)=>{
    res.send(nigerianFoods)
})

app.get('/', (req, res)=>{
    res.send('Welcome to the home page')
})

app.post('/submit', (req, res)=>{
    console.log(req.body);
    const form = new userModel(req.body)
    form.save()
    res.status(200).json({message: 'Submitted'})
})

app.listen(PORT, () => {
    console.log(`Lift off! Server has started at ${PORT}`);

})