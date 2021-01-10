function findUsers(db, db_collection, callback) {
  const collection = db.collection(db_collection);

  collection.find({}).toArray(function (err, docs) {
    // assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });
}

module.exports = {
  findUsers,
};
