
jQuery(document).ready(function($) {
	
var dino1value = $.cookie("dino1");
var dino2value = $.cookie("dino2");
var dino3value = $.cookie("dino3");
var dino4value = $.cookie("dino4");
var dino5value = $.cookie("dino5");

//alert(allDinosValue);

$( "#hiddenDino1" ).click(function() {
  $.cookie("dino1", 1);	
  var dino1value = $.cookie("dino1");
  $( "#speciesfound1" ).css('background-image','url(images/species-found-01.png)');
  if (dino1value == 1 && dino2value == 1 && dino3value == 1 && dino4value == 1 && dino5value == 1) {
	  window.location = 'enter-competition.html';
  }
});
$( "#hiddenDino2" ).click(function() {
  $.cookie("dino2", 1);	
  var dino2value = $.cookie("dino2");
  $( "#speciesfound2" ).css('background-image','url(images/species-found-02.png)');
  if (dino1value == 1 && dino2value == 1 && dino3value == 1 && dino4value == 1 && dino5value == 1) {
	  window.location = 'enter-competition.html';
  }
});
$( "#hiddenDino3" ).click(function() {
  $.cookie("dino3", 1);	
  var dino3value = $.cookie("dino3");
  $( "#speciesfound3" ).css('background-image','url(images/species-found-03.png)');
  if (dino1value == 1 && dino2value == 1 && dino3value == 1 && dino4value == 1 && dino5value == 1) {
	  window.location = 'enter-competition.html';
  }
});
$( "#hiddenDino4" ).click(function() {
  $.cookie("dino4", 1);	
  var dino4value = $.cookie("dino4");
  $( "#speciesfound4" ).css('background-image','url(images/species-found-04.png)');
  if (dino1value == 1 && dino2value == 1 && dino3value == 1 && dino4value == 1 && dino5value == 1) {
	  window.location = 'enter-competition.html';
  }
});
$( "#hiddenDino5" ).click(function() {
  $.cookie("dino5", 1);	
  var dino5value = $.cookie("dino5");
  $( "#speciesfound5" ).css('background-image','url(images/species-found-05.png)');
  if (dino1value == 1 && dino2value == 1 && dino3value == 1 && dino4value == 1 && dino5value == 1) {
	  window.location = 'enter-competition.html';
  }
});


if (dino1value == 1) {
  $( "#speciesfound1" ).css('background-image','url(images/species-found-01.png)');
}

if (dino2value == 1) {
  $( "#speciesfound2" ).css('background-image','url(images/species-found-02.png)');
}

if (dino3value == 1) {
  $( "#speciesfound3" ).css('background-image','url(images/species-found-03.png)');
}

if (dino4value == 1) {
  $( "#speciesfound4" ).css('background-image','url(images/species-found-04.png)');
}

if (dino5value == 1) {
  $( "#speciesfound5" ).css('background-image','url(images/species-found-05.png)');
}

$('a.comp-exit').click(function(){
  parent.history.back();
  return false;
});

$( "#showTermsConditions" ).click(function() {
  $( "#compFormPanel" ).hide();
  $( "#termsConditionsPanel" ).show();
});

$( "#hideTermsConditions" ).click(function() {
  $( "#compFormPanel" ).show();
  $( "#termsConditionsPanel" ).hide();
});

$( "#startover" ).click(function() {
  $.removeCookie("dino1");	
  $.removeCookie("dino2");	
  $.removeCookie("dino3");	
  $.removeCookie("dino4");	
  $.removeCookie("dino5");	
});

/* ==========================================================================
   Main Audio - basically the background music.
   ========================================================================== */

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

/* ==========================================================================
     Custom overlays
     ========================================================================== */

  $('.compboxClose, .thankyouboxClose').on('click', function(){
    $('.comp-modal, .comp-overlay, .comp-complete-modal').css({
      'display': 'none'
    });
    $('html').removeClass('no-scroll');
  });

  $( "#showTermsConditions" ).click(function() {
    $( "#compFormPanel" ).hide();
    $( "#termsConditionsPanel" ).show();
  });

  $( "#hideTermsConditions" ).click(function() {
    $( "#compFormPanel" ).show();
    $( "#termsConditionsPanel" ).hide();
  });

});


