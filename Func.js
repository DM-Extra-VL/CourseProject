function toggleMenu() {
    var menu = document.getElementById("menu");
    var overlay = document.getElementById("overlay");
    
    if (menu.style.display === "block") {
        menu.style.display = "none";
        overlay.style.display = "none";
    } else {
        menu.style.display = "block";
        overlay.style.display = "block";
    }
}

function closeMenu() {
    var menu = document.getElementById("menu");
    var overlay = document.getElementById("overlay");
    
    menu.style.display = "none";
    overlay.style.display = "none";
}
