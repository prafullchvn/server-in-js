const assert = require('assert');

const { parseRequest } = require('../src/requestParser.js');

describe('parseRequest', () => {
  it('Should return the parsed headers.', () => {
    const expected = {
      method: 'GET',
      uri: '/',
      protocol: 'HTTP/1.1',
      headers: {
        host: 'localhost:8000',
        'user-agent': 'curl/7.79.1',
        access: '*/*'
      }
    };

    const request = 'GET / HTTP/1.1\r\nhost: localhost:8000\r\nuser-agent:curl/7.79.1\r\nhost:localhost:8000\r\naccess:*/*\r\n\r\n';

    assert.deepStrictEqual(parseRequest(request), expected);
  });
});
