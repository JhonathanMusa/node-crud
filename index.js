const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "Empresa";

app.use(bodyParser.urlencoded({ extended: false }));

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((user) => {
    console.log("Database Connected");
    const db = user.db(dbName);
    const empresaCollection = db.collection("Empleados");

    app.set("view engine", "ejs");

    app.use(require("./routes/index.js"));

    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((error) => console.error(error));
