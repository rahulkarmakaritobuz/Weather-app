// const http = require("http");
// const port = 200;
// const weatherData = {
//   data: {
//     location: "Kolkata",
//   },
//   status: "success",
//   messsage: "OK",
// };

// function getRoutesBaseData(route, data) {
//   //   let output;
//   //   try {
//   //     output = data[route];
//   //   } catch (a) {
//   //     console.log(e);
//   //   } finally {
//   //     return output;
//   //   }
//   let status = 200;
//   return JSON.stringify({
//     data,
//     apiData: data,
//     status,
//     route,
//     message: "Hey I am rounting...",
//   });
// }

// function getRequestData(req) {
//   if (req.url === "/") {
//     return getRoutesBaseData("/", Data);
//   } else if (req.url === "/api") {
//     return getRoutesBaseData("/", Data);
//   } else {
//     return getRoutesBaseData("", Data);
//   }
// }

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "content-Type": "application/json" });
//   res.end(getRequestData(req));

//   //   console.log(req.url);

//   //   res.writeHead(200, { "content-Type": "text/plain" });
//   //   res.end("test", res.url);
//   //   res.writeHead(200, { "content-Type": "application/json" });
//   //   res.end(JSON.stringify(weatherData));
// });
// server.listen(200, () => {
//   console.log("port ...", port);
// });

const http = require("http");
const fs = require("fs");
let readData = fs.readFileSync("../weather_app/modules/db.txt");
readData = JSON.parse(readData);
// console.log(readData);
// const database=require('../weather_app/modules/db.txt')
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/") {
    res.writeHead(200, { "content-Type": "application/json" });
    res.end(JSON.stringify(readData));
  } else if (req.url == "/home") {
    res.writeHead(200, { "content-Type": "text/html" });
    res.end("<h1>This is a home page...</h1>");
  } else if (req.url == "/about") {
    res.writeHead(200, { "content-Type": "text/html" });
    res.end("<h1>This is a about page...</h1>");
  } else {
    res.writeHead("404", { "content-Type": "text/html" });
    res.end("Error: Page not found!");
  }
  //   console.log(req.url);
  //   res.end("Hello Rahul from local server...");
});
server.listen(200, () => {
  console.log("Port 200 running...");
});
