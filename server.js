const express = require('express')
const router = express.Router();
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

// const projectRouter = require('./router/project-router')
// const taskRouter = require('./router/task-router')


const server = express();
server.use(helmet())
server.use(morgan())
server.use(cors())
server.use(express.json())

server.get('/test', (req, res) => { res.status(200).json({message: 'server running ' }) })

// server.use('/api/projects', projectRouter)
// server.use('/api/tasks', taskRouter)

module.exports = server;