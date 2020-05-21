// JavaScript Document

// loader 
$(window).on('load', function () {
    
});
// loader

$(document).ready(function()
{

//button hover
$('.btn-effect1').on('mouseenter', function(e) 
{
  var parentOffset = $(this).offset(),
    relX = e.pageX - parentOffset.left,
    relY = e.pageY - parentOffset.top;
  $(this).find('span').css({top:relY, left:relX})
})
.on('mouseout', function(e) 
{
  var parentOffset = $(this).offset(),
    relX = e.pageX - parentOffset.left,
    relY = e.pageY - parentOffset.top;
  $(this).find('span').css({top:relY, left:relX})
});
//button hover

//hover animation
var card = $(".main_page");

$(document).on("mousemove",function(e) {  
  var ax = -($(window).innerWidth()/2- e.pageX)/150;
  var ay = ($(window).innerHeight()/2- e.pageY)/200;
  card.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
});
//hover animation

});





        