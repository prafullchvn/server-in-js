const assert = require('assert');

const { Router } = require('../src/router/router.js');
const { Response } = require('../src/response.js');

describe('router', () => {
  it('Should write given response to the socket.', () => {
    let calledHandler = false;
    const dummyRequestHandler = () => {
      calledHandler = true;
    }

    const router = new Router();
    router.addRoute('/', dummyRequestHandler);
    router.routeTo({ uri: '/' });

    assert.ok(calledHandler);
  });

  it('Should give the 404 response code when unknown url is passed.', () => {
    const expectedResponse = 'HTTP/1.1 404 Not Found\r\n\r\nNot Found';

    let actualResponse
    const mockedSocket = {
      write: (data) => actualResponse = data,
      end: x => x
    };

    const router = new Router();
    const response = new Response(mockedSocket);
    router.routeTo({ uri: '/' }, response);

    assert.deepEqual(actualResponse, expectedResponse);
  });
});
