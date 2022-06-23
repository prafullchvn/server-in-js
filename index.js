const { startServer, handleRequest } = require('./src/server.js');

startServer(8000, handleRequest);