const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const hbs = require("hbs");
const temp_path = path.join(__dirname, "/views");
console.log(temp_path);
const partials_path = path.join(__dirname, "/views/partials");
app.set("view engine", "hbs");
app.set("views", temp_path);
app.use("/public", express.static(path.join(__dirname, "/assets")));
app.use(
    "/css",
    express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css"))
);
app.use(
    "/js",
    express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js"))
);
app.use(
    "/js",
    express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js"))
);


app.use(express.urlencoded({ extended: false }));

hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(port, () => {
    console.log(`listing to the port at ${port}`);
});
