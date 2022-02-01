/*!
* Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

var btn = document.querySelector('.btn');
var wrapper = window.parent.document.getElementById('wizParDiv0');
btn.addEventListener('click', closePopUp);
function closePopUp()
{ wrapper.remove(); }

var btn = document.querySelector('.btn');
var wrapper = window.parent.document.getElementById('wizParDiv2');
btn.addEventListener('click', closePopUp);
function closePopUp() { wrapper.remove(); }

var btn = document.querySelector('.btn');
var overlay = window.parent.document.getElementById('intentOpacityDiv');
var wrapper = window.parent.document.getElementById('intentPreview');
btn.addEventListener('click', closePopUp);
function closePopUp()
{ overlay.remove(); wrapper.remove(); }

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };
    var loginCleverTap = function () {
        console.log('Entrou 03')
        clevertap.onUserLogin.push({
            "Site": {
              "Name": "Bruno Hauck - Web CT teste",            // String
              "Identity": 610,              // String or number
              "Email": "jackhauck@gmail.com",         // Email address of the user
              "Phone": "+14155551234",           // Phone (with the country code)
              "Gender": "M",                     // Can be either M or F
              "DOB": new Date(),                 // Date of Birth. Date object
           // optional fields. controls whether the user will be sent email, push etc.
              "MSG-email": false,                // Disable email notifications
              "MSG-push": true,                  // Enable push notifications
              "MSG-sms": true,                   // Enable sms notifications
              "MSG-whatsapp": true,              // Enable WhatsApp notifications
            }
           })
           clevertap.event.push("Product Viewed Web - CT Poc", {
            "Product name":"Casio Chronograph Watch",
            "Category":"Mens Accessories",
            "Price":59.99,
          });   
    }

    console.log('Entrou 02')
    
    // Shrink the navbar 
    navbarShrink();

    loginCleverTap();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
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
