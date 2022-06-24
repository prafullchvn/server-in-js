# todo

- [ ] Implement method called addHeader to add header to response.
- [ ] Implement method to write all the headers.
- [ ] Refactor send method of response entity.
- [ ] Send html file content as response.
- [ ] Consider creating entity for request handler.
- [ ] Extract URL handler functions in their separate file inside directory 'controller'.
- [ ] Test functions used by parseRequest.
- [ ] Install developer dependency 'nodemon'.

# done

- [x] Merge connectionHandler back with starServer.
- [x] Changed connectionHandler processRequest.
- [x] Move the router entity to separate directory.
- [x] Consider creating entity for router.
- [x] Make use of response class inside router.
- [x] Consider creating entity for response.
- [x] Move the parser functions into separate file.
- [x] Extract routing function to it own file.
- [x] ~~Extract request handler to its own file.~~
- [x] Send the 'unknown' response to unknown url.
- [x] Send the status code for 404 for unknown url.
- [x] Implement the handleRequest function.
- [x] Implement the headers parser.
- [x] Implement startSever function which takes the port and callback.
