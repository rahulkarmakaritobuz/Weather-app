import * as path from "path";
import * as process from "process";
import * as operation from "./file_modules.mjs";

console.log(
  "To read file data press 1 \nTo create a file or write data into a file press 2\nTo Create a folder press 3\nTo rename folder press 4\nTo delete a folder press 5\nTo delete a file press 6\nTo read folder press 7\nTo show the current path press 8\nTo exit press -1\n"
);
console.log("Follow the way of giving input below...");
console.log(
  "Option --> (?File Name1,(?File Name2)) --> (?value) --> (?Path)\n"
);

process.stdin.on("data", (data) => {
  data = data.toString().split("\n");
  data = data[0].toString().split(" ");
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
        data[1] = path.join(process.cwd(), data[1]);
        console.log(operation.readFile(data[1].trim()), "\n");
        break;
      }
      case "2": {
        data[1] = path.join(process.cwd(), data[1]);
        console.log("3rd input : ", data[1]);
        operation.createFile(data[1].trim(), data[2]);
        break;
      }
      case "3": {
        data[1] = path.join(process.cwd(), data[1]);
        operation.createFolder(data[1].trim());
        break;
      }
      case "4": {
        data[1] = path.join(process.cwd(), data[1]);
        data[2] = path.join(process.cwd(), data[2]);
        operation.renameFolder(data[1].trim(), data[2].trim());
        break;
      }
      case "5": {
        data[1] = path.join(process.cwd(), data[1]);
        operation.deleteFolder(data[1].trim());
        break;
      }
      case "6": {
        data[1] = path.join(process.cwd(), data[1]);
        operation.deleteFile(data[1].trim(), data[2]);
        break;
      }
      case "7": {
        data[1] = path.join(process.cwd(), data[1]);
        console.log(operation.readFolder(data[1]));
        break;
      }
      case "8": {
        console.log(operation.currentPath());
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
