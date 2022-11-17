const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

        txtInputs.forEach(input => {
            input.addEventListener('keypress', function(evt) {
                input.style.autocomplete = "off";
                if(evt.key.match(/[^а-яё 0-9]/ig)) {
                    evt.preventDefault();
                }
            });
        });
};

export default checkTextInputs;