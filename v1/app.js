var express = require('express'),
    app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('landing')
});

app.get('/campgrounds', (req, res) => {
    var campgrounds = [
        { name: "Salmon Creek", image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104490f3c77fa6e8bcb0_340.jpg"},
        { name: "Granite Hill", image: "https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104490f3c77fa6ebbcb1_340.jpg"},
        { name: "Mountain Goat's Rest", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104490f3c77fa6e8b2be_340.jpg"}
    ];

    res.render('campgrounds', {campgrounds: campgrounds});
});

app.listen(5500, '127.0.0.1', (req, res) => {
    console.log("The YelpCamp Server Has Started On 127.0.0.0:5500 - Press Ctrl+C To Stop Server");
});