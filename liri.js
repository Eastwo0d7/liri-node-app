require("dotenv").config();
var fs = require("fs");
var Spotify = require('node-spotify-api');
var axios = require("axios");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var moment = require('moment');

var command = process.argv[2];
var parameter = process.argv[3];

function bandsInTown(){
    axios.get("https://rest.bandsintown.com/artists/" + parameter + "/events?app_id=codingbootcamp").then(
        function(response) {
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            console.log("Venue: " + results[i].venue.name + "\nCity: " + results[i].venue.city + "\nDate: " + 
            moment(results[i].datetime).format('L') + "\n----------");
        }
    })
};       
        
function spotifyApp(){
    if (parameter === undefined){
        var song = "Ace of Base The Sign";
    } else {
        song = parameter;
    }
        spotify.search({ 
            type: 'track', 
            query: song
        }, function(err, data) {
            if (err) {
                console.log('Error occurred: ' + err);
                return
            }
            console.log("Artist: " + data.tracks.items[0].artists[0].name + "\nSong: " + data.tracks.items[0].name + 
            "\nPreview: " + data.tracks.items[0].preview_url + "\nAlbum: " + data.tracks.items[0].album.name);
        });
};

function OMDBapp(){
    if (parameter === undefined){
        var movie = "Mr. Nobody";
    } else {
        movie = parameter;
    }
    axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy").then(
  function(response) {
    console.log("Title: " + response.data.Title + "\nYear: " + response.data.Year + "\nIMDB Rating: " + response.data.imdbRating + 
    "\nRotten Tomatoes Rating: " + response.data.Ratings[1].value + "\nCountry: " + response.data.Country + 
    "\nLanguage: " + response.data.Language + "\nPlot: " + response.data.Plot + "\nActors: " + response.data.Actors);
  })
}


function doRandom(){
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }
        var dataArr = data.split(",");
        command = dataArr[0];
        parameter = dataArr[1];
        initializeApp();
    });
}
function initializeApp(){
    if (command === "concert-this"){
        bandsInTown();
    };
    if (command === "spotify-this-song"){
        spotifyApp();
    };
    if (command === "movie-this"){
        OMDBapp();
    };
    if (command === "do-what-it-says"){
        doRandom();
    }
};

initializeApp();