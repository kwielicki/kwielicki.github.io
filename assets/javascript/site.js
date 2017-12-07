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
        let msnry = new Masonry( elem, {
          // options
          itemSelector: '.posts-wrapper__element',
          percentPosition: true
        });

    }
};

bJekkyl.linkedElement();
bJekkyl.createPostsLayout();
