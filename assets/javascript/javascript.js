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
var synth = new Tone.Synth().toMaster();
//play a middle 'C' for the duration of an 8th note
var c3 = "C3";
// var cs3 = 'CS3' // don't know the naming convention for sharp notes
var d3 = "D3";

synth.triggerAttackRelease(c3, "4n");

$("#c3").on("click", function() { 
    //changed to test C4 on CSS keyboard
    console.log(this);
    synth.triggerAttackRelease(c3, "4n");
});

$("#d3").on("click", function() {
    synth.triggerAttackRelease(d3, "4n");
    
});

//Send to Database

database.ref().on("value", function (snapshot) {
    console.log(snapshot.val());

    //Continue code here

});