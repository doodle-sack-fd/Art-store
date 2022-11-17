const showCards = (triggerSelector, classSelector) => {
    const btn = document.querySelector(triggerSelector),
        cards = document.querySelectorAll(classSelector);

    cards.forEach(elem => {
        elem.classList.add('animated', 'fadeInUp')
    });

    btn.addEventListener('click', () => {
        cards.forEach(elem => {
            elem.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs", "styles-2");
            elem.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
        });
        btn.remove();
    });
};

export default showCards;