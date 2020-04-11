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
        host: '127.0.0.1',
        user: 'postgres',
        password: 'login',
        database: 'smart-brain'
    }
})


var cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())




app.get('/', (req, res) => Users.getUsers(req, res, db))

app.post('/signin', (req, res) => signIn.handleSingin(req, res, db, bcrypt))

app.post('/register', (req, res) => register.handleRegister(req, res, db, bcrypt))

app.get('/profile/:id', (req, res) => profile.getProfileDetails(req, res, db))

app.put('/image', (req, res) => image.handleImage(req, res, db))
app.post('/imageUrl', (req, res) => image.handleClarifiApi(req, res))


app.listen(3000, () => {
    console.log("app running in 3000")
}) 