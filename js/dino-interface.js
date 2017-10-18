import { Dino } from './../js/dino.js';

$(document).ready(function() {
  $("#inputs").submit(function() {
    event.preventDefault();
    let paragraphs = $("#paragraphs").val();
    let test = new Dino();
    test.apiCall();
    console.log(typeof {});
    console.log(typeof "");
    console.log(Array.isArray([]));
    console.log(typeof []);
  });
});
