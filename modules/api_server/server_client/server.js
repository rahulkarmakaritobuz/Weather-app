const net = require("net");
let server = net
  .createServer((socket) => {
    socket.end("Hello Rahul from server...\n");
  })
  .on("error", (err) => {
    console.log("Error\n");
  });
server.listen(() => {
  address = server.address();
  console.log("Open server on : ", address, "\n");
});
