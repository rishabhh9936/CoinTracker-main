const mongoose = require("mongoose");

const uri =
  "mongodb+srv://jamss0112:5DSEJjkffdDCe12X@cointracker-cluster.tbg1s.mongodb.net/?retryWrites=true&w=majority&appName=CoinTracker-Cluster";
mongoose;

function dbConnection() {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = dbConnection;
