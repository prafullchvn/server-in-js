const assert = require('assert');

const { handleRequest } = require('../src/server.js');

describe('handleRequest', () => {
  it('Should write given response to the socket.', () => {
    const headers = { uri: '/' };
    const expectedResponse = 'HTTP/1.1 200 OK\r\n\r\nindex\r\n';
    let actualResponse;

    const mockedSocket = {
      write: (data) => {
        actualResponse = data;
      }
    };

    handleRequest(headers, mockedSocket);
    assert.deepEqual(actualResponse, expectedResponse);
  });

  it('Should give the 404 response code when unknown url is passed.', () => {
    const headers = { uri: '/unknownUrl' };
    const expectedResponse = 'HTTP/1.1 404 Not Found\r\n\r\nNot Found\r\n';
    let actualResponse;

    const mockedSocket = {
      write: (data) => {
        actualResponse = data;
      }
    };

    handleRequest(headers, mockedSocket);
    assert.deepEqual(actualResponse, expectedResponse);
  });
});
