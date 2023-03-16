var searchInput = document.getElementById("search-bar")
function displaySearch(){
    searchInput.style.top = "0"
}
function closeSearchbar(){
    searchInput.style.top = "-500px"
}
let dropmenu = document.getElementById("dropdown") 
function displayDropdown(){
    dropmenu.classList.add("show-dropdown")
}
 document.getElementById("dropdown").addEventListener('click', function (event) {
    event.stopPropagation();
});
window.onclick = function(event) {
    console.log("Waleed")
    if(dropmenu.classList.contains("show-dropdown")){
        dropmenu.classList.remove("show-dropdown")
    }
    // if (!event.target.matches('.product-dropdown')) {
      
    //     // document.getElementsByClassName("dropdownmenu-content");
          
    //     var i;
    //     for (i = 0; i < dropdown.length; i++) {
    //         var openDropdown = dropdown[i];
    //         if (openDropdown.classList.contains('show')) {
    //             openDropdown.classList.remove('show');
    //         }
    //     }
    // }
}
