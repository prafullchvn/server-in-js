const notFound = (request, response) => {
  response.statusCode = 404;
  response.send('Not Found');
}

class Router {
  constructor() {
    this.routes = {};
  }

  addRoute(route, destinationFn) {
    this.routes[route] = destinationFn;
  }

  routeTo(request, response) {
    const { uri } = request;
    const handler = this.routes[uri];

    if (handler) {
      return handler(request, response);
    }

    return notFound(request, response);
  }
}

module.exports = { Router };
