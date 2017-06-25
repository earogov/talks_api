"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const express = require("express");
const app = express();
// Configuration
app.route("/").get(function (req, res) {
    res.send("server works!");
});
exports.Instance = http.createServer(app);
//# sourceMappingURL=server.js.map