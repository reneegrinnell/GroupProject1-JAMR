//create a synth and connect it to the master output (your speakers)
var synth = new Tone.AMSynth().toMaster();

// store tone.js notes as variables
var c4 = "C4";
var cs4 = "C#4";
var d4 = "D4";

// synth.triggerAttackRelease(c4, "4n"); // plays "C4" for duration of a quarter note
$(document).keydown(function() {
  synth.triggerAttack(cs4);
});

$(document).keyup(function() {
  synth.triggerRelease();
});