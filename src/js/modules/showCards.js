import { getResourse } from "../services/requests";

const showCards = (triggerSelector, wrapperSelector) => {
    const btn = document.querySelector(triggerSelector),
        wrapper = document.querySelector(wrapperSelector);

    btn.addEventListener('click', function () {
        getResourse('assets/db.json2')
            .then(res => renderCards(res.styles))
            .catch(error => {
                if(error) {
                    let cardError = document.createElement('div') ;
                    cardError.classList.add("animated", "fadeInUp", "col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");

                    cardError.innerHTML =
                        `
                    <div class="styles-block">
                        <p>Ошибка</p>
                    </div>
                `;
                    wrapper.appendChild(cardError);
                }
            });
        this.remove();

        function renderCards(response) {
            response.forEach(({ src, title, link }) => {
                let card = document.createElement('div');

                card.classList.add("animated", "fadeInUp", "col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");

                card.innerHTML =
                    `
                    <div class="styles-block">
                        <img src="${src}" alt="style">
                        <h4>${title}</h4>
                        <a href="${link}">Подробнее</a>
                    </div>
                `;
                wrapper.appendChild(card);

            });

        }
    });
};

export default showCards;