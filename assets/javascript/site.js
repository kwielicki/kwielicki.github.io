"use strict";

var bJekyll = bJekyll || {};

bJekyll = {
    utilities: {
        linkedElement: function() {
            let expectedAttr     = `[data-site-href]`,
                expectedClass    = `element--clickable`,
                expectedElements = document.querySelectorAll(expectedAttr);

            expectedElements.forEach(element => {
                element.classList.add(expectedClass);
                element.addEventListener('click', function() {
                    window.location.href = this.getAttribute('data-site-href');
                });
            });
        },
        createPostsLayout: function( selector ) {

            if (document.querySelector(selector) === null) return;

            let elem = document.querySelector(selector);
            let buttonElement = elem.querySelectorAll('.btn--posts');

            buttonElement.forEach(element => {
                element.addEventListener('mouseover', function() {
                    element.classList.add('hovered');
                    element.parentNode.closest('div').previousSibling.previousElementSibling.classList.add('hovered')
                });
                element.addEventListener('mouseout', function() {
                    element.classList.remove('hovered');
                    element.parentNode.closest('div').previousSibling.previousElementSibling.classList.remove('hovered')
                });
            });
        },
        cookiesManager: {
            cookiesLinkAccepted: document.querySelector('.js-cookies-manager--accepted'),
            getCookie: function ( cookieName ) {
                var cookieName = cookieName + "=";
                var decodedCookie = decodeURIComponent(document.cookie);
                var ca = decodedCookie.split(';');
                for(var i = 0; i <ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(cookieName) == 0) {
                        return c.substring(cookieName.length, c.length);
                    }
                }
                return "";
            },
            checkCookie: function ( cookieName ) {
                let userCookie = this.getCookie(cookieName);
                if (userCookie === "") {
                    let self = this;
                    self.cookiesLinkAccepted.parentElement.classList.add('animation');
                    let cookiesManagerStyle = window.getComputedStyle(this.cookiesLinkAccepted.parentElement),
                        animationDuration   = cookiesManagerStyle.getPropertyValue('animation-duration').replace('s', '');
                    if (animationDuration !== '') {
                        setTimeout(function() {
                            self.cookiesLinkAccepted.parentElement.classList.add('bounceInRight')
                        }, animationDuration * 1000)
                    }

                    this.setCookie(cookieName, "Cookies accepted", 365);
                }
            },
            setCookie: function ( cookieName , cookieValue, cookieExparies) {

                if (this.cookiesLinkAccepted === null) return;

                this.cookiesLinkAccepted.addEventListener('click', function ( event ) {

                    let self = this;

                    const actuallyDate = new Date();
                    actuallyDate.setTime(actuallyDate.getTime() + (cookieExparies*24*60*60*1000));
                    const expires = "expires="+ actuallyDate.toUTCString();
                    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";

                    self.parentElement.classList.add('animation', 'bounceOutRight');

                    let cookiesManagerStyle = window.getComputedStyle(self.parentElement),
                        animationDuration   = cookiesManagerStyle.getPropertyValue('animation-duration').replace('s', '');

                    if (animationDuration !== '') {
                        setTimeout(function() {
                            self.parentElement.outerHTML = '';
                        }, animationDuration * 1000)
                    }

                });



            }
        }

    }
};

document.addEventListener("DOMContentLoaded", function(event) {
    bJekyll.utilities.linkedElement();
    bJekyll.utilities.createPostsLayout('.posts-wrapper');
    bJekyll.utilities.cookiesManager.checkCookie('bJekyll cookies accepted');
  });


//Owl Carousel initlializator
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      items: 1
  });
});
