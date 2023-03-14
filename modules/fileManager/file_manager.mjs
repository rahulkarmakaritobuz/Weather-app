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
  let value = fs.readFileSync(value1[0], "utf8");
  return value;
};
let goto = (...value1) => {
  process.chdir(value1[0]);
};
let createFolder = (...value1) => {
  try {
    if (!fs.existsSync(value1[0])) {
      fs.mkdirSync(value1[0], (err) => {
        if (err) throw err;
      });
    }
  } catch (err) {
    console("Directory already exist!");
  }
};
let readFolder = (...value1) => {
  let files = fs.readdirSync(value1[0], (err) => {
    if (err) throw err;
  });
  return files;
};

let deleteFolder = (...value1) => {
  fs.rmdir(value1[0], (err) => {
    if (err) throw err;
  });
};
let deleteFile = (...value1) => {
  fs.unlink(value1[0], (err) => {
    if (err) throw err;
  });
};
let renameFolder = (...value1) => {
  fs.rename(value1[0], value1[1], (err) => {
    if (err) throw err;
  });
};
let currentPath = () => {
  return path.resolve();
};

let input = process.argv;
// console.log(input[2], ",", input[3], ",", input[4]);

console.log(
  "To read file data press 1 \nTo create a file or write data into a file press 2\nTo Create a folder press 3\nTo rename folder press 4\nTo delete a folder press 5\nTo delete a file press 6\nTo read folder press 7\nTo show the current path press 8\n"
);
console.log("Follow the way of giving input below...");
console.log(
  "Option --> (?File Name1,(?File Name2)) --> (?value) --> (?Path)\n"
);
// let key = process.argv;
try {
  switch (input[2].trim()) {
    case "1": {
      console.log(readFile(input[3]));
      break;
    }
    case "2": {
      createFile(input[3], input[4]);
      break;
    }
    case "3": {
      createFolder(input[3]);
    }
    case "4": {
      renameFolder(input[3], input[4]);
      break;
    }
    case "5": {
      deleteFolder(input[3]);
      break;
    }
    case "6": {
      deleteFile(input[3], input[4]);
      break;
    }
    case "7": {
      console.log(readFolder(input[3]));
      break;
    }
    case "8": {
      console.log(currentPath());
      break;
    }
    // case "9": {
    // }
    default: {
      console.log("Enter a correct option!");
      break;
    }
  }
} catch (err) {
  console.log("Give the input in correct way!");
}
