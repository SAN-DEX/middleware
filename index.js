// const express = require("express");
// const app = express();

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/greet", (req, res) => {
//   res.send("I miss you ❤...");
// });

// app.listen(9090, () => console.log("🚀🚀 Server running..."));

const express = require("express");
const indexRouter = require("./routes/index.router");
const usersRouter = require("./routes/users.router");

const app = express();

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.listen(4000, () => {
  console.log("🚀 Server up and running.");
});
