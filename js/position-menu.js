window.addEventListener('load', function() {
    var menuItems = [];
    for (var i = 0; i <= 5; i++) {
        menuItems[i] = document.getElementById('menu-item' + i);
    }
    var path = window.location.pathname;
    var currentURL = path.substr(path.lastIndexOf('/') + 1);
    switch (currentURL) {
        case 'oferta':
        case 'oferta.html':
            menuItems[1].classList.add('checked');
            menuItems[1].addEventListener("click", function(event) {
                event.preventDefault();
            });
            break;
        case 'biura-rachunkowe':
        case 'biura-rachunkowe.html':
            menuItems[2].classList.add('checked');
            menuItems[2].addEventListener("click", function(event) {
                event.preventDefault();
            });
            break;
        case 'pomoc-zdalna':
        case 'pomoc-zdalna.html':
            menuItems[3].classList.add('checked');
            menuItems[3].addEventListener("click", function(event) {
                event.preventDefault();
            });
            break;
        case 'onas':
        case 'onas.html':
            menuItems[4].classList.add('checked');
            menuItems[4].addEventListener("click", function(event) {
                event.preventDefault();
            });
            break;
        case 'kontakt':
        case 'kontakt.html':
            menuItems[5].classList.add('checked');
            menuItems[5].addEventListener("click", function(event) {
                event.preventDefault();
            });
            break;
        default:
            menuItems[0].addEventListener("click", function(event) {
                event.preventDefault();
            });
            break;
    }
});