/*!
* Start Bootstrap - Resume v7.0.4 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

let about = document.querySelector('#about');
console.log(about.offsetHeight)
let nav = document.querySelector('#sideNav');
let content = document.querySelector('body');
let profile = document.querySelector('#profile-img');
window.onscroll = function(){
    if(window.scrollY>about.offsetHeight-about.offsetHeight*0.3){
        nav.classList.add('extend')
        content.classList.add('extend')
        profile.classList.add('extend')
    }
    else{
        nav.classList.remove('extend')
        content.classList.remove('extend')
        profile.classList.remove('extend')
    }
}