import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showCards from './modules/showCards';
import accordeon from './modules/accordeon';
import calc from './modules/calc';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import burger from './modules/burger';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showCards('.button-transparent', '#styles .row');
    accordeon('.accordion-heading', '.accordion-block');
    calc('#size', '#material', '#options', '.promocode', '.calc-price' );
    filter();
    pictureSize('.sizes-block');
    burger('.burger', '.burger-menu');
});