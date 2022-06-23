const assert = require('assert');
const { response } = require('../src/response.js');

describe('Response', () => {
  it('Should return 200 status code when uri is valid.', () => {
    const expectedResponse = 'HTTP/1.1 200 OK\r\n\r\nindex\r\n';

    assert.deepEqual(response(200, 'index'), expectedResponse);
  });

  it('Should return 200 status code when uri is valid.', () => {
    const expectedResponse = 'HTTP/1.1 404 Not Found\r\n\r\nNot Found\r\n';

    assert.deepEqual(response(404, 'Not Found'), expectedResponse);
  });
});