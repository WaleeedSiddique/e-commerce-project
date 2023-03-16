var searchInput = document.getElementById("search-bar")
function displaySearch(){
    searchInput.style.top = "0"
}
function closeSearchbar(){
    searchInput.style.top = "-500px"
}
let dropmenu = document.getElementById("dropdown") 
function displayDropdown(){
    dropmenu.classList.toggle("show-dropdown")
}
 document.getElementById("dropdown").addEventListener('click', function (event) {
    event.stopPropagation();
});

