var express = require("express");
const cors = require("cors");
var app = express();
const PORT = 8080;
const db = require("./db");
const router = require("./routes/routes");
app.use(
  cors({
    origin: "http://localhost:5173",
    // origin: "*"
  })
);
db.initDB();

app.use(express.json());
app.use("/", router);



app.listen(PORT, () => {
  console.log(`[SUCCESS]: listening on port " + ${PORT}`);
});

process.on("SIGINT", function () {
  db.closeDB();
  console.log("About to close");
});
