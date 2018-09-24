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
// var synth = new Tone.DuoSynth(8, Tone.Synth).toMaster();

// var synth = new Tone.PolySynth(8, Tone.Synth).toMaster();
var synthChoices = ["AMSynth", "FMSynth", "DuoSynth", "PolySynth", "Synth"];
var synthChoice;

function makeSynthChoices() {
  for (j = 0; j < synthChoices.length; j++) {
    $("#button-row").append(`
          <div class="col-sm-2">
            <button class="button btn" id="${synthChoices[j]}">${
      synthChoices[j]
    }</button>
          </div>
        `);
  }
}

makeSynthChoices();

$(document).on("click", ".btn", function() {
  synthChoice = $(this).attr("id");
  // synth = `new Tone.${synthChoice}(8, Tone.Synth).toMaster()`;
//   changeVoice();
  console.log(synthChoice);
  console.log(synth);
//   synth.triggerAttackRelease("C4", "2n");
});

function changeVoice() {
  if (synthChoice == "AMSynth") {
    synth = new Tone.AMSynth(8, Tone.Synth).toMaster();
  } else if (synthChoice == "FMSynth") {
    synth = new Tone.FMSynth(8, Tone.Synth).toMaster();
  } else if (synthChoice == "DuoSynth") {
    synth = new Tone.DuoSynth(8, Tone.Synth).toMaster();
  } else if (synthChoice == "PolySynth") {
    synth = new Tone.PolySynth(8, Tone.Synth).toMaster();
  } else {
    synth = new Tone.Synth(8, Tone.Synth).toMaster();
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
$(document).keydown(function() {
  // variable is set to the numeric value of the particular key pressed
  var whichKey = event.which;
  // runs a loop over each object in the array
  for (var i in key) {
    // if the button value of the object matches the value of the key pressed ...
    if (whichKey == key[i].button) {
      // ... set the database entry for that key to true
      console.log([i] + " is true");
      database.ref().update({ [i]: true });
    }
  }
});

// function for keyupevents
$(document).keyup(function() {
  // variable is set to the numeric value of the particular key up
  var whichKey = event.which;
  // runs a loop over each object in the array
  for (var i in key) {
    // if the button value of the object matches the value of the key pressed ...
    if (whichKey == key[i].button) {
      // ... set the database entry for that key to false
      console.log([i] + " is false");
      database.ref().update({ [i]: false });
    }
  }
});

// function reports true or false and triggers a tone
// check the firebase database for all values
database.ref().on("value", function(snapshot) {
  // creates a variable to hold all those values and some empty variables we'll need
  var notes = snapshot.val();
  var synthID = "";
  var value = false;
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
  // runs a loop over each object in the database
  for (var i in notes) {
    //sets a variable to the tone attribute from the array
    synthID = key[i].tone;
    console.log("this is the synthID: " + synthID);
    //sets a variable to the boolean value from the database
    value = notes[i];
    console.log("this is the value: " + value);
    // if the database reports back a true value the tone is triggered
    if (value) {
      synth.triggerAttack(synthID);
    }
    // if the database reports back a false value the tone is halted
    else {
      synth.triggerRelease(synthID);
    }
  }
});
