const getStatusMessage = (statusCode) => {
  const statuses = {
    200: 'OK',
    404: 'Not Found'
  };

  return statuses[statusCode];
};

const response = (statusCode, data) => {
  const statusMessage = getStatusMessage(statusCode);
  return `HTTP/1.1 ${statusCode} ${statusMessage}\r\n\r\n${data}\r\n`;
};

module.exports = { response };