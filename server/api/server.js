const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const urls = require('./consts/urls');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

/* 
[GET] no params or body required
Params: none,
Body: none,
*/
server.get(urls.base, (req, res) => {
    res.status(200).json('Welcome To Inventory.. READY!')
})

module.exports = server;
