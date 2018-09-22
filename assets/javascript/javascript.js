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
var synth = new Tone.AMSynth().toMaster();

// store tone.js notes as variables
var c4 = "C4";
var cs4 = "C#4";
var d4 = "D4";
var ds4 = "D#4";
var e4 = "E4";
var f4 = "F4";
var fs4 = "F#4";
var g4 = "G4";
var gs4 = "G#4";
var a4 = "A4";
var as4 = "A#4";
var b4 = "B4";
var c5 = "C5";


//$("#c3").on("click", function () {
//changed to test C4 on CSS keyboard
//synth.triggerAttackRelease(c3, "4n");
//});

//$("#d3").on("click", function () {
//synth.triggerAttackRelease(d3, "4n");

//});

//Send to Database
// database.ref().on("value", function (snapshot) {
//     console.log(snapshot.val());
// });

// each key in the qwerty row is assigned a chromatic tone moving from left to right

$(document).keydown(function () {
    if (event.which == 81) {
        synth.triggerAttackRelease(c4)
        // database.ref().set({
        //     c4Value: true
        // });
    }
    if (event.which == 87) {
        synth.triggerAttackRelease(cs4);
        // database.ref().set({
        //     cs4Value: true
        // });
    }
    if (event.which == 69) {
        synth.triggerAttackRelease(d4);
        // database.ref().set({
        //     d4Value: true
        // });
    }
    if (event.which == 82) {
        synth.triggerAttackRelease(ds4);
        // database.ref().set({
        //     ds4Value: true
        // });
    }
    if (event.which == 84)
        synth.triggerAttackRelease(e4);
    // database.ref().set({
    //     e4Value: true
    // });
    if (event.which == 89)
        synth.triggerAttackRelease(f4);
    // database.ref().set({
    //     f4Value: true
    // });
    if (event.which == 85)
        synth.triggerAttackRelease(fs4);
    // database.ref().set({
    //     fs4Value: true
    // });
    if (event.which == 73)
        synth.triggerAttackRelease(g4);
    // database.ref().set({
    //     g4Value: true
    // });
    if (event.which == 79)
        synth.triggerAttackRelease(gs4);
    // database.ref().set({
    //     gs4Value: true
    // });
    if (event.which == 80)
        synth.triggerAttackRelease(a4);
    // database.ref().set({
    //     a4Value: true
    // });
    if (event.which == 219)
        synth.triggerAttackRelease(as4);
    // database.ref().set({
    //     as4Value: true
    // });
    if (event.which == 221)
        synth.triggerAttackRelease(b4);
    // database.ref().set({
    //     b4Value: true
    // });

    if (event.which == 220)
        // synth.triggerAttackRelease(c5);
    database.ref().set({
        c5Value: true
    });

    $(document).keyup(function () {
        synth.triggerRelease();
        database.ref().set({
            c5Value: false
        });
    });
    database.ref().on('value', function (snapshot) {
        c5Value = snapshot.val();
        console.log(c5Value);
        if (c5Value) {
            synth.triggerAttackRelease(c5);
            console.log('here');
        }
        else synth.triggerRelease();

    });
});

