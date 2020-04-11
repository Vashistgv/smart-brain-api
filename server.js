const express = require('express')
const knex = require('knex')
const bcrypt = require('bcrypt-nodejs')
const register = require('./controller/register')
const signIn = require('./controller/signIn')
const image = require('./controller/image')
const Users = require('./controller/Users')
const profile = require('./controller/profile')

const db = knex({
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: true,
       
    }
})


var cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())




app.get('/', (req, res) => res.json("this is calling now"))

app.post('/signin', (req, res) => signIn.handleSingin(req, res, db, bcrypt))

app.post('/register', (req, res) => register.handleRegister(req, res, db, bcrypt))

app.get('/profile/:id', (req, res) => profile.getProfileDetails(req, res, db))

app.put('/image', (req, res) => image.handleImage(req, res, db))
app.post('/imageUrl', (req, res) => image.handleClarifiApi(req, res))


app.listen(process.env.PORT ||3000, () => {
    console.log(`app running in ${process.env.PORT}`)
}) 