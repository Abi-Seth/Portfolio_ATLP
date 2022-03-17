var menu = document.getElementById('nav_links');
var toggled = false;

function toggleMenu() {
    if (toggled) {
        menu.classList.remove('show_menu');
        toggled = false;
    } else {
        menu.classList.add('show_menu');
        toggled = true;
    }
}