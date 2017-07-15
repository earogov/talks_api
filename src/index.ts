"use strict";

import * as config from "./config";
import {server} from "./server/server";
import {db} from "./server/db";


const handleExit = function(code: number): void {

  var total: number = 0;
  var closed: number = 0;

  total++;
  server.close(() => {
    console.log("Talks_API server closed");
    closed++;
    return this;
  });

  total++;
  db.destroy(() => {
    console.log("Talks_API server closed");
    closed++;
  });

  setTimeout(() => {if (closed === total) process.exit(); }, 100);
};

const handleSignal = function(): void {
  process.exit();
};

const handleException = function(error: Error): void{
  console.log(error.stack);
  process.exit();
};

process.on("exit", handleExit);
process.on("SIGINT", handleSignal);
process.on("SIGTERM", handleSignal);
process.on("uncaughtException", handleException);

server.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});