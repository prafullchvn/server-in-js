const assert = require('assert');
const { Response } = require('../src/response.js');

describe('Response', () => {
  it('Should return 200 status code when uri is valid.', () => {
    const expectedResponse = 'HTTP/1.1 200 OK\r\n\r\nindex';

    let actualResponse;
    const mockedSocket = {
      write: (data) => {
        actualResponse = data;
      },
      end: x => x
    };

    const response = new Response(mockedSocket);
    response.send('index');
    assert.deepEqual(expectedResponse, actualResponse);
  });

  it('Should return 200 status code when uri is valid.', () => {
    const expectedResponse = 'HTTP/1.1 404 Not Found\r\n\r\nNot Found';
    let actualResponse;
    const mockedSocket = {
      write: (data) => {
        actualResponse = data;
      },
      end: x => x
    };

    const response = new Response(mockedSocket);
    response.statusCode = 404;
    response.send('Not Found');
    assert.deepEqual(actualResponse, expectedResponse);
  });
});