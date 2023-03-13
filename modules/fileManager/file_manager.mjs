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

let input = process.argv;
console.log(input[2], ",", input[3], ",", input[4]);

console.log(
  "To read file data press 1 \nTo write data into a file press 2\nTo Create a file press 3\nTo create file in another directory 4\n"
);
// let key = process.argv;
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
    console.log("Hello!!!");
    createFile(input[3], input[4]);
    break;
  }
  case "4": {
    goto(input[3], input[4]);
    console.log("Updated working directory is: " + process.cwd());
    createFile("3", input[4]);
    break;
  }
  default: {
    console.log("Enter a correct option!");
    break;
  }
}
// console.log("Length of input : ", input);
// input.forEach((val, index) => {
//   console.log(`${val}:${index}`);
// });

// try {
//   process.chdir("../os");
//   console.log("directory has successfully been changed");
// } catch (err) {
//   console.error("error while changing directory");
// }
