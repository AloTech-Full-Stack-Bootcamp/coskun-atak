require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const postController = require("./controllers/postController.js");
const pageController = require("./controllers/pageController.js");

mongoose.connect(`mongodb+srv://admin-cos:${process.env.DB_KEY}@cleanblog-test-db.lumde.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("view engine", "ejs");
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

app.route("/")
  .get((req, res) => { res.redirect("/posts") })
;

app.route("/posts")
  .get((req, res) => { postController.getAllPosts(req, res) })

  .post((req, res) => { postController.createPost(req, res) })
;

app.route("/posts/new")
  .get((req, res) => { pageController.goToNewPostPage(req, res) })
;

app.route("/posts/:id")
  .get((req, res) => { postController.getPostById(req, res) })

  .put((req, res) => { postController.updatePost(req, res) })
;

app.route("/posts/edit/:id")
  .get((req, res) => { pageController.goToEditPage(req, res) })
;

app.route("/posts/delete/:id")
  .delete((req, res) => { postController.deletePost(req, res) })
;

app.route("/about")
  .get((req, res) => { pageController.goToAboutPage(req, res) })
;

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Example app listening at http://localhost:" + port);
});
