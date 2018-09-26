
////////////////  BANDSINTOWN //////////////// 

// Bandsintown search function
function searchBandsInTown(artist) {

  // Query to Bandsintown API for user's choice of artist
  var queryURL = "https://rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

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
$("#select-artist").on("click", function (event) {
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

// create a synth and connect it to the master output (your speakers)
var synth = new Tone.PolySynth(8, Tone.Synth).toMaster();

// var synth = new Tone.PolySynth(8, Tone.Synth).toMaster();
var synthChoices = ["AMSynth", "FMSynth", "DuoSynth", "PolySynth", "Synth"];
var synthChoice;

// create buttons to change the synth sound
function makeSynthChoices() {
  for (j = 0; j < synthChoices.length; j++) {
    $("#button-col").append(`
          <div class="col-sm-2">
            <button class="button btn" id="${synthChoices[j]}">${synthChoices[j]}</button>
          </div>
        `);
  }
}

makeSynthChoices();

$(document).on("click", ".btn", function () {
  synthChoice = $(this).attr("id");
  // synth = `new Tone.${synthChoice}(8, Tone.Synth).toMaster()`;
  changeVoice();
  console.log(synthChoice);
  console.log("Button Synth: " + synth);
  console.log(synth);
  //   synth.triggerAttackRelease("C4", "2n");
});

// logic that causes button clicks to set synth sound to a different sound
function changeVoice() {
  if (synthChoice == "AMSynth") {
    synth = new Tone.PolySynth(8, Tone.AMSynth).toMaster();
  } else if (synthChoice == "FMSynth") {
    synth = new Tone.PolySynth(8, Tone.FMSynth).toMaster();
  } else if (synthChoice == "DuoSynth") {
    synth = new Tone.PolySynth(8, Tone.DuoSynth).toMaster();
  } else if (synthChoice == "PolySynth") {
    synth = new Tone.PolySynth(8, Tone.PolySynth).toMaster();
  } else if (synthChoice == "Synth") {
    synth = new Tone.PolySynth(8, Tone.Synth).toMaster();
  }
}

// store tone.js notes in a key object

var key = {
  c3Value: {
    tone: "C3",
    button: 65
  },
  cs3Value: {
    tone: "C#3",
    button: 83
  },
  d3Value: {
    tone: "D3",
    button: 68
  },
  ds3Value: {
    tone: "D#3",
    button: 70
  },
  e3Value: {
    tone: "E3",
    button: 71
  },
  f3Value: {
    tone: "F3",
    button: 72
  },
  fs3Value: {
    tone: "F#3",
    button: 74
  },
  g3Value: {
    tone: "G3",
    button: 75
  },
  gs3Value: {
    tone: "G#3",
    button: 76
  },
  a3Value: {
    tone: "A3",
    button: 186
  },
  as3Value: {
    tone: "A#3",
    button: 222
  },
  b3Value: {
    tone: "B3",
    button: 13
  },
  c4Value: {
    tone: "C4",
    button: 81
  },
  cs4Value: {
    tone: "C#4",
    button: 87
  },
  d4Value: {
    tone: "D4",
    button: 69
  },
  ds4Value: {
    tone: "D#4",
    button: 82
  },
  e4Value: {
    tone: "E4",
    button: 84
  },
  f4Value: {
    tone: "F4",
    button: 89
  },
  fs4Value: {
    tone: "F#4",
    button: 85
  },
  g4Value: {
    tone: "G4",
    button: 73
  },
  gs4Value: {
    tone: "G#4",
    button: 79
  },
  a4Value: {
    tone: "A4",
    button: 80
  },
  as4Value: {
    tone: "A#4",
    button: 219
  },
  b4Value: {
    tone: "B4",
    button: 221
  },
  c5Value: {
    tone: "C5",
    button: 220
  },
  cs5Value: {
    tone: "C#5",
    button: 49
  },
  d5Value: {
    tone: "D5",
    button: 50
  },
  ds5Value: {
    tone: "D#5",
    button: 51
  },
  e5Value: {
    tone: "E5",
    button: 52
  },
  f5Value: {
    tone: "F5",
    button: 53
  },
  fs5Value: {
    tone: "F#5",
    button: 54
  },
  g5Value: {
    tone: "G5",
    button: 55
  },
  gs5Value: {
    tone: "G#5",
    button: 56
  },
  a5Value: {
    tone: "A5",
    button: 57
  },
  as5Value: {
    tone: "A#5",
    button: 48
  },
  b5Value: {
    tone: "B5",
    button: 189
  },
  c6Value: {
    tone: "C6",
    button: 187
  }
};

// function for keydown events
$(document).keydown(function () {
  // variable is set to the numeric value of the particular key pressed
  var whichKey = event.which;
  // runs a loop over each object in the array
  for (var i in key) {
    // if the button value of the object matches the value of the key pressed ...
    if (whichKey == key[i].button) {
      // ... set the database entry for that key to true
      // console.log([i] + " is true");
      database.ref().update({ [i]: true });
      console.log("Keyup Synth: " + synth);
      console.log(synth);
    }
  }
});

// function for keyupevents
$(document).keyup(function () {
  // variable is set to the numeric value of the particular key up
  var whichKey = event.which;
  // runs a loop over each object in the array
  for (var i in key) {
    // if the button value of the object matches the value of the key pressed ...
    if (whichKey == key[i].button) {
      // ... set the database entry for that key to false
      // console.log([i] + " is false");
      database.ref().update({ [i]: false });
      console.log("Keydown Synth: " + synth);
      console.log(synth);
    }
  }
});

// function reports true or false and triggers a tone
// check the firebase database for all values
database.ref().on("value", function (snapshot) {
  // creates a variable to hold all those values and some empty variables we'll need
  var notes = snapshot.val();
  var synthID = "";
  var value = false;
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
  // runs a loop over each object in the database
  for (var i in notes) {
    //sets a variable to the tone attribute from the array
    synthID = key[i].tone;
    // console.log("this is the synthID: " + synthID);
    //sets a variable to the boolean value from the database
    value = notes[i];
    // console.log("this is the value: " + value);
    // if the database reports back a true value the tone is triggered
    if (value) {
      synth.triggerAttack(synthID);
      console.log("Scope 3:1 Synth: " + synth);
    }
    // if the database reports back a false value the tone is halted
    else {
      synth.triggerRelease(synthID);
      console.log("Scope 3:2 Synth: " + synth);
    }
    console.log("Scope 2 Synth: " + synth);
  }
  console.log("Scope 1 Synth: " + synth);
});

// animation //
// key animates "downward" on keydown //
$(document).keydown(function (f) {
  if (f.which == 65) {
    $("#c3").addClass("keypress");
  };
  if (f.which == 83) {
    $("#cs3").addClass("keypress");
  };
  if (f.which == 68) {
    $("#d3").addClass("keypress");
  };
  if (f.which == 70) {
    $("#ds3").addClass("keypress");
  };
  if (f.which == 71) {
    $("#e3").addClass("keypress");
  };
  if (f.which == 72) {
    $("#f3").addClass("keypress");
  };
  if (f.which == 74) {
    $("#fs3").addClass("keypress");
  };
  if (f.which == 75) {
    $("#g3").addClass("keypress");
  };
  if (f.which == 76) {
    $("#gs3").addClass("keypress");
  };
  if (f.which == 186) {
    $("#a3").addClass("keypress");
  };
  if (f.which == 222) {
    $("#as3").addClass("keypress");
  };
  if (f.which == 13) {
    $("#b3").addClass("keypress");
  };
  if (f.which == 81) {
    $("#c4").addClass("keypress");
  };
  if (f.which == 87) {
    $("#cs4").addClass("keypress");
  };
  if (f.which == 69) {
    $("#d4").addClass("keypress");
  };
  if (f.which == 82) {
    $("#ds4").addClass("keypress");
  };
  if (f.which == 84) {
    $("#e4").addClass("keypress");
  };
  if (f.which == 89) {
    $("#f4").addClass("keypress");
  };
  if (f.which == 85) {
    $("#fs4").addClass("keypress");
  };
  if (f.which == 73) {
    $("#g4").addClass("keypress");
  };
  if (f.which == 79) {
    $("#gs4").addClass("keypress");
  };
  if (f.which == 80) {
    $("#a4").addClass("keypress");
  };
  if (f.which == 219) {
    $("#as4").addClass("keypress");
  };
  if (f.which == 221) {
    $("#b4").addClass("keypress");
  };
  if (f.which == 220) {
    $("#c5").addClass("keypress");
  };
});

// return key to normal on keyup //
$(document).keyup(function (g) {

  if (g.which == 65) {
    $("#c3").removeClass("keypress");
  };
  if (g.which == 83) {
    $("#cs3").removeClass("keypress");
  };
  if (g.which == 68) {
    $("#d3").removeClass("keypress");
  };
  if (g.which == 70) {
    $("#ds3").removeClass("keypress");
  };
  if (g.which == 71) {
    $("#e3").removeClass("keypress");
  };
  if (g.which == 72) {
    $("#f3").removeClass("keypress");
  };
  if (g.which == 74) {
    $("#fs3").removeClass("keypress");
  };
  if (g.which == 75) {
    $("#g3").removeClass("keypress");
  };
  if (g.which == 76) {
    $("#gs3").removeClass("keypress");
  };
  if (g.which == 186) {
    $("#a3").removeClass("keypress");
  };
  if (g.which == 222) {
    $("#as3").removeClass("keypress");
  };
  if (g.which == 13) {
    $("#b3").removeClass("keypress");
  };
  if (g.which == 81) {
    $("#c4").removeClass("keypress");
  };
  if (g.which == 87) {
    $("#cs4").removeClass("keypress");
  };
  if (g.which == 69) {
    $("#d4").removeClass("keypress");
  };
  if (g.which == 82) {
    $("#ds4").removeClass("keypress");
  };
  if (g.which == 84) {
    $("#e4").removeClass("keypress");
  };
  if (g.which == 89) {
    $("#f4").removeClass("keypress");
  };
  if (g.which == 85) {
    $("#fs4").removeClass("keypress");
  };
  if (g.which == 73) {
    $("#g4").removeClass("keypress");
  };
  if (g.which == 79) {
    $("#gs4").removeClass("keypress");
  };
  if (g.which == 80) {
    $("#a4").removeClass("keypress");
  };
  if (g.which == 219) {
    $("#as4").removeClass("keypress");
  };
  if (g.which == 221) {
    $("#b4").removeClass("keypress");
  };
  if (g.which == 220) {
    $("#c5").removeClass("keypress");
  };
});
