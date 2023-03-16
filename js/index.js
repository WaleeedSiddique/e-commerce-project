var searchInput = document.getElementById("search-bar")
var dropmenu = document.getElementById("dropdown") 
function displaySearch(){
    searchInput.style.top = "0"
}
function closeSearchbar(){
    searchInput.style.top = "-500px"
}

function displayDropdown(){
    dropmenu.classList.toggle("show-dropdown")
}
 document.getElementById("dropdown").addEventListener('click', function (event) {
    event.stopPropagation();
});

