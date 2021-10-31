const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  content: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: String,
    default: "Coşkun Atak",
  }
});

module.exports = mongoose.model("Post", PostSchema);
