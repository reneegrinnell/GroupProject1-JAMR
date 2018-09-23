////////////////  BANDSINTOWN //////////////// 

// Bandsintown search function
function searchBandsInTown(artist) {

    // Query to Bandsintown API for user's choice of artist
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      // Print object to console
      console.log(response);

      // Creating HTML with artist info
      var artistName = $("<h1>").text(response.name);
      var artistURL = $("<a>").attr("href", response.url).append(artistName);
      var artistImage = $("<img>").attr("src", response.thumb_url);
      var upcomingEvents = $("<h2>").text(response.upcoming_event_count + " upcoming events");
      var goToArtist = $("<a>").attr("href", response.url).text("See Tour Dates");

      // Empty old contents from artist-div, append new artist content
      $("#artist-div").empty();
      $("#artist-div").append(artistURL, artistImage, upcomingEvents, goToArtist);
    });
  }

  // Event handler for user clicking the select-artist button
  $("#select-artist").on("click", function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing artist's name
    var inputArtist = $("#artist-input").val().trim();

    // Running the searchBandsInTown function, passing in artist input as an argument
    searchBandsInTown(inputArtist);
  });

////////////////  FIREBASE //////////////// 

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCLdyLwb0Ph9vZjGfFU3UVS1-JWy2capb4",
    authDomain: "group-project-1-37dd6.firebaseapp.com",
    databaseURL: "https://group-project-1-37dd6.firebaseio.com",
    projectId: "group-project-1-37dd6",
    storageBucket: "",
    messagingSenderId: "872804049587"
};

firebase.initializeApp(config);

var database = firebase.database();


//create a synth and connect it to the master output (your speakers)
var synth = new Tone.PolySynth(8, Tone.Synth).toMaster();

// store tone.js notes in a key object

var key = {
    c4Value: "C4",
    cs4Value: "C#4",
    d4Value: "D4",
    ds4Value: "D#4",
    e4Value: "E4",
    f4Value: "F4",
    fs4Value: "F#4",
    g4Value: "G4",
    gs4Value: "G#4",
    a4Value: "A4",
    as4Value: "A#4",
    b4Value: "B4",
    c5Value: "C5",
}

$(document).keydown(function () {
    if (event.which == 81) {
        database.ref().update({
            c4Value: true
        });
    }
});

$(document).keydown(function () {

    if (event.which == 87) {
        database.ref().update({
            cs4Value: true
        });
    }
});
$(document).keydown(function () {

    if (event.which == 69) {
        database.ref().update({
            d4Value: true
        });
    }
});

$(document).keydown(function () {

    if (event.which == 82) {
        database.ref().update({
            ds4Value: true
        });
    }
});

$(document).keydown(function () {
    if (event.which == 84)
        database.ref().update({
            e4Value: true
        });
});

$(document).keydown(function () {
    if (event.which == 89)
        database.ref().update({
            f4Value: true
        });
});

$(document).keydown(function () {
    if (event.which == 85)
        database.ref().update({
            fs4Value: true
        });
});

$(document).keydown(function () {
    if (event.which == 73)
        database.ref().update({
            g4Value: true
        });
});

$(document).keydown(function () {
    if (event.which == 79)
        database.ref().update({
            gs4Value: true
        });
});

$(document).keydown(function () {
    if (event.which == 80)
        database.ref().update({
            a4Value: true
        });
});

$(document).keydown(function () {
    if (event.which == 219)
        database.ref().update({
            as4Value: true
        });
});

$(document).keydown(function () {
    if (event.which == 221)
        database.ref().update({
            b4Value: true
        });
});

$(document).keydown(function () {

    if (event.which == 220)
        database.ref().update({
            c5Value: true
        });
});

$(document).keyup(function () {
    if (event.which == 81) {
        database.ref().update({
            c4Value: false
        });
    }
});

$(document).keyup(function () {

    if (event.which == 87) {
        database.ref().update({
            cs4Value: false
        });
    }
});

$(document).keyup(function () {

    if (event.which == 69) {
        database.ref().update({
            d4Value: false
        });
    }
});

$(document).keyup(function () {

    if (event.which == 82) {
        database.ref().update({
            ds4Value: false
        });
    }
});

$(document).keyup(function () {

    if (event.which == 84)
        database.ref().update({
            e4Value: false
        });
});

$(document).keyup(function () {

    if (event.which == 89)
        database.ref().update({
            f4Value: false
        });
});

$(document).keyup(function () {

    if (event.which == 85)
        database.ref().update({
            fs4Value: false
        });
});

$(document).keyup(function () {

    if (event.which == 73)
        database.ref().update({
            g4Value: false
        });
});

$(document).keyup(function () {

    if (event.which == 79)
        database.ref().update({
            gs4Value: false
        });
});

$(document).keyup(function () {

    if (event.which == 80)
        database.ref().update({
            a4Value: false
        });
});

$(document).keyup(function () {

    if (event.which == 219)
        database.ref().update({
            as4Value: false
        });
});

$(document).keyup(function () {

    if (event.which == 221)
        database.ref().update({
            b4Value: false
        });
});

$(document).keyup(function () {

    if (event.which == 220)
        database.ref().update({
            c5Value: false
        });
});

database.ref().on('value', function (snapshot) {

    var notes = snapshot.val();
    var synthID = "";
    var value = false;
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
    for (var name in notes) {
        synthID = key[name];
        value = notes[name];
        if (value){
            synth.triggerAttack(synthID);
        }
        else {
            synth.triggerRelease(synthID);
        }
    }
});
