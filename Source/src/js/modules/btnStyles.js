import { getResource } from "../services/requests";

const btnStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    // styles.forEach(item => {   //простая подгрузка без сервера
    //         item.classList.add('animated', 'fadeInUp');
    //     });

    // btn.addEventListener('click', () => {
    //     styles.forEach(item => {
    //         item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //         item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //     });
    //     btn.remove();
    // });

    btn.addEventListener('click', function() {     
        getResource('assets/db.json') //это вместо ссылки, просто путь, однако если так делать, в createcards нужно указать styles, так как в db она есть
            .then(res => createCards(res.styles))
            .catch(error => console.log(error));

        this.remove();      //контекст вызова this не сработает, если будет стрелочная функция, так как она не ссылается на элемент, который вызвал ее
    });

    function createCards(response) {
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div');

            card.classList.add('animated', 'fadeInUp','col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
                <div class="styles-block">
                   <img src=${src} alt="style">
                   <h4>${title}</h4>
                   <a href=${link}>Подробнее</a>
                </div>
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    }
};

export default btnStyles;