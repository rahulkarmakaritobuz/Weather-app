// import * as data from "./data.mjs";

// import * as data from "./modules/data.mjs";
import * as fs from "fs";

let weather = "";
try {
  const data = fs.readFileSync("db.txt", "utf8");
  weather = JSON.parse(data);
} catch (err) {
  console.log(err);
}

let newLocation = {
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

let deleteRec = (location) => {
  weather.splice(
    weather.findIndex((x) => x.location.name === location),
    1
  );
};

let addRec = () => {
  weather.push(newLocation);
};

let updateRec = (cityName, humidity) => {
  let rec = weather.find((x) => x.location.name === cityName);
  rec.current.humidity = humidity;
  //   console.log("rec : ", rec.current.humidity);
};

console.log("Deleted Data :", deleteRec("Delhi"));
console.log("Local Data : ", weather);
addRec();
console.log("Adding Location : ", weather);
updateRec("Kolkata", 0);
console.log("Update Location : ", weather);

fs.writeFile("db.txt", JSON.stringify(weather), (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log("Data Updated!");
});
