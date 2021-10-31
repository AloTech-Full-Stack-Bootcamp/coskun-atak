const Post = require("../models/Post");

exports.getAllPosts = (req, res) => {
  Post.find({}, (err, foundPosts) => {
    if (!err) {
      res.render("index", { posts: foundPosts });
    }
  });
}

exports.getPostById = (req, res) => {
  Post.findById(req.params.id, (err, foundPost) => {
    if (!err) {
      res.render("post", { post: foundPost });
    }
  });
}

exports.createPost = (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  newPost.save();

  res.redirect("/posts");
}

exports.updatePost = (req, res) => {
  const postId = req.params.id;
  Post.findById(postId, (err, foundPost) => {
    if (!err) {
      foundPost.title = req.body.title;
      foundPost.content = req.body.content;
      foundPost.save();

      res.redirect("/posts/" + postId);
    }
  })
}

exports.deletePost = (req, res) => {
  Post.findOneAndRemove({_id: req.params.id}, (err) => {
    res.redirect("/");
  });
}
