// const mongoose = require("mongoose");

// const connectToMongo = () => {
//   return new Promise((resolve, reject) => {
//     mongoose
//       .connect("mongodb://localhost:27017/cgidb", {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       })
//       .then(() => {
//         console.log("Connected to Mongo Successfully");
//         resolve();
//       })
//       .catch((error) => {
//         console.error("Error connecting to MongoDB:", error);
//         reject(error);
//       });
//   });
// };

// module.exports = connectToMongo;


const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/cgidb";
const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to Mongo Successfully");
  });
};

module.exports = connectToMongo;