const http = require("http");
const fs = require("fs");
let readData = fs.readFileSync("./modules/db.txt");
readData = JSON.parse(readData);

const server = http.createServer((req, res) => {
  let place = req.url.substring(1).toLowerCase();
  place = place.substring(1, -1).toUpperCase() + place.substring(1); //For removing /n from the end of input sting
  let data = readData.find(
    (loc) => loc.location.name === place,
    (err) => {
      res.writeHead("404", { "content-Type": "text/html" });
      res.end("Error: Page not found!");
    }
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.writeHead(200, { "content-Type": "application/json" });
  res.end(JSON.stringify(data));
});
server.listen(8080, () => {
  console.log("Port 8080 running...");
});
