const assert = require('assert');
const { EventEmitter } = require('events');
const { processRequest } = require('../src/server.js');

describe('processRequest', () => {
  it('Should handle the request with proper parsed request.', () => {
    const mockedSocket = new EventEmitter();
    const mockedRequestHandler = (req, res) => {
      assert.deepStrictEqual(req, {
        headers: {},
        method: 'GET',
        uri: '/',
        protocol: 'HTTP/1.1'
      });
    };

    const request = 'GET / HTTP/1.1\r\n\r\n';

    processRequest(request, mockedRequestHandler, mockedSocket);
    mockedSocket.emit('data', request);
  });
});