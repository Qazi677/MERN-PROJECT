const moongoose = require("mongoose");
const userSchema = moongoose.Schema(
  {
    username: {
      required: true,
      type: String,
      unique: true,
    },
    email: {
      required: true,
      type: String,
      unique: true,
    },
    password: {
      required: true,
      type: String,
    },
  },
  { timestamps: true },
);
exports.user = moongoose.model("User", userSchema);
