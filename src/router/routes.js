const { Router } = require('./router.js');
const { index } = require('../controller/textResponse.js')

const setRoutes = () => {
  const router = new Router();
  router.addRoute('/', index);

  return router;
};

module.exports = { router: setRoutes() };