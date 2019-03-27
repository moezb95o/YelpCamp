var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
var campgrounds = [
    { name: "Salmon Creek", image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104490f3c77fa6e8bcb0_340.jpg"},
    { name: "Granite Hill", image: "https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104490f3c77fa6ebbcb1_340.jpg"},
    { name: "Mountain Goat's Rest", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104490f3c77fa6e8b2be_340.jpg"}
];

app.get('/', (req, res) => {
    res.render('landing')
});

app.get('/campgrounds', (req, res) => { //REST 1. get all the campgrounds


    res.render('campgrounds', {campgrounds: campgrounds});
});


app.post('/campgrounds', (req, res) => { //REST 2. create new campgrounds
    // get data from form and add to campgrounds array
    var name = req.body.name, image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect('/campgrounds'); //default is a GET request
});

app.get('/campgrounds/new', (req, res) => { // REST 3. Shows the form that will send the data to the POST route
    res.render('new')
});

app.listen(5500, '127.0.0.1', (req, res) => {
    console.log("The YelpCamp Server Has Started On 127.0.0.0:5500 - Press Ctrl+C To Stop Server");
});