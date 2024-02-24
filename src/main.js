import dotenv from 'dotenv'
dotenv.config()

import express from 'express';
const server = express();

import bodyParser from 'body-parser';
server.use(bodyParser.json())

import {connect} from './mysql.js'
connect();

import todoapi from './routes/index.js';
server.use('/api', todoapi);

import cors from 'cors'
server.use(cors())

server.listen(process.env.PORT, () => {
    console.log(`Server on at: http://${process.env.HOST}:${process.env.PORT}`)
})