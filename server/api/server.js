const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const urls = require('./consts/urls');
const inventoryRoutes = require('./inventory/inventoryRoutes');
const categoryRoutes = require('./category/categoryRoutes');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use(urls.api, inventoryRoutes);
server.use(urls.api, categoryRoutes);

/* 
[GET] no params or body required
Params: none,
Body: none,
*/
server.get(urls.base, (req, res) => {
  res.status(200).json('Welcome To Inventory.. READY!');
});

module.exports = server;
