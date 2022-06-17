var header = document.createElement('header');
document.body.appendChild(header);
header.setAttribute('id', 'header');
var navbar = document.createElement('nav');
header.appendChild(navbar);
navbar.setAttribute('id', 'header-navbar');
var navbarList = document.createElement('ul');
navbar.appendChild(navbarList);
navbarList.setAttribute('id', 'navbarList');
navbarList.classList.add('default-list');
var itemsNavbar = [{
        name: 'Careers',
        link: 'index'
    },
    {
        name: 'Home',
        link: 'index'
    },
    {
        name: 'Create Job',
        link: 'submitjob'
    }];
for (var _i = 0, itemsNavbar_1 = itemsNavbar; _i < itemsNavbar_1.length; _i++) {
    var item = itemsNavbar_1[_i];
    var itemNavbar = document.createElement('li');
    navbarList.appendChild(itemNavbar);
    var navbarBtn = document.createElement('a');
    itemNavbar.appendChild(navbarBtn);
    navbarBtn.appendChild(document.createTextNode(item.name));
    navbarBtn.setAttribute('href', "".concat(item.link, ".html"));
}
