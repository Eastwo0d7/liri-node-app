require("dotenv").config();
var Spotify = require('node-spotify-api');
var axios = require("axios");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var moment = require('moment');

var command = process.argv[2];

if (command === "concert-this"){
    var artist = process.argv[3];
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
  function(response) {
    var results = response.data;
    for (var i = 0; i < results.length; i++) {
        console.log("Venue: " + results[i].venue.name + "\nCity: " + results[i].venue.city + "\nDate: " + 
        moment(results[i].datetime).format('L') + "\n----------");
    }
  })
};

if (command === "spotify-this-song"){
    var song = process.argv[3];
    spotify
    .search({ type: 'track', query: song })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(err) {
      console.log(err);
    });
}