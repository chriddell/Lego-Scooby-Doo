var app = {    
    add_listners : function() {     
      document.querySelector('.home_tubtime_btn').addEventListener('click', home_tubtime_btn_click );      
      document.querySelector('.home_tubtime_btn').addEventListener('mouseenter', home_tubtime_btn_mouseenter );     
      document.querySelector('.home_tubtime_btn').addEventListener('mouseleave', home_tubtime_btn_mouseleave ); 
      
      document.querySelector('.home_prizes_btn').addEventListener('click', home_prizes_btn_click );      
      document.querySelector('.home_prizes_btn').addEventListener('mouseenter', home_prizes_btn_mouseenter );     
      document.querySelector('.home_prizes_btn').addEventListener('mouseleave', home_prizes_btn_mouseleave );  
      
      document.querySelector('.home_trailer_btn').addEventListener('click', home_trailer_btn_click );      
      document.querySelector('.home_trailer_btn').addEventListener('mouseenter', home_trailer_btn_mouseenter );     
      document.querySelector('.home_trailer_btn').addEventListener('mouseleave', home_trailer_btn_mouseleave );  
      
      document.querySelector('.home_gallery_btn').addEventListener('click', home_gallery_btn_click );      
      document.querySelector('.home_gallery_btn').addEventListener('mouseenter', home_gallery_btn_mouseenter );     
      document.querySelector('.home_gallery_btn').addEventListener('mouseleave', home_gallery_btn_mouseleave );  
    }
}

function home_tubtime_btn_click(){
 document.location.href = 'tubtime.html';
}
function home_tubtime_btn_mouseenter(){
  TweenLite.to(document.querySelector(".home_tubtime_btn_over"), 0.5, {opacity:1, delay:0});
}
function home_tubtime_btn_mouseleave(){
  TweenLite.to(document.querySelector(".home_tubtime_btn_over"), 0.5, {opacity:0, delay:0});
}

function home_prizes_btn_click(){
 document.location.href = 'prizes.html';
}
function home_prizes_btn_mouseenter(){
  TweenLite.to(document.querySelector(".home_prizes_btn_over"), 0.5, {opacity:1, delay:0});
}
function home_prizes_btn_mouseleave(){
  TweenLite.to(document.querySelector(".home_prizes_btn_over"), 0.5, {opacity:0, delay:0});
}

function home_trailer_btn_click(){
 document.location.href = 'trailer.html';
}
function home_trailer_btn_mouseenter(){
  TweenLite.to(document.querySelector(".home_trailer_btn_over"), 0.5, {opacity:1, delay:0});
}
function home_trailer_btn_mouseleave(){
  TweenLite.to(document.querySelector(".home_trailer_btn_over"), 0.5, {opacity:0, delay:0});
}

function home_gallery_btn_click(){
 document.location.href = 'gallery.html';
}
function home_gallery_btn_mouseenter(){
  TweenLite.to(document.querySelector(".home_gallery_btn_over"), 0.5, {opacity:1, delay:0});
}
function home_gallery_btn_mouseleave(){
  TweenLite.to(document.querySelector(".home_gallery_btn_over"), 0.5, {opacity:0, delay:0});
}

function init_site(){    
  app.add_listners();    
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