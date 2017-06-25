import * as http from "http";
import * as express from "express";

const app = express();

// Configuration
app.route("/").get(function(req, res) {
  res.send("server works!");
});
export const Instance = http.createServer(app);