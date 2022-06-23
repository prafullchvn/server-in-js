const { createServer } = require('net');

const parseRequestLine = requestLine => {
  const [method, uri, protocol] = requestLine.split(' ');
  return { method, uri, protocol };
};

const parseHeader = line => {
  const indexOfColon = line.indexOf(':');
  const key = line.slice(0, indexOfColon);
  const value = line.slice(indexOfColon + 1);

  return [key, value];
}

const parseHeaders = lines => {
  let index = 0;
  let headers = {};
  while (index < lines.length && lines[index].length !== 0) {
    const [header, value] = parseHeader(lines[index]);
    headers[header] = value;
    index++;
  }
  return headers;
};


const parseRequest = request => {
  const lines = request.split('\r\n');
  const requestLine = parseRequestLine(lines[0]);
  const headers = parseHeaders(lines.slice(1));

  return { ...requestLine, headers };
};

const getStatusMessage = (statusCode) => {
  const statuses = {
    200: 'OK',
    404: 'Not Found'
  };

  return statuses[statusCode];
};

const response = (statusCode, data) => {
  const statusMessage = getStatusMessage(statusCode);
  return `HTTP/1.1 ${statusCode} ${statusMessage}\r\n\r\n${data}\r\n`;
};

const router = (headers, socket) => {
  if (headers.uri === '/') {
    socket.write(response(200, 'index'));
    return;
  }

  socket.write(response(404, 'Not Found'));
};

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

module.exports = { parseRequest, router, startServer };
