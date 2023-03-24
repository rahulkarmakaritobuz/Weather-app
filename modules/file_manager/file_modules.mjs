import * as path from "path";
import * as process from "process";
import * as fs from "fs";

export const findPath = (data) => {
  return path.join(process.cwd(), data);
};

export const createFile = (...value1) => {
  fs.writeFile(value1[0], value1[1], (err) => {
    if (err) throw err;
  });
  console.log("File create successfully!");
};

export const readFile = (...value1) => {
  let value = fs.readFileSync(value1[0], "utf8");
  return value;
};

export const createFolder = (...value1) => {
  console.log("Creating folder...");
  fs.mkdirSync(value1[0], (err) => {
    if (err) console.log("Directory already exist!");
  });
};

export const readFolder = (...value1) => {
  let files = fs.readdirSync(value1[0], (err) => {
    if (err) console.log("Cann't read this folder!");
  });
  return files;
};

export const deleteFolder = (...value1) => {
  fs.rmdir(value1[0], (err) => {
    if (err) console.log("Folder cann't find");
  });
};

export const deleteFile = (...value1) => {
  fs.unlink(value1[0], (err) => {
    if (err) console.log("Cann't delete this file!!!");
  });
};

export const renameFolder = (...value1) => {
  fs.rename(value1[0], value1[1], (err) => {
    if (err) console.log("Cann't rename this file!");
  });
};

export const currentPath = () => {
  return process.cwd();
};
