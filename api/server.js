const express = require('express')
const Users = require('./users-model')


const server = express()

server.use(express.json())


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
    
})

module.exports = server