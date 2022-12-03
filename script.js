var navList = document.getElementById('mobile-nav');
var search = document.getElementById('search');
var close = document.getElementById('close');
var mobileSearch = document.getElementById('mobileSearch');
var mobileClose = document.getElementById('mobileClose');

function myFunction(){
    if(navList.style.top === "64px"){
        navList.style.top = "-100%";
    }
    else{
        navList.style.top = "64px";
    }
}
function searchFunction(){
    search.style.display = "block";
    close.style.display = "block";
}
function closeFunction(){
    search.style.display = "none";
    close.style.display = "none";
}

function mobileSearchFunction(){
    mobileSearch.style.display = "block";
    mobileClose.style.display = "block";
}
function mobileCloseFunction(){
    mobileSearch.style.display = "none";
    mobileClose.style.display = "none";
}
 // Top Function  
 let mybutton = document.getElementById("myBtn");
 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }
 // End of Top Function

// Accordion
let acc = document.getElementsByClassName("accordion");
let i;

for(i = 0; i< acc.length; i++){
  acc[i].addEventListener("click", function(){
    this.classList.toggle = "active";
    let panel = this.nextElementSibling;
    if(panel.style.display === "block"){
      panel.style.display = "none";
    }
      else{
        panel.style.display = "block";
    }
    
  });
}
$(".service-item").click(function () {
  $(this).children(".accordion").children("i").toggleClass("down");
});

