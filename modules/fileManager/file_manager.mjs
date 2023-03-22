import * as fs from "fs";
import * as path from "path";
import * as process from "process";

let createFile = (...value1) => {
  fs.writeFile(value1[0], value1[1], (err) => {
    if (err) throw err;
  });
  console.log("File create successfully!");
};
let readFile = (...value1) => {
  console.log("value1[0]:", value1[0]);
  let value = fs.readFileSync(value1[0], "utf8");
  console.log("value : ", value);
  return value;
};
let createFolder = (...value1) => {
  console.log("Creating folder...");
  fs.mkdirSync(value1[0], (err) => {
    if (err) console.log("Directory already exist!");
  });
};
let readFolder = (...value1) => {
  let files = fs.readdirSync(value1[0], (err) => {
    if (err) console.log("Cann't read this folder!");
  });
  return files;
};
let deleteFolder = (...value1) => {
  fs.rmdir(value1[0], (err) => {
    if (err) console.log("Folder cann't find");
  });
};
let deleteFile = (...value1) => {
  fs.unlink(value1[0], (err) => {
    if (err) console.log("Cann't delete this file!!!");
  });
};
let renameFolder = (...value1) => {
  fs.rename(value1[0], value1[1], (err) => {
    if (err) console.log("Cann't rename this file!");
  });
};
let currentPath = () => {
  return path.resolve();
};

process.stdin.on("data", (data) => {
  data = data.toString().split(" ");
  console.log(data);
  console.log(
    "To read file data press 1 \nTo create a file or write data into a file press 2\nTo Create a folder press 3\nTo rename folder press 4\nTo delete a folder press 5\nTo delete a file press 6\nTo read folder press 7\nTo show the current path press 8\nTo exit press -1\n"
  );
  console.log("Follow the way of giving input below...");
  console.log(
    "Option --> (?File Name1,(?File Name2)) --> (?value) --> (?Path)\n"
  );
  try {
    switch (data[0]) {
      case "1": {
        data[1] = process.cwd() + "/" + data[1];
        console.log(data[1]);
        console.log(readFile(data[1].trim()));
        break;
      }
      case "2": {
        data[1] = process.cwd() + "/" + data[1];
        console.log("3rd input : ", data[1]);
        createFile(data[1].trim(), data[2]);
        break;
      }
      case "3": {
        data[1] = process.cwd() + "/" + data[1];
        createFolder(data[1].trim());
        break;
      }
      case "4": {
        data[1] = process.cwd() + "/" + data[1];
        data[2] = process.cwd() + "/" + data[2];
        renameFolder(data[1].trim(), data[2].trim());
        break;
      }
      case "5": {
        data[1] = process.cwd() + "/" + data[1];
        deleteFolder(data[1].trim());
        break;
      }
      case "6": {
        data[1] = process.cwd() + "/" + data[1];
        deleteFile(data[1].trim(), data[2]);
        break;
      }
      case "7": {
        data[1] = process.cwd() + "/" + data[1];
        console.log(readFolder(data[1]).trim());
        break;
      }
      case "8": {
        console.log(currentPath());
        break;
      }
      case "-1": {
        process.exit();
      }
      default: {
        console.log("Enter a correct option!");
        break;
      }
    }
  } catch (err) {
    console.log("Give the input in correct way!");
  }
});
