import * as config from "./config";
import { server } from "./server";
import { db } from "./db";


const handleExit = function(code: number): void {
  const actions = [server.close, db.destroy];
  actions.forEach((close, i) => {
    try {
      close(() => {
        if (i === actions.length - 1) process.exit();
      });
    } catch (error) {
        if (i === actions.length - 1) process.exit();
      }
  });
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