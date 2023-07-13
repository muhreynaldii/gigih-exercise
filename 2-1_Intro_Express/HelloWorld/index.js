const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const router = express.Router();

app.get("/", (req, res) => {
  res.send("Hello World! With Node.js");
});

app.get("/dashboard", (req, res) => {
  res.send("Ini Dashboard");
});

app.get("/home", (req, res) => {
  res.send("Ini Home");
});

app.get("/tweets/:tweetId", (req, res) => {
  const tweetId = req.params.tweetId;
  const bahasa = req.query.bahasa;

  res.send(`Ini ${tweetId} dalam ${bahasa}`);
});

// app.get("/user/:userId/likes", (req, res) => {
//   const userId = req.params.userId;
//   res.send(`Ini likes dari ${userId}`);
// });

// app.get("/user/:userId/retweet", (req, res) => {
//   const userId = req.params.userId;
//   res.send(`Ini retweet dari ${userId}`);
// });

// app.get("/user/:userId/tweet", (req, res) => {
//   const userId = req.params.userId;
//   res.send(`Ini tweet dari ${userId}`);
// });

const routes = ["likes", "retweet", "tweet"];

routes.forEach((route) => {
  router.get(`/:userId/${route}`, (req, res) => {
    const userId = req.params.userId;
    res.send(`Ini ${route} dari ${userId}`);
  });
});

app.use("/user", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
