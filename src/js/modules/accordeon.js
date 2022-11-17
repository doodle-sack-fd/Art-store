const accordeon = () => {
    const btns = document.querySelectorAll('.accordion-heading'),
        text = document.querySelectorAll('.accordion-block');

    btns.forEach((btn) => {
        btn.addEventListener('click', function () {
            
            if (!this.classList.contains('active')) {
                btns.forEach(btn => {
                    btn.classList.remove('active');
                });
                this.classList.add('active');
            }

        });
    });
};

export default accordeon;