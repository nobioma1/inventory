const express = require('express');
const routes = express.Router();

const urls = require('../consts/urls');

routes.get(urls.category, (req, res) => {});

routes.post(urls.category, (req, res) => {});

routes.put(`${urls.category}/:id`, (req, res) => {});

routes.delete(`${urls.category}/:id`, (req, res) => {});

module.exports = routes;
