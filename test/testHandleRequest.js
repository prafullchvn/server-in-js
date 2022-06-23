const assert = require('assert');

const { handleRequest } = require('../src/server.js');

describe('handleRequest', () => {
  it('Should write given response to the socket.', () => {
    const headers = { uri: '/' };
    const expectedResponse = 'HTTP/1.1 200 OK\r\nindex\r\n';

    const mockedSocket = {
      write: (data) => {
        assert.deepStrictEqual(data, expectedResponse)
      }
    }
    handleRequest(headers, mockedSocket);
  });
});
