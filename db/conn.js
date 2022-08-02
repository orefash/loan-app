const { MongoClient } = require("mongodb");
const connectionString = "< MONGODB URL >";
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {

  getDb: function () {
    return client;
  },
};
