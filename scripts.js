const nav = document.getElementById('navbar');

window.onscroll = function() {
  if(window.pageYOffset > 100 ) {
    nav.style.background ="#393b3c";
  } else {
    nav.style.background = "transparent";
  }
    
}