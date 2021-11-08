import { dataDir } from "../util/constants.js";
import pkg from "node-cron";
const { schedule } = pkg;
import { readdirSync } from "fs";
import processFile from "./processor.js";

console.log("**************** Application Started *******************");

schedule("*/5 * * * * *", () => {
  console.log("running a task every 5 second");
  loadInboundFiles();
});

function loadInboundFiles() {
  const files = readdirSync(dataDir);
  for (const file of files) {
    console.log(file);
    processFile(dataDir + file);
  }
}
