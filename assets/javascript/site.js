"use strict";

const bJekkyl = {
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
    createPostsLayout: function() {
        let elem = document.querySelector('.posts-wrapper');
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
    }
};

bJekkyl.linkedElement();
bJekkyl.createPostsLayout();

//Owl Carousel initlializator
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      items: 1
  });
});
