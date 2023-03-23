import fs from "fs";

// Asynchronous read
fs.readFile("data.mjs", function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("Asynchronous read: " + data.toString());
});

let data = {
  location: {
    name: "Kolkata",
    lat: 22.57,
    lon: 88.37,
  },
  current: {
    tempC: 32.0,
    tempF: 89.6,
    isDay: 1,
    condition: {
      text: "Mist",
    },
    humidity: 38,
    feelsLikeC: 29.8,
    feelsLikef: 85.6,
  },
};
data = "HELLO WORLD!!!";
fs.writeFile("db.txt", JSON.stringify(data), (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log("Data Updated!");
});
