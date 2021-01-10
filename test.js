/* const companyCollection = db.collection("employ");


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

 */