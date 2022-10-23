var navList = document.getElementById('mobile-nav');
var search = document.getElementById('search');
var close = document.getElementById('close');
var mobileSearch = document.getElementById('mobileSearch');
var mobileClose = document.getElementById('mobileClose');

function myFunction(){
    if(navList.style.display === "block"){
        navList.style.display = "none";
    }
    else{
        navList.style.display = "block";
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