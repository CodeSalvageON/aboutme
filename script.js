$( function() {
    $( ".draggable" ).draggable();
} );

$("#fill").hide();

$("#fill").click(function(){
  document.querySelector("#main-window").style.width = "100%";
  document.querySelector("#main-window").style.height = "100vh";
  document.querySelector("#main-window").style.top = "-8px";
  document.querySelector("#main-window").style.left = "-8px";
  document.querySelector("#main-window").style.position = "absolute";

  $("#hide").show();
  $("#fill").hide();
});

$("#hide").click(function(){
  
});

$("#x").click(function(){
  $("#main-window").hide();
});

$("#folder-x").click(function(){
  $("#folder-window").hide();
});

$("#doom-x").click(function(){
  $("#doom-window").hide();
});

$("#document-x").click(function(){
  $("#document-window").hide();
});

$("#guestbook-x").click(function(){
  $("#guestbook-window").hide();
});

$("#suni-x").click(function(){
  $("#suni-window").hide();
});

$("#mini-x").click(function(){
  $("#mini-window").hide();
});

$("#rush-x").click(function(){
  $("#rush-window").hide();
});

$("#ghostemane-x").click(function(){
  $("#ghostemane-window").hide();
});

$("#kmfdm-x").click(function(){
  $("#kmfdm-window").hide();
});

function e() {
  var retval = []
$('.window').each(function(){
  retval.push($(this).attr('id'))
})
return retval
}

$(".window").click(function(){
  var getId = e();

  console.log(getId);
});

$("#main-window").click(function(){
  document.getElementById("main-window").style.zIndex = "100";
  document.getElementById("folder-window").style.zIndex = "0";
  document.getElementById("doom-window").style.zIndex = "0";
  document.getElementById("document-window").style.zIndex = "0";
  document.getElementById("guestbook-window").style.zIndex = "0";
  document.getElementById("suni-window").style.zIndex = "0";
  document.getElementById("mini-window").style.zIndex = "0";
  document.getElementById("rush-window").style.zIndex = "0";
  document.getElementById("ghostemane-window").style.zIndex = "0";
  document.getElementById("kmfdm-window").style.zIndex = "0";
});

$("#folder-window").click(function(){
  document.getElementById("folder-window").style.zIndex = "100";
  document.getElementById("main-window").style.zIndex = "0";
  document.getElementById("doom-window").style.zIndex = "0";
  document.getElementById("document-window").style.zIndex = "0";
  document.getElementById("guestbook-window").style.zIndex = "0";
  document.getElementById("suni-window").style.zIndex = "0";
  document.getElementById("mini-window").style.zIndex = "0";
  document.getElementById("rush-window").style.zIndex = "0";
  document.getElementById("ghostemane-window").style.zIndex = "0";
  document.getElementById("kmfdm-window").style.zIndex = "0";
});

$("#doom-window").click(function(){
  document.getElementById("doom-window").style.zIndex = "100";
  document.getElementById("folder-window").style.zIndex = "0";
  document.getElementById("main-window").style.zIndex = "0";
  document.getElementById("document-window").style.zIndex = "0";
  document.getElementById("guestbook-window").style.zIndex = "0";
  document.getElementById("suni-window").style.zIndex = "0";
  document.getElementById("mini-window").style.zIndex = "0";
  document.getElementById("rush-window").style.zIndex = "0";
  document.getElementById("ghostemane-window").style.zIndex = "0";
  document.getElementById("kmfdm-window").style.zIndex = "0";
});

$("#document-window").click(function(){
  document.getElementById("document-window").style.zIndex = "100";
  document.getElementById("folder-window").style.zIndex = "0";
  document.getElementById("doom-window").style.zIndex = "0";
  document.getElementById("main-window").style.zIndex = "0";
  document.getElementById("guestbook-window").style.zIndex = "0";
  document.getElementById("suni-window").style.zIndex = "0";
  document.getElementById("mini-window").style.zIndex = "0";
  document.getElementById("rush-window").style.zIndex = "0";
  document.getElementById("ghostemane-window").style.zIndex = "0";
  document.getElementById("kmfdm-window").style.zIndex = "0";
});

