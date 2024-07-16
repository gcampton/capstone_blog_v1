import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// can only store 1 post - database disabled.
var postJSON = [
    {
        title: "The best blog ever",
        author: "Shitshow Sandwich",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu accumsan ligula, ac vehicula risus. Sed fringilla orci odio, vel pulvinar sem pulvinar vitae. Vivamus tristique, purus vitae placerat molestie, diam nunc euismod tortor, dapibus porttitor ex nisi eu magna. Proin non ligula vehicula, aliquet libero sit amet, tempor lacus. Donec fringilla hendrerit fermentum. Donec sed ligula vitae libero dignissim pulvinar. Nulla arcu augue, pharetra ac placerat non, pretium nec est. Proin dictum mauris nec nisi venenatis auctor. Nunc sapien nulla, mollis vel purus ac, tempus fermentum massa. Proin imperdiet, massa nec sodales tincidunt, felis lectus posuere nulla, quis vehicula eros urna vitae ex. In euismod viverra orci eu malesuada. Pellentesque id augue luctus, lobortis nulla eget, accumsan lacus. Vestibulum iaculis consectetur pellentesque. Donec sed sodales quam, sit amet sollicitudin urna. Praesent a dui ac enim scelerisque varius id quis nibh. Phasellus hendrerit nulla et augue scelerisque posuere. Sed egestas enim nisi, ultricies sollicitudin ante pellentesque ac. Mauris elementum sapien ut ante rhoncus sollicitudin. Suspendisse convallis justo eu enim efficitur, in tincidunt nisi hendrerit. Proin aliquet est sit amet dui condimentum vestibulum. Donec velit risus, laoreet at facilisis ac, tincidunt congue metus. Curabitur molestie felis nec dignissim euismod. Integer tristique, turpis et vestibulum pharetra, sapien tortor pharetra est, eu congue neque mi id leo.",
    }
];

// Homepage - display all blogs
app.get("/", (req, res) => {
    res.render("index.ejs", { data: postJSON });
});

// New Blogpost
app.get("/blog-post", (req, res) => {
    res.render("blog-post.ejs");
});

// Success / Fail message
app.post("/blog-post", (req, res) => {
    postJSON.push(req.body);
    // postJSON = {
    //     title: req.body.title,
    //     author: req.body.author,
    //     content: req.body.content
    // };
    res.render("index.ejs", {
        data: postJSON,
    });
    // res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});