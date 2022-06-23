const getStatusMessage = (statusCode) => {
  const statuses = {
    200: 'OK',
    404: 'Not Found'
  };
  return statuses[statusCode];
};

class Response {
  #socket;
  #statusCode;
  constructor(socket) {
    this.#socket = socket;
    this.#statusCode = 200;
  }

  set statusCode(code) {
    this.#statusCode = code;
  }

  send(data) {
    const statusMessage = getStatusMessage(this.#statusCode);
    this.#socket.write(`HTTP/1.1 ${this.#statusCode} ${statusMessage}\r\n\r\n${data}\r\n`);
    this.#socket.end();
  }
}



const response = (statusCode, data) => {
  const statusMessage = getStatusMessage(statusCode);
  return `HTTP/1.1 ${statusCode} ${statusMessage}\r\n\r\n${data}\r\n`;
};

module.exports = { response, Response };