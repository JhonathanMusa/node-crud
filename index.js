const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "EjemploDB2";

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((user) => {
    console.log("Database Connected");
    const db = user.db(dbName);
    const companyCollection = db.collection("users");

    app.use(bodyParser.urlencoded({ extended: false }));
    app.set("view engine", "ejs");

    app.use(require("./routes/index"));

    app.post("/users", (req, res) => {
      companyCollection
        .insertOne(req.body)
        .then((result) => {
          res.redirect("/users");
        })
        .catch((error) => console.error(error));
    });

    app.post("/view", (req, res) => {
      const query = req.body;
      companyCollection.find(query).toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        res.redirect("/view");
      });
    });

    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((error) => console.error(error));
