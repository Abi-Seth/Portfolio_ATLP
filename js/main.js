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

function checkAuth() {
    const loader = document.getElementById('loader');
    loader.style.display = 'unset';
    const token = localStorage.getItem('auth_token');

    if (
        window.location.href.split('//')[1].split('/')[1] == 'login.html' ||
        window.location.href.split('//')[1].split('/')[1] == 'dashboard.html' ||
        window.location.href.split('//')[1].split('/')[1] == 'messages.html' ||
        window.location.href.split('//')[1].split('/')[1] == 'deleteblog.html' ||
        window.location.href.split('//')[1].split('/')[1] == 'editblog.html' ||
        window.location.href.split('//')[1].split('/')[1] == 'addblog.html'
    ) {
        if (token == null) {
            if (window.location.href.split('//')[1].split('/')[1] != 'login.html')
                window.location = './login.html';
        } else {
            if (window.location.href.split('//')[1].split('/')[1] == 'login.html')
                window.location = './dashboard.html';
        }
        loader.style.display = 'none';
    } else {
        loader.style.display = 'none';
    }
}
checkAuth();