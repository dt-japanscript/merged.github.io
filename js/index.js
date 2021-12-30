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

// Counting up Number in Stats section
$('.counter').countUp();

// Owl Carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        },
    }
})