// YouTube Pause Better Extension
// The MIT License
// Original Author: Copyright (c) 2015 Nishanth Shanmugham
// Taylor Nodell 2017

(function() {

  var a = document.getElementsByTagName("body")[0];
  a.onkeydown = responder;
  function responder(event) {
      // get spacebar, player, currently focused element and define comment section and search
      var spacebar = 32;
      var currFocus = document.activeElement;
      var search = document.getElementById("masthead-search-term");
      var comments = document.querySelector("div [role='textbox']");
      var player =  document.getElementById("movie_player");

      if((event.which === 32) && (currFocus !== search) && (currFocus !== comments) && (currFocus !== player)){
        var states = { 1: "playing", 2: "paused" };
        var state = player.getPlayerState();
      
        if ( state === 1) {
          player.pauseVideo();
        } else {
          player.playVideo();
        }
      event.preventDefault();
      return false;
      }
      // playerState is automatically updated by an event elsewhere
      }
  })();