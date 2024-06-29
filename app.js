const express = require('express');
const app = express();
const {config, engine} = require('express-edge');
const expressFileupload = require('express');
const {showHomePage,createPost,storePost} = require('./controllers/postController');
const db = require('./db');
app.use(express.static('public'));
app.use(express.urlencoded({
  extended: true
})
);
const {
  showHomePage,
  createPost,
showPost,

} = require("/controllers/PostController");
const {createUser} = require("./controllers/UserController");
app.use(express.json());
app.use(expressFileupload());
app.use(engine);
app.set('views', '${_dirname}/views')

app.get('/', showHomePage);
app.get("/posts/new", createPost); 
app.post("/post/store", storePost);
app.get("posts/:id", showPost);
app.get('/auth/register',)
app.listen(5000, () => {
  console.log('Server started on port 5000');
});