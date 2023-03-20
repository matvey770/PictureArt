const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          no = document.querySelector('.portfolio-no');

    const filterFunc = function(selector) { //сделать так, чтобы работали блок no на грандмазер, убрать селектор markall
        const button = menu.querySelector(selector);
        const markType = wrapper.querySelectorAll(selector);
        button.addEventListener('click', () => {
            markAll.forEach(mark => {
                mark.style.display = 'none';
                mark.classList.remove('animated', 'fadeIn');
            });
    
            no.style.display = "none";
            no.classList.remove('animated', 'fadeIn');

            if (markType) {
                markType.forEach(mark => {
                    mark.style.display = "block";
                    mark.classList.add('animated', 'fadeIn');
                });
            }

            if (selector === ".grandmother" || selector === ".granddad") {
                no.style.display = "block";
                no.classList.add('animated', 'fadeIn');
            }
        });
    };

    filterFunc('.all');
    filterFunc('.lovers');
    filterFunc('.chef');
    filterFunc('.girl');
    filterFunc('.guy');
    filterFunc('.grandmother');
    filterFunc('.granddad');

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName == "LI") {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    });
};

export default filter;

    // const typeFilter = (markType) => {
    //     markAll.forEach(mark => {
    //         mark.style.display = 'none';
    //         mark.classList.remove('animated', 'fadeIn');
    //     });

    //     no.style.display = "none";
    //     no.classList.remove('animated', 'fadeIn');

    //     if (markType) {
    //         markType.forEach(mark => {
    //             mark.style.display = "block";
    //             mark.classList.add('animated', 'fadeIn');
    //         });
    //     } else {
    //         no.style.display = "block";
    //         no.classList.add('animated', 'fadeIn');
    //     }
    // };

    // btnAll.addEventListener('click', () => {
    //     typeFilter(markAll);
    // });

    // btnLovers.addEventListener('click', () => {
    //     typeFilter(markLovers);
    // });

    // btnChef.addEventListener('click', () => {
    //     typeFilter(markChef);
    // });

    // btnGirl.addEventListener('click', () => {
    //     typeFilter(markGirl);
    // });

    // btnGuy.addEventListener('click', () => {
    //     typeFilter(markGuy);
    // });

    // btnGrandmother.addEventListener('click', () => {
    //     typeFilter();
    // });

    // btnGranddad.addEventListener('click', () => {
    //     typeFilter();
    // });