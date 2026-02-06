const moongoose = require("mongoose");
exports.connection = async () => {
  try {
    moongoose.connect(process.env.MONGO_URI);
    console.log("connection succesfully established");
  } catch (error) {
    console.log("soome error happen in connectioin");
    process.exit(1);
  }
};
