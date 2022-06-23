const { response } = require('./response.js');

const router = (headers, socket) => {
  if (headers.uri === '/') {
    socket.write(response(200, 'index'));
    return;
  }

  socket.write(response(404, 'Not Found'));
};

module.exports = { router };