$("#guestbook-window").click(function(){
  document.getElementById("guestbook-window").style.zIndex = "100";
  document.getElementById("folder-window").style.zIndex = "0";
  document.getElementById("doom-window").style.zIndex = "0";
  document.getElementById("document-window").style.zIndex = "0";
  document.getElementById("main-window").style.zIndex = "0";
  document.getElementById("suni-window").style.zIndex = "0";
  document.getElementById("mini-window").style.zIndex = "0";
  document.getElementById("rush-window").style.zIndex = "0";
  document.getElementById("ghostemane-window").style.zIndex = "0";
  document.getElementById("kmfdm-window").style.zIndex = "0";
});

$("#suni-window").click(function(){
  document.getElementById("suni-window").style.zIndex = "100";
  document.getElementById("folder-window").style.zIndex = "0";
  document.getElementById("doom-window").style.zIndex = "0";
  document.getElementById("document-window").style.zIndex = "0";
  document.getElementById("guestbook-window").style.zIndex = "0";
  document.getElementById("main-window").style.zIndex = "0";
  document.getElementById("mini-window").style.zIndex = "0";
  document.getElementById("rush-window").style.zIndex = "0";
  document.getElementById("ghostemane-window").style.zIndex = "0";
  document.getElementById("kmfdm-window").style.zIndex = "0";
});

$("#mini-window").click(function(){
  document.getElementById("mini-window").style.zIndex = "100";
  document.getElementById("folder-window").style.zIndex = "0";
  document.getElementById("doom-window").style.zIndex = "0";
  document.getElementById("document-window").style.zIndex = "0";
  document.getElementById("guestbook-window").style.zIndex = "0";
  document.getElementById("suni-window").style.zIndex = "0";
  document.getElementById("main-window").style.zIndex = "0";
  document.getElementById("rush-window").style.zIndex = "0";
  document.getElementById("ghostemane-window").style.zIndex = "0";
  document.getElementById("kmfdm-window").style.zIndex = "0";
});

$("#rush-window").click(function(){
  document.getElementById("rush-window").style.zIndex = "100";
  document.getElementById("folder-window").style.zIndex = "0";
  document.getElementById("doom-window").style.zIndex = "0";
  document.getElementById("document-window").style.zIndex = "0";
  document.getElementById("guestbook-window").style.zIndex = "0";
  document.getElementById("suni-window").style.zIndex = "0";
  document.getElementById("mini-window").style.zIndex = "0";
  document.getElementById("main-window").style.zIndex = "0";
  document.getElementById("ghostemane-window").style.zIndex = "0";
  document.getElementById("kmfdm-window").style.zIndex = "0";
});

$("#ghostemane-window").click(function(){
  document.getElementById("ghostemane-window").style.zIndex = "100";
  document.getElementById("folder-window").style.zIndex = "0";
  document.getElementById("doom-window").style.zIndex = "0";
  document.getElementById("document-window").style.zIndex = "0";
  document.getElementById("guestbook-window").style.zIndex = "0";
  document.getElementById("suni-window").style.zIndex = "0";
  document.getElementById("mini-window").style.zIndex = "0";
  document.getElementById("rush-window").style.zIndex = "0";
  document.getElementById("main-window").style.zIndex = "0";
  document.getElementById("kmfdm-window").style.zIndex = "0";
});

$("#kmfdm-window").click(function(){
  document.getElementById("kmfdm-window").style.zIndex = "100";
  document.getElementById("folder-window").style.zIndex = "0";
  document.getElementById("doom-window").style.zIndex = "0";
  document.getElementById("document-window").style.zIndex = "0";
  document.getElementById("guestbook-window").style.zIndex = "0";
  document.getElementById("suni-window").style.zIndex = "0";
  document.getElementById("mini-window").style.zIndex = "0";
  document.getElementById("rush-window").style.zIndex = "0";
  document.getElementById("ghostemane-window").style.zIndex = "0";
  document.getElementById("main-window").style.zIndex = "0";
});

$("#doom-window").hide();
$("#disable").click();
$("body").click();
$("#hide").hide();
$("#folder-window").hide();
$("#document-window").hide();
$("#guestbook-window").hide();
$("#suni-window").hide();
$("#mini-window").hide();
$("#rush-window").hide();
$("#ghostemane-window").hide();
$("#kmfdm-window").hide();