const { startServer } = require('./src/server.js');
const { handleRequest } = require('./src/handleRequest.js');

startServer(8000, handleRequest);