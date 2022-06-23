const { createServer } = require('net');
const { parseRequest } = require('./requestParser.js');
const { Response } = require('./response.js');

const handleRequestEvent = (requestAsString, requestHandler, response) => {
  const request = parseRequest(requestAsString);
  requestHandler(request, response);
};

const connectionHandler = (requestHandler, socket) => {
  socket.setEncoding('utf8');
  socket.on('data', (request) => {
    const response = new Response(socket);
    handleRequestEvent(request, requestHandler, response)
  });
};

const startServer = (port, requestHandler) => {
  const server = createServer(
    (socket) => connectionHandler(requestHandler, socket)
  );
  server.listen(port, () => console.log(`Started listening on ${port}.`));
};

module.exports = { startServer };
