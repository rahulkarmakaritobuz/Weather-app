const net = require("net");
const client = net.connect({ port: 62071 }, () => {
  console.log("Connected to the server...\n");
  client.write("Hello Rahul from client...\n");
});
client.on("data", (data) => {
  console.log("Server data : ", data.toString(), "\n");
  client.end();
});
client.on("end", () => {
  console.log("Disconnect from the server...\n");
});
