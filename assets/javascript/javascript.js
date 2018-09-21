// Initialize Firebase
var config = {
    apiKey: "AIzaSyBwE_uj3aQ9KECz_JDuNWvE9TTHkcPWZJ8",
    authDomain: "project-1-bca9b.firebaseapp.com",
    databaseURL: "https://project-1-bca9b.firebaseio.com",
    projectId: "project-1-bca9b",
    storageBucket: "project-1-bca9b.appspot.com",
    messagingSenderId: "206857852855"
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


//$("#c3").on("click", function () {
    //changed to test C4 on CSS keyboard
    //synth.triggerAttackRelease(c3, "4n");
//});

//$("#d3").on("click", function () {
    //synth.triggerAttackRelease(d3, "4n");

//});

//Send to Database
database.ref().on("value", function (snapshot) {
    console.log(snapshot.val());
});

// synth.triggerAttackRelease(c4, "4n"); // plays "C4" for duration of a quarter note

$(document).keydown(function () {
    synth.triggerAttackRelease(c4);
});

$(document).keyup(function () {
    synth.triggerRelease();
});