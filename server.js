const express = require('express')
const router = express.Router();
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

const authRouter = require('./auth/auth-router')
const userRouter = require('./users/user-router')


const server = express();
server.use(helmet())
server.use(morgan())
server.use(cors())
server.use(express.json())

server.get('/test', (req, res) => { res.status(200).json({message: 'server running ' }) })

server.use('/api/auth', authRouter)
server.use('/api/user', userRouter)

module.exports = server;