require("dotenv").config();
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
    var song = process.argv[3];
    spotify.search({ 
        type: 'track', 
        query: song
    }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return
        }
        console.log("Artist: " + data.tracks.items[0].artists[0].name + "\nSong: " + data.tracks.items[0].name + 
        "\nPreview: " + data.tracks.items[0].preview_url);
    });
};

function initializeApp(){
    if (command === "concert-this"){
        bandsInTown();
    };
    if (command === "spotify-this-song"){
        spotifyApp();
    };
};

initializeApp();