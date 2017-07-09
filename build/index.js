"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("./config");
const server_1 = require("./server");
const db_1 = require("./db");
const handleExit = function (code) {
    const actions = [server_1.server.close, db_1.db.destroy];
    actions.forEach((close, i) => {
        try {
            close(() => {
                if (i === actions.length - 1)
                    process.exit();
            });
        }
        catch (error) {
            if (i === actions.length - 1)
                process.exit();
        }
    });
};
const handleSignal = function () {
    process.exit();
};
const handleException = function (error) {
    console.log(error.stack);
    process.exit();
};
process.on("exit", handleExit);
process.on("SIGINT", handleSignal);
process.on("SIGTERM", handleSignal);
process.on("uncaughtException", handleException);
server_1.server.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}...`);
});
//# sourceMappingURL=index.js.map