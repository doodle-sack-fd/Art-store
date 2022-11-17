// import checkNumInputs from './checkNumInputs';
const forms = (popupSelector) => {

    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        upload = document.querySelectorAll('[name="upload"]');

    // checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Идет загрузка',
        success: 'Спасибо! Скоро с вами свяжемся',
        failure: 'Что-то пошло не так',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    const path = {
        design: 'assets/server.php',
        question: 'assets/question.php'
    };

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    };

    const resetInputs = () => {
        inputs.forEach(elem => {
            elem.value = '';
        });

        upload.forEach(elem => {
            elem.previousElementSibling.textContent = 'Файл не выбран';
        })
    };

    /* check length name */

    upload.forEach(elem => {
        elem.addEventListener('input', () => {
            console.log(elem.files[0]);
            let dots;
            const arr = elem.files[0].name.split('.')
            arr[0].length > 5 ? dots = '...' : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            elem.previousElementSibling.textContent = name;

        });
    });


    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.style.textAlign = 'center';
            item.parentNode.appendChild(statusMessage);

            item.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                item.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(item);
            let api;

            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.design : api = path.question;
            console.log(api);

            postData(api, formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure;
                })
                .finally(() => {
                    resetInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        item.style.display = 'block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp'); 
                    }, 5000);
                    
                });
        });

    });

};

export default forms;