const express = require("express");
const app = express();
const MongoClient = require("mongodb");
const URL = "mongodb://localhost:27017";
const db_name = "EjemploD2";
const db_collection = "users";
const PORT = process.env.PORT || 8000;

const { findUsers } = require("./controllers/controller");

app.route("/users").get((req, res) => {
  MongoClient.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((user) => {
      console.log("Database Connected");

      app.use(express.json());
      app.use(express.urlencoded({ extended: true }));

      const db = user.db(db_name);

      // app.use(require("./routes/routes."));

      // Calling the function 'findUsers()'
      findUsers(db, db_collection, () => {
        user.close();
      });
    })
    .catch((err) => console.error(err));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Get all the users
