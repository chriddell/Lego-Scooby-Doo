"use strict";

jQuery(document).ready(function($) {

  if ($('audio').length > 0) {

    var Player = $('#js-audio').mediaelementplayer({
      audioWidth: 320
    });

    Player.on('timeupdate', function(e) {
      $.cookie('dimensions_audio_current_time', this.currentTime);
    });

    // Workaround for firefox not firing canplay event reliably
    // if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
    //   var audioCurrentTime = $.cookie.get('dimensions_audio_current_time');
    //   if (audioCurrentTime != undefined && audioCurrentTime < 205) {
    //     Player[0].currentTime = audioCurrentTime;
    //   }

    var once = false;

    Player.on('canplay', function(e) {

      if (once) {

        return;

      }

      var audioCurrentTime = $.cookie('dimensions_audio_current_time');

      if (audioCurrentTime != undefined) {

        Player[0].currentTime = audioCurrentTime;

      }

      var audioMuteStatus = $.cookie('dimensions_audio_muted');

      if (audioMuteStatus == 'yes') {

        Player[0].muted = true;

      }

      var audioStatus = $.cookie('dimensions_audio');

      if (audioStatus == 'pause') {

        Player[0].pause();

      }

      if (audioStatus == 'play' && $('video').length < 1) {

        Player[0].play();

      }

      if (audioStatus == undefined && $('video').length < 1) {

        Player[0].play();

      }

      once = true;

    });

    Player.on('pause', function(e) {

      $.cookie('dimensions_audio', 'pause');

    });

    Player.on('play', function(e) {

      $.cookie('dimensions_audio', 'play');

    });

    Player.on('volumechange', function(e) {

      if ($(this)[0].muted == true) {

        $.cookie('dimensions_audio_muted', 'yes');

      }

      if ($(this)[0].muted == false) {

        $.cookie('dimensions_audio_muted', 'no');

      }
    
    });

  }

});