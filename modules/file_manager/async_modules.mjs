import * as path from "path";
import * as fs from "fs/promises";
import * as process from "process";

// const findPath = (data) => {
//   return path.join(process.cwd(), data);
// };

export const readFile = async (...value1) => {
  const data = await fs.readFile(value1[0], "utf-8");
  // console.log("data : ", data);
  return data;
};

export const createFile = async (...value1) => {
  await fs.writeFile(value1[0], value1[1], (err) => {
    if (err) throw err;
  });
  console.log("File create successfully!");
};

export const createFolder = async (...value1) => {
  await fs.mkdir(value1[0], (err) => {
    if (err) console.log("Directory already exist!");
  });
};

export const readFolder = async (...value1) => {
  console.log("readFolder:", value1[0].trim(" "));
  let files = await fs.readdir("value1[0].trim()");
  console.log("files : ", files);
  return files;
};

export const deleteFolder = async (...value1) => {
  await fs.rmdir(value1[0]);
};

export const deleteFile = async (...value1) => {
  await fs.unlink(value1[0], (err) => {
    if (err) console.log("Cann't delete this file!!!");
  });
};

export const renameFolder = async (...value1) => {
  await fs.rename(value1[0], value1[1], (err) => {
    if (err) console.log("Cann't rename this file!");
  });
};

export const currentPath = () => {
  return process.cwd();
};
