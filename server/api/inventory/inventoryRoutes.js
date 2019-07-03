const express = require('express');
const routes = express.Router();

const urls = require('../consts/urls');

routes.get(urls.inventory, (req, res) => {});

routes.post(urls.inventory, (req, res) => {});

routes.put(`${urls.inventory}/:id`, (req, res) => {});

routes.delete(`${urls.inventory}/:id`, (req, res) => {});

module.exports = routes;
