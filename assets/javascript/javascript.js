//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster();
//play a middle 'C' for the duration of an 8th note
var c3 = "C3";
// var cs3 = 'CS3' // don't know the naming convention for sharp notes
var d3 = "D3";

synth.triggerAttackRelease(c3, "4n");

$(document).on("click", "#c4", function() { // changed to test C4 on CSS keyboard
  synth.triggerAttackRelease(c3, "4n");
});

$(document).on("click", "#d3", function() {
  synth.triggerAttackRelease(d3, "4n");
});
