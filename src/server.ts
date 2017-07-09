import * as http from "http";
import * as express from "express";

const app = express();

// Configuration
app.route("/").get(function(req, res) {
  res.send("server is alive!");
});

export const server = http.createServer(app);