import { getResourse } from "../services/requests";

const showCards = (triggerSelector, wrapperSelector) => {
    const btn = document.querySelector(triggerSelector),
        wrapper = document.querySelector(wrapperSelector);

    btn.addEventListener('click', function() {
        getResourse('assets/db.json')
            .then(res => renderCards(res.styles))
            .catch(error => {
                console.log(error);
                // let card = document.createElement('div');

                // card.classList.add("animated", "fadeInUp", "col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
                // card.innerHTML =
                //     `
                //     <div class="styles-block">
                //         <img src="Что-то не так" alt="style">
                //         <h4>Что-то не так</h4>
                //         <a href="Что-то не так">Подробнее</a>
                //     </div>
                // `;
                // wrapper.appendChild(card);
                this.remove();
            });

        function renderCards(response) {
            response.forEach(({src, title, link}) => {
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