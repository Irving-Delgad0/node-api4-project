const express = require('express')
const Users = require('./users-model')
const cors = require('cors')


const server = express()

server.use(express.json())
server.use(cors())


server.get("/", (req,res) => {
    res.send("<h1>Welcome</h1>")
})

server.get("api/users", (req,res) => {
    Users.getAll(result => {
        res.json(result)
    })
})

server.post('/api/register', (req,res) => {
    const {username, password} = req.body
    req.end();
})

server.post('api/login', (req,res) => {
    const {username, password} = req.body
    req.end();
})

module.exports = server