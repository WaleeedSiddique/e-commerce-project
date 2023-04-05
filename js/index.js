var searchInput = document.getElementById("search-bar")
var dropmenu = document.getElementById("dropdown") 
function displaySearch(){
    searchInput.style.top = "0%"
}
function closeSearchbar(){
    searchInput.style.top = "-500px"
}

function displayDropdown(){
    dropmenu.classList.toggle("show-dropdown")
    console.log("whtever")
}
 document.getElementById("dropdown").addEventListener('click', function (event) {
    event.stopPropagation();
});

let nav = document.getElementById("navbar")
window.onscroll = function() {
    scroll()
};

function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        nav.style.backgroundColor = "#efede9";
    }
    else {
        nav.style.backgroundColor = "transparent";
    }
}

function showsidebar(){
    let a = document.getElementById("nav").classList.toggle("left-nav-show")
    
}
function scrollToTop() {
    const scrollPosition = window.pageYOffset;
      window.scrollTo(0, 0);
  }
    
  