const express = require("express");

const app = express();
app.set("secret", "ukq2egqayuawkd");
app.use(express.json());
app.use(require("cors")());
app.use("/fe", express.static(__dirname + "/fe"));
// app.use("/", express.static(__dirname + "/blog"));
// app.use("/blogedit", express.static(__dirname + "/blogedit"));
// app.use("/main", express.static(__dirname + "/web"));
// app.use("/admin", express.static(__dirname + "/admin"));

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
