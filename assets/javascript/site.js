"use strict";

var bJekyll = bJekyll || {};

bJekyll = {
    utilities: {
        detectPlatforms: function() {
            document.getElementsByTagName('body')[0].setAttribute('data-platform-name', platform.name);
            document.getElementsByTagName('body')[0].setAttribute('data-platform-version', platform.version);
            document.getElementsByTagName('body')[0].setAttribute('data-platform-layout', platform.layout);
            document.getElementsByTagName('body')[0].setAttribute('data-platform-os', platform.os);
            document.getElementsByTagName('body')[0].setAttribute('data-platform-description', platform.description);
        },
        linkedElement: function() {
            let expectedAttr     = '[data-site-href]',
                expectedClass    = 'element--clickable',
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
                let self = this;
                if (userCookie === "") {
                    self.cookiesLinkAccepted.parentElement.classList.add('animation');
                    let cookiesManagerStyle = window.getComputedStyle(this.cookiesLinkAccepted.parentElement),
                        animationDuration   = cookiesManagerStyle.getPropertyValue('animation-duration').replace('s', '');
                    if (animationDuration !== '') {
                        setTimeout(function() {
                            self.cookiesLinkAccepted.parentElement.classList.add('bounceInRight')
                        }, animationDuration * 1000);
                    }


                    this.setCookie(cookieName, "Cookies accepted", 365);
                } else {
                    self.cookiesLinkAccepted.parentElement.outerHTML = '';
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
                        }, animationDuration * 1000);
                    }

                });
            }
        }
    }
};
document.addEventListener("DOMContentLoaded", function(event) {
    bJekyll.utilities.linkedElement();
    bJekyll.utilities.detectPlatforms();
    bJekyll.utilities.createPostsLayout('.posts-wrapper');
    bJekyll.utilities.cookiesManager.checkCookie('bJekyll cookies accepted');

    // Tiny slider carousel
    if (document.querySelectorAll('.tiny-slider').length > 0) {
        var slider = tns({
            container: '.tiny-slider',
            items: 1,
            nav: false,
            slideBy: 'page',
            loop: false,
            lazyload: true,
            autoplay: false,
            controlsText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
        });
    }

    // Initialize library (lazyLoad for images)
    lozad('.lozad', {
        threshold: 0.1,
        load: function(el) {
            el.src = el.dataset.src;

            if (el.dataset.backgroundImage !== undefined) {
                el.style.backgroundImage = "url(" + el.dataset.backgroundImage + ")";
            }

            el.onload = function() {
                el.classList.add('lazy-fade')
            }
        }
    }).observe();

});
