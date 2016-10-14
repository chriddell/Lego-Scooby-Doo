var app = {    
    add_listners : function() {  
       document.querySelector('.prizes_play_game_btn').addEventListener('click', prizes_play_game_btn_click );  
    },   
    start_animation : function() {  
      TweenLite.to(document.querySelector(".prizes_prize_6"), 1, {opacity:1, delay:0});
      TweenLite.to(document.querySelector(".prizes_prize_5"), 1, {opacity:1, delay:0.5});
      TweenLite.to(document.querySelector(".prizes_prize_4"), 1, {opacity:1, delay:1});
      TweenLite.to(document.querySelector(".prizes_prize_3"), 1, {opacity:1, delay:1.5});
      TweenLite.to(document.querySelector(".prizes_prize_2"), 1, {opacity:1, delay:2});
      TweenLite.to(document.querySelector(".prizes_prize_1"), 1, {opacity:1, delay:2.5});
    }
}

function prizes_play_game_btn_click(){
 document.location.href = 'tubtime.html';
}

function init_site(){    
  app.add_listners();    
  app.start_animation();    
}
function init_preloader(){        
}
function hide_preloader(){
 init_site();
}
function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image()
        images[i].src = preload.arguments[i]
    }
}

preload();
window.addEventListener("load", hide_preloader);
if (document.readyState === 'complete' || document.readyState === 'interactive'){
    init_preloader();
}else{
    document.addEventListener('DOMContentLoaded', init_preloader, false);
}