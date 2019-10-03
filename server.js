const express = require("express");
const app = express();
const server = require("http").createServer(app);
const path = require("path");

app.use(express.static(path.join(__dirname, "assets")));
app.set("views", path.join(__dirname, "assets"));
app.engine("html", require("ejs").renderFile);
app.set("views engine", "html");

app.use("/", (req, res)=>{
    res.render("index.html");
});

server.listen(process.env.PORT || 3000);