const debug = require('debug')('http');
const server = require('./api/server');
require('dotenv').config();

const port = process.env.PORT || 5000;
server.listen(port, () => debug(`server up on ${port} and ready`));
