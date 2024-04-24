const express = require("express");
const path = require("path");
const cors = require("./middlewares/cors");
const bodyParser = require("body-parser");
const mainRoute = require("./routes/main");
const gamesRouter = require("./routes/games");

const PORT = 3000;
const app = express();

app.use(
  cors,
  bodyParser.json(),
  express.static(path.join(__dirname, "public")),
  mainRoute,
  gamesRouter
);

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});
// const fs = require("fs").promises;

// const readData = async (url) => {
//   try {
//     const data = await fs.readFile(url, "utf-8");
//     const json = JSON.parse(data);
//     return json;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const writeData = async (url, data) => {
//   const json = JSON.stringify(data);
//   await fs.writeFile(url, json);
// };
