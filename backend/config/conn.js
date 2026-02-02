const moongoose = require("mongoose");
exports.connection = async () => {
  try {
    moongoose.connect("mongodb://localhost:27017/full-stack");
    console.log("connection succesfully established");
  } catch (error) {
    console.log("soome error happen in connectioin");
    process.exit(1);
  }
};
