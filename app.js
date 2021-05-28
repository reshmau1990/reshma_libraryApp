const express = require("express");
const app = new express();
const port = process.env.PORT || 1512;

const nav = [
    {link:"/books", name:"BOOKS"}, 
    {link:"/authors", name:"AUTHORS"},
    {link:"/addBook", name:"ADD BOOK"},
    {link:"/addAuthor", name:"ADD AUTHOR"},
    {link:"/signup", name:"SIGN UP"},
    {link:"/login", name:"LOGIN"}
    ];

const booksRouter = require("./src/routes/bookRoutes")(nav);
const authorsRouter = require("./src/routes/authorRoutes")(nav);
const addBookRouter = require("./src/routes/addBookRoutes")(nav);
const addAuthorRouter = require("./src/routes/addAuthorRoutes")(nav);
const loginRouter = require("./src/routes/loginRoutes")(nav);
const signupRouter = require("./src/routes/signupRoutes")(nav);

app.use(express.static("./public"));    // app.use(express.static(__dirname+ "/public"))
app.set("view engine", "ejs");
app.set("views",__dirname+ "/src/views"); // app.set("views", "./src/views");
app.use("/books", booksRouter);
app.use("/authors", authorsRouter);
app.use("/addBook", addBookRouter);
app.use("/addAuthor", addAuthorRouter);
app.use("/login", loginRouter);
app.use("/signup", signupRouter);

app.get("/", function(req,res){
    res.render("index", 
            {
                nav,
                title:"Library"
            });
});


app.listen(port, ()=>{
    console.log("Server is ready at "+port);
});
