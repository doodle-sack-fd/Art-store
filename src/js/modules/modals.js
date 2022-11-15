function closeModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
    document.body.style.marginRight = `0px`;
}

const modals = () => {
    let btnClicked = false;

    function bindModal(triggerSelector, modalSelector, closeSelector, deleteTrigger = false) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();



        function openModal(modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;

        }

        trigger.forEach(elem => {
            elem.addEventListener('click', (evt) => {
                if (evt.target) {
                    evt.preventDefault();
                }

                btnClicked = true;
                
                if (deleteTrigger) {
                    elem.remove();
                }

                windows.forEach(elem => {
                    elem.style.display = 'none';
                    elem.classList.add('animated', 'fadeIn')
                });

                openModal(modal);
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(elem => {
                elem.style.display = 'none';
            });

            closeModal(modal);
        });

        modal.addEventListener('click', (evt) => {
            if (evt.target === modal) {
                windows.forEach(elem => {
                    elem.style.display = 'none';
                });

                closeModal(modal);
            }
        });

        document.addEventListener('keydown', (evt) => {
            if (evt.code === 'Escape' && modal.style.display === 'block') {
                closeModal(modal);
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function () {
            let display;

            document.querySelectorAll('[data-modal]').forEach(elem => {
                if (getComputedStyle(elem).display !== 'none') {
                    display = 'block';
                }
            });

            if (!display) {
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = 'hidden';
                let scroll = calcScroll();
                document.body.style.marginRight = `${scroll}px`;
            }
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        
        /* Узнаем полную ширину блока DIV в том числе border,
        отнимаем значение клиентской ширины ( padding/content) (!прокрутка не включается)*/

        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    function openByScroll(selector) {
        window.addEventListener('scroll', () => {

            /* pageYOffset - сколько px пользователь отлистал сверху +
            document.documentElement.clientHeight - тот контекнт, который
            сейчас виден пользователю  >= document.documentElement.scrollHeight - полной высоте страницы */
 
            if (!btnClicked && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)) {
                document.querySelector(selector).click();
            }
        });
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift ', '.popup-gift', '.popup-gift .popup-close', true);
    openByScroll('.fixed-gift');
    // showModalByTime('.popup-consultation', 5000);

};



export default modals;
export { closeModal };