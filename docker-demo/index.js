const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("welcome to JR cms");
});

app.listen(() => {
  console.log(`server listening on port 3000`);
});
