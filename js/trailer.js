var app = {    
    add_listners : function() {     
      document.querySelector('.videoplayer_cover').addEventListener('click', close_click );  
    }
}

function close_click(){
 document.location.href = 'index.html';
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