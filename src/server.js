const { createServer } = require('net');
const { parseRequest } = require('./requestParser.js');

const startServer = (port, requestHandler) => {
  const server = createServer(socket => {
    socket.setEncoding('utf8');
    socket.on('data', requestAsString => {
      const request = parseRequest(requestAsString);
      requestHandler(request, socket)
      socket.end();
    });
  });

  server.listen(port, () => console.log(`Started listening on ${port}.`));
};

module.exports = { startServer };
