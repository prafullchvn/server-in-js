
const parseRequestLine = requestLine => {
  const [method, uri, protocol] = requestLine.split(' ');
  return { method, uri, protocol };
};

const parseHeader = line => {
  const indexOfColon = line.indexOf(':');
  const key = line.slice(0, indexOfColon);
  const value = line.slice(indexOfColon + 1);

  return [key, value];
}

const parseHeaders = lines => {
  let index = 0;
  let headers = {};
  while (index < lines.length && lines[index].length !== 0) {
    const [header, value] = parseHeader(lines[index]);
    headers[header] = value;
    index++;
  }
  return headers;
};


const parseRequest = request => {
  const lines = request.split('\r\n');
  const requestLine = parseRequestLine(lines[0]);
  const headers = parseHeaders(lines.slice(1));

  return { ...requestLine, headers };
};

module.exports = { parseRequest };