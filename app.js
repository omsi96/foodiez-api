const express = require("express");
const connect = require("./db/config/connect");
const middleware = require("./Middleware");
const routers = require("./Routers");
const app = express();

app.use(middleware);
app.use(routers);

connect(async () => {
  await app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });
});
