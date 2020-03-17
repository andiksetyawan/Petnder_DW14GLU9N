require("dotenv").config();

const express = require("express");
const cors = require("cors")
const app = express();

const port = process.env.PORT;
app.use(cors());
const routes = require("./routers");

app.use(express.json());
app.use("/api/v1", routes);

app.use((req, res, next) => {
  const success = false;
  const status = 404;
  const message = "Endpoint Not Found";
  const data = {};
  res.status(status).json({ success, message, data   });
});

// app.use((error, req, res, next) => {
//   console.log(error);
//   const status = error.statusCode || 500;
//   const message = error.message;
//   const data = error.data;
//   res.status(status).json({ succes: false, message: message, body: data });
// });

app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ message: "You are not authorized." });
  } else {
    next(err);
  }
});

app.listen(port, () => console.log(`running on port ${port}`));
