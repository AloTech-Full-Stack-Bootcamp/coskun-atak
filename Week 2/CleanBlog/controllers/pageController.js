const Post = require("../models/Post");

exports.goToEditPage = (req, res) => {
  Post.findById(req.params.id, (err, foundPost) => {
    res.render("edit", { post: foundPost });
  })
}

exports.goToAboutPage = (req, res) => {
  res.render("about");
}

exports.goToNewPostPage = (req, res) => {
  res.render("add_post");
}
