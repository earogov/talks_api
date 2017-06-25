"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("./config");
const server = require("./server");
server.Instance.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}...`);
});
//# sourceMappingURL=index.js.map