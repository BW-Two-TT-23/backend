const express = require('express')
const router = express.Router();
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

const authRouter = require('./auth/auth-router')
const userRouter = require('./users/user-router')
const classRouter = require('./class/class-router')


const server = express();
server.use((req, res, next) => {
    res.header({ "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept" });
    next();
  });
server.use(helmet())
server.use(morgan())
server.use(cors())
server.use(express.json())

  

server.get('/test', (req, res) => { res.status(200).json({message: 'server running ' }) })

server.use('/api/auth', authRouter)
server.use('/api/user', userRouter)
server.use('/api/classes', classRouter)

module.exports = server;