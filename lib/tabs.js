$(function(){
  $("#about").click(function(){
    $(this).addClass("is-active");
    $("#team").removeClass("is-active");
    $("#events").removeClass("is-active");
    $('#content-about').css("display", "block")
    $('#content-team').css("display", "none")
    $('#content-events').css("display", "none")
  });

  $("#team").click(function(){
    $(this).addClass("is-active");
    $("#about").removeClass("is-active");
    $("#events").removeClass("is-active");
    $('#content-about').css("display", "none")
    $('#content-team').css("display", "block")
    $('#content-events').css("display", "none")
  });

  $("#events").click(function(){
    $(this).addClass("is-active");
    $("#about").removeClass("is-active");
    $("#team").removeClass("is-active");
    $('#content-team').css("display", "none")
    $('#content-about').css("display", "none")
    $('#content-events').css("display", "block")
  });
});
