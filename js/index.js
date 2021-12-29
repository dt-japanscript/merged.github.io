// Navigation Bar JS
var navbarMergedList = document.getElementById("navbarMergedList");
var listNav = navbarMergedList.getElementsByTagName("li")
for (var i = 0; i < listNav.length; i++) {
    listNav[i].addEventListener("click", function () {
        var current = document.querySelector("#navbarMergedList .active");
        current.className = current.className.replace("active", "");
        this.className += " active";
    })
}