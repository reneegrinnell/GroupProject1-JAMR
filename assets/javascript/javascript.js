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
    c4Value: {
        'tone': "C4",
        'button': 81
    },
    cs4Value: {
        'tone': "C#4",
        'button': 87
    },
    d4Value: {
        'tone': "D4",
        'button': 69
    },
    ds4Value: {
        'tone': "D#4",
        'button': 82
    },
    e4Value: {
        'tone': "E4",
        'button': 84
    },
    f4Value: {
        'tone': "F4",
        'button': 89
    },
    fs4Value: {
        'tone': "F#4",
        'button': 85
    },
    g4Value: {
        'tone': "G4",
        'button': 73
    },
    gs4Value: {
        'tone': "G#4",
        'button': 79
    },
    a4Value: {
        'tone': "A4",
        'button': 80
    },
    as4Value: {
        'tone': "A#4",
        'button': 219
    },
    b4Value: {
        'tone': "B4",
        'button': 221
    },
    c5Value: {
        'tone': "C5",
        'button': 220
    }
}
// function for keydown events
$(document).keydown(function () {
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
    };
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
            console.log([i] + " is false");
            database.ref().update({ [i]: false });
        }
    };
});

// function reports true or false and triggers a tone
// check the firebase database for all values
database.ref().on('value', function (snapshot) {
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
