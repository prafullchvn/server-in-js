const router = ({ uri }, response) => {
  if (uri === '/') {
    response.send('index');
    return;
  }

  response.send('Not Found');
};

module.exports = { router };
