const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Mongodb = require("mongodb");
const url = "mongodb://localhost:27017";

Mongodb.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((user) => {
    console.log("Database Connected");
    const db = user.db("EjemploDB2");
    const companyCollection = db.collection("users");

    app.set("view engine", "ejs");
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(require("./routes/index"));

    app.post("/user", (req, res) => {
      companyCollection
        .insertOne(req.body)
        .then((result) => {
          res.redirect("/user");
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

    app.listen(8080, () => {
      console.log("Server running on port 8080");
    });
  })
  .catch((error) => console.error(error));
