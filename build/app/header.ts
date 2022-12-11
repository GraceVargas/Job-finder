const header = document.createElement('header');
document.body.appendChild(header);
header.setAttribute('id', 'header');

const navbar = document.createElement('nav');
header.appendChild(navbar);
navbar.setAttribute('id', 'header-navbar');

const navbarList = document.createElement('ul');
navbar.appendChild(navbarList);
navbarList.setAttribute('id', 'navbarList');
navbarList.classList.add('default-list');


const itemsNavbar = [{
    name: 'Careers',
    link: 'index'
},
{
    name: 'Create Job',
    link: 'submitjob'
},
{
    name: 'JOB FINDER 🔍 ',
    link: 'index'
}];

for (let item of itemsNavbar) {
    const itemNavbar = document.createElement('li');
    navbarList.appendChild(itemNavbar);
    const navbarBtn = document.createElement('a');
    itemNavbar.appendChild(navbarBtn);
    navbarBtn.appendChild(document.createTextNode(item.name));
    navbarBtn.setAttribute('href', `${item.link}.html`);
}




