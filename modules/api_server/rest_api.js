const express = require("express");
const app = express();
const fs = require("fs");
// const { ppid } = require("process");

let user = {
  user4: {
    name: "himadri",
    dept: "CSE",
    id: 4,
  },
};
let getData = (fileName) => {
  fs.readFileSync(__dirname + "/" + fileName, "utf-8", (data, err) => {
    return data;
  });
};
let postData = (db, data) => {
  db = JSON.parse(db);
  console.log(db);
  console.log(data);
  //   db["user4"] = data["user4"];
  //   return db;
};
let post = app
  .get("/api", (req, res) => {
    let db = getData("database.JSON");
    let data = postData(db, user);
    // res.end(JSON.stringify(data));
    // fs.readFile(__dirname + "/" + "database.JSON", "utf-8", (err, data) => {
    //   //   data = JSON.parse(data);
    //   //   data["user4"] = user["user4"];
    //   //   console.log(data);
    //   //   res.end(JSON.stringify(data));
    //   data = JSON.parse(data);
    //   data["user4"] = user["user4"];
    //   console.log(data);
    //   res.end(JSON.stringify(data));
    // });
  })
  .listen(4000, () => {
    console.log("heloo");
  });
