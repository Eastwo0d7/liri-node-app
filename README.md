# liri-node-app

## Overview

My Liri app is designed to perform a handful of tasks based on commands given in Node. Liri solves the problem of finding information on an artist or band's upcoming concert schedule, information on a song by a particular artist or band, or information on a particular movie. In addition, there is a command to allow Liri to return information on a song the app has already determined.

## Organization of code

The code in the Liri-node-app is based on splitting each command that Liri will perform into its own separate javascript function, and then grouping those functions into an 'initialize app' function which is the first function to run upon loading the code, and listens for the commands given by the user in Node. Depending on the command given in Node by the user, the app will obey the command by running the appropriate function.

## Instructions on running the app
1. In Node, run npm init
2. Run the following:
    npm install dotevn
    npm install axios
    npm install node-spotify-api
    npm install moment
3. Now you are ready to give Liri commands:
 * To find concert information, type the following in Node, with a band or artist name after "concert-this": node liri.js concert-this
 * To find information on a song, type the following in Node, with a song name after "spotify-this-song": node liri.js spotify-this-song
 * To find information on a movie, type the following in Node, with a movie name after "movie-this": node liri.js movie-this
 * To allow Liri to return information on a song which the app has already selected, run: node liri.js do-what-it-says

## Video of the app running

## Link to the app

## Technologies used
* Node-Spotify-API
* DotEnv
* OMDB API
* Bands In Town API
* Axios
* Moment
* Node
* VS Code

## Role in development of the app
My role was the principal developer of the application. I wrote all of the code, recorded the video of the app running, and executed the deployment of the app.