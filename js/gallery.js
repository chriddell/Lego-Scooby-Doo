"use strict";


function gallery_1_btn_click() {
  document.querySelector('.gallery_1_content').style.display = 'block';
}
function gallery_2_btn_click() {
  document.querySelector('.gallery_2_content').style.display = 'block';
}
function gallery_3_btn_click() {
  document.querySelector('.gallery_3_content').style.display = 'block';
}
function gallery_4_btn_click() {
  document.querySelector('.gallery_4_content').style.display = 'block';
}
function gallery_5_btn_click() {
  document.querySelector('.gallery_5_content').style.display = 'block';
}
function gallery_6_btn_click() {
  document.querySelector('.gallery_6_content').style.display = 'block';
}

function gallery_1_content_click() {
  document.querySelector('.gallery_1_content').style.display = 'none';
}
function gallery_2_content_click() {
  document.querySelector('.gallery_2_content').style.display = 'none';
}
function gallery_3_content_click() {
  document.querySelector('.gallery_3_content').style.display = 'none';
}
function gallery_4_content_click() {
  document.querySelector('.gallery_4_content').style.display = 'none';
}
function gallery_5_content_click() {
  document.querySelector('.gallery_5_content').style.display = 'none';
}
function gallery_6_content_click() {
  document.querySelector('.gallery_6_content').style.display = 'none';
}
var images = [],
  app = {
    add_listners : function () {
      document.querySelector('.gallery_1_btn').addEventListener('click', gallery_1_btn_click);
      document.querySelector('.gallery_2_btn').addEventListener('click', gallery_2_btn_click);
      document.querySelector('.gallery_3_btn').addEventListener('click', gallery_3_btn_click);
      document.querySelector('.gallery_4_btn').addEventListener('click', gallery_4_btn_click);
      document.querySelector('.gallery_5_btn').addEventListener('click', gallery_5_btn_click);
      document.querySelector('.gallery_6_btn').addEventListener('click', gallery_6_btn_click);
      
      document.querySelector('.gallery_1_content').addEventListener('click', gallery_1_content_click);
      document.querySelector('.gallery_2_content').addEventListener('click', gallery_2_content_click);
      document.querySelector('.gallery_3_content').addEventListener('click', gallery_3_content_click);
      document.querySelector('.gallery_4_content').addEventListener('click', gallery_4_content_click);
      document.querySelector('.gallery_5_content').addEventListener('click', gallery_5_content_click);
      document.querySelector('.gallery_6_content').addEventListener('click', gallery_6_content_click);
    }
  };
function init_site() {
  app.add_listners();
}
window.addEventListener("load", init_site);