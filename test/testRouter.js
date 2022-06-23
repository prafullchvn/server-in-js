const assert = require('assert');

const { router } = require('../src/router.js');
const { Response } = require('../src/response.js');

describe('router', () => {
  it('Should write given response to the socket.', () => {
    const headers = { uri: '/' };
    const expectedResponse = 'HTTP/1.1 200 OK\r\n\r\nindex\r\n';
    let actualResponse;

    const mockedSocket = {
      write: (data) => {
        actualResponse = data;
      },
      end: x => x
    };

    const response = new Response(mockedSocket);
    router(headers, response);
    assert.deepEqual(actualResponse, expectedResponse);
  });

  it('Should give the 404 response code when unknown url is passed.', () => {
    const headers = { uri: '/unknownUrl' };
    const expectedResponse = 'HTTP/1.1 404 Not Found\r\n\r\nNot Found\r\n';
    let actualResponse;

    const mockedSocket = {
      write: (data) => {
        actualResponse = data;
      },
      end: x => x
    };

    const response = new Response(mockedSocket);
    response.statusCode = 404;
    router(headers, response);
    assert.deepEqual(actualResponse, expectedResponse);
  });
});
