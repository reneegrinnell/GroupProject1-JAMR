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
database.ref().on("value", function (snapshot) {
    console.log(snapshot.val());
});

// each key in the qwerty row is assigned a chromatic tone moving from left to right

$(document).keydown(function () {
    if (event.which == 81)
        synth.triggerAttackRelease(c4);
    if (event.which == 87)
        synth.triggerAttackRelease(cs4);
    if (event.which == 69)
        synth.triggerAttackRelease(d4);
    if (event.which == 82)
        synth.triggerAttackRelease(ds4);
    if (event.which == 84)
        synth.triggerAttackRelease(e4);
    if (event.which == 89)
        synth.triggerAttackRelease(f4);
    if (event.which == 85)
        synth.triggerAttackRelease(fs4);
    if (event.which == 73)
        synth.triggerAttackRelease(g4);
    if (event.which == 79)
        synth.triggerAttackRelease(gs4);
    if (event.which == 80)
        synth.triggerAttackRelease(a4);
    if (event.which == 219)
        synth.triggerAttackRelease(as4);
    if (event.which == 221)
        synth.triggerAttackRelease(b4);
    if (event.which == 220)
        synth.triggerAttackRelease(c5);

    $(document).keyup(function () {
        synth.triggerRelease();
    });

    // Grab the values from the form
    var trainName = $("#TrainNameField").val();
    var trainDest = $("#DestinationField").val();
    var trainTime = $("#TrainTimeField").val();
    var trainFreq = parseInt($("#FrequencyField").val());

    //*********************************************************************************************/
    // Push the record into the database
    //*********************************************************************************************/
    database.ref().push({
        trainName: trainName,
        trainDest: trainDest,
        trainTime: trainTime,
        trainFreq: trainFreq,
    });
});

