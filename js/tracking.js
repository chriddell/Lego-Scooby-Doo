'use strict';

var trackableObj = [
  { element: 'a[href*="prizes"]', logMessage: 'User navigated to Prizes page.' },
  { element: 'a[href*="trailer"]',  logMessage: 'User navigated to Trailer page.' },
  { element: 'a[href*="characters"]',  logMessage: 'User navigated to Characters page.' },
  { element: '#comp-enter', logMessage: 'User entered the competition.' },
  { element: '.trailerpanel-home .vjs-big-play-button', logMessage: 'User started playing video on Home page.' },
  { element: '.trailerpanel-trailer .vjs-big-play-button', logMessage: 'User started playing video on Trailer page.' },
  { element: '.trailerbuylink a', logMessage: 'User followed link to Amazon pre-order.' }
];

function trackThisClick(target, message){

  $(document).on('click', target, function(e) {

    //e.preventDefault();
    //console.log(message);
    lypn_trackPageView(message);
  });
}

// For every object in our array (above), run the tracking function
for (var i = 0; i < trackableObj.length; i++) {
  
  trackThisClick(trackableObj[i].element, trackableObj[i].logMessage);
}