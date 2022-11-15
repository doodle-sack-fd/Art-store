const sliders = (slides, direction, prev, next) => {
    let slideIndex = 1,
        paused = false; // id = setInterval
    const items = document.querySelectorAll(slides);

    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = items.length;
        }

        items.forEach(elem => {
            elem.classList.add('animated');
            elem.style.display = 'none';
        });

        items[slideIndex - 1].style.display = 'block';
    }

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    try {
        const prevBtn = document.querySelector(prev),
            nextBrn = document.querySelector(next);
        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
        });

        nextBrn.addEventListener('click', () => {
            plusSlides(1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');
        });
    } catch (error) { }

    /* vertical // horizontal */
    
    function activateAnimation() {
        if (direction === 'vertical') {
            paused = setInterval(function () {
                plusSlides(1);
                items[slideIndex - 1].classList.add('slideInDown');
            }, 3000);
        } else {
            paused = setInterval(function () {
                plusSlides(1);
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft');
            }, 3000);
        }
    }
    
    activateAnimation();

    /* Cancellation of the action on an object */

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });


    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });
 

};

export default sliders;