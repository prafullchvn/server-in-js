const { startServer, handleRequest } = require('./src/server.js');
const { router } = require('./src/router.js');

startServer(8000, router);