import { Dino } from './../js/dino.js';

$(document).ready(function() {
  $("#inputs").submit(function() {
    event.preventDefault();
    let paragraphs = parseInt($("#paragraphs").val());
    let words = parseInt($("#words").val());
    let babydino = new Dino();
    let sally = babydino.apiCall(paragraphs,words);
    console.log(babydino.ipsum);
    $("#output").text(babydino.ipsum);
  });
});


// console.log(typeof {});
// console.log(typeof "");
// console.log(Array.isArray([]));
// console.log(typeof []);
