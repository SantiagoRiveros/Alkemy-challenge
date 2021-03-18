const express = require("express");
const routes = require("./routes/index.js");

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

server.use("/", routes);

module.exports = server;
