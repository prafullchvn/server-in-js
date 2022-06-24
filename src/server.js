const { createServer } = require('net');
const { parseRequest } = require('./requestParser.js');
const { Response } = require('./response.js');

const processRequest = (requestAsString, requestHandler, socket) => {
  const response = new Response(socket);
  const request = parseRequest(requestAsString);
  requestHandler(request, response);
};

const startServer = (port, requestHandler) => {
  const server = createServer((socket) => {
    socket.setEncoding('utf8');
    socket.on('data', (request) =>
      connEventHandler(request, requestHandler, socket)
    );
  });
  server.listen(port, () => console.log(`Started listening on ${port}.`));
};

module.exports = { startServer, processRequest };
