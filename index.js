const express = require("express");
const app = express();
const Mongodb = require("mongodb");
const URL = "mongodb://localhost:27017";
const db_name = "company";
const PORT = process.env.PORT || 8000;

Mongodb.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((user) => {
    console.log("Database Connected");
    const db = user.db(db_name);
    const companyCollection = db.collection("employ");

    app.set("view engine", "ejs");
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

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
        res.status(200).json(query);
        res.redirect("/view");
      });
    });

    app.post("/delete", (req, res) => {
      companyCollection
        .deleteOne(req.body)
        .then((result) => {
          res.redirect("/delete");
        })
        .catch((error) => console.error(error));
    });

    app.listen(PORT, () => {
      console.log("Server running on port 8080");
    });
  })
  .catch((error) => console.error(error));
