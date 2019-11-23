(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$('.carousel.carousel-slider').carousel({full_width: true});

$("#lightbulbindex").click(function() {
    $("body").toggleClass("index2");

});

$("#lightbulbindex2").click(function() {
    $("body").toggleClass("index2");

});

$("#lightbulblearn").click(function() {
    $("body").toggleClass("learn");
    $("h2").toggleClass("learn");

});

$("#lightbulblearn2").click(function() {
    $("body").toggleClass("learn2");
    $("h2").toggleClass("learn");

});
$("#lightbulbexp").click(function() {
    $("body").toggleClass("exp");

});

$("#lightbulbexp2").click(function() {
    $("body").toggleClass("exp2");

});

$("#lightbulbachieve").click(function() {
    $("body").toggleClass("achieve");

});

$("#lightbulbachieve2").click(function() {
    $("body").toggleClass("achieve2");

});

$("#lightbulbgrow").click(function() {
    $("body").toggleClass("grow");

});

$("#lightbulbgrow2").click(function() {
    $("body").toggleClass("grow2");

});
$("#lightbulbbuild").click(function() {
    $("body").toggleClass("build");

});

$("#lightbulbbuild2").click(function() {
    $("body").toggleClass("build2");

});
$("#lightbulbconnect").click(function() {
    $("body").toggleClass("connect");

});

$("#lightbulbconnect2").click(function() {
    $("body").toggleClass("connect2");

});
