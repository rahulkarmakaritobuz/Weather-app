import * as path from "path";
import * as process from "process";
import * as operation from "./async_modules.mjs";

console.log(
  "To read file data press 1 \nTo create a file or write data into a file press 2\nTo Create a folder press 3\nTo rename folder press 4\nTo delete a folder press 5\nTo delete a file press 6\nTo read folder press 7\nTo show the current path press 8\nTo exit press -1\n"
);
console.log("Follow the way of giving input below...");
console.log(
  "Option --> (?File Name1,(?File Name2)) --> (?value) --> (?Path)\n"
);

process.stdin.on("data", async (data) => {
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
  const findPath = (data) => {
    return path.join(process.cwd(), data);
  };
  try {
    switch (data[0]) {
      case "1": {
        const filePath = findPath(data[1]);
        const message = await operation.readFile(filePath.trim());
        console.log(message);
        break;
      }
      case "2": {
        const filePath = findPath(data[1]);
        console.log("3rd input : ", data[1]);
        operation.createFile(filePath.trim(), data[2]);
        break;
      }
      case "3": {
        const filePath = findPath(data[1]);
        operation.createFolder(filePath.trim());
        break;
      }
      case "4": {
        const filePath1 = findPath(data[1]);
        const filePath2 = findPath(data[2]);
        operation.renameFolder(filePath1.trim(), filePath2.trim());
        break;
      }
      case "5": {
        const filePath = findPath(data[1]);
        operation.deleteFolder(filePath.trim());
        break;
      }
      case "6": {
        const filePath = findPath(data[1]);
        operation.deleteFile(filePath.trim(), data[2]);
        break;
      }
      case "7": {
        const filePath = findPath(data[1]);
        const files = await operation.readFolder(filePath);
        console.log(files);
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
