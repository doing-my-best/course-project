document.addEventListener('DOMContentLoaded', () => {

    const BurgerBtn = document.getElementById('burgerBtn');
    const BurgerMenu = document.getElementById('burgerMenu');
    const burgerClose = document.getElementById('burgerCloseer');

    if(BurgerBtn && BurgerMenu) {
        BurgerBtn.addEventListener('click', () => {
            BurgerMenu.style.display = 'block'
        });
    };
    if (burgerClose && BurgerMenu) {
        burgerClose.addEventListener('click', () => {
            BurgerMenu.style.display = 'none'
        });
    };
    const filterBtn = document.getElementById('filterBtn');
    const filtersMenu = document.getElementById('catalogFilters');

    if (filterBtn && filtersMenu) {
        filterBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            filtersMenu.style.display = filtersMenu.style.display === 'block' ? 'none' : 'block';
        });

        document.addEventListener('click', (event) => {
            if (filtersMenu.style.display === 'block' && !filtersMenu.contains(event.target) && event.target !== filterBtn) {
                filtersMenu.style.display = 'none';
            }
        });

        filterBtn.addEventListener('click', () => {
            filterBtn.classList.toggle('rotate');
        });
    };

    const substractBtn = document.getElementById('subsctractBtn');
    const addBtn = document.getElementById('addBtn');
    const quantityInput = document.getElementById('quantityInput');

    if (substractBtn && addBtn && quantityInput) {

        substractBtn.addEventListener('click', () => {
            let currentVal = parseInt(quantityInput.value);
            if (currentVal > 1) {
                quantityInput.value = currentVal - 1;
            }
        });

        addBtn.addEventListener('click', () => {
            let currentVal = parseInt(quantityInput.value);
            quantityInput.value = currentVal + 1;
            
        });
    };


    const accordionButtons = document.querySelectorAll('.description__accordion-btn');
    if (accordionButtons) {

        accordionButtons.forEach(button => {
            button.addEventListener('click', () => {
                const panelId = button.getAttribute('data-panel');
                const panel = document.getElementById(panelId);

                if (panel.classList.contains('show')) {
                    panel.classList.remove('show');
                    button.classList.remove('active');
                } else {
                    document.querySelectorAll('.description__info').forEach(p => p.classList.remove('show'));
                    document.querySelectorAll('.description__accordion-btn').forEach(btn => btn.classList.remove('active'));

                    panel.classList.add('show');
                    button.classList.add('active');
                }
            });
        });
    };

    const purchasedMenu = document.getElementById('purchased');
    const purchasedCloser = document.getElementById('purchasedCloser');
    const purchaseBtn = document.getElementById('buyBtn');

    if (purchasedMenu && purchasedCloser && purchaseBtn) {

        if (purchasedCloser && purchasedMenu && purchaseBtn) {
            purchaseBtn.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();
                purchasedMenu.style.display = purchasedMenu.style.display === 'block' ? 'none' : 'block';
            });

            purchasedCloser.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();
                purchasedMenu.style.display = 'none';
            });
        };
    };

    const prevBtn = document.querySelector('.btn--prev');
    const nextBtn = document.querySelector('.btn--next');
    const carousel = document.querySelector('.suggestion__nav__carousel');
    const item = document.querySelectorAll('.suggestion__nav__carousel__item');
    const progressLine = document.querySelector('.scroll-line__progress');
    const scrollLine = document.querySelector('.scroll-line');

    if (prevBtn && nextBtn && carousel && item && progressLine && scrollLine) {

        let slideWidth = item[0].offsetWidth;

        
        const updateSlideWidth = () => {
            slideWidth = item[0].offsetWidth;
        };
            window.addEventListener('resize', updateSlideWidth);
        
        let windowWidth = window.innerWidth;
        if (windowWidth <= 700) {
            nextBtn.addEventListener('click', () => {
                carousel.scrollLeft += slideWidth +20;
            });
            prevBtn.addEventListener('click', () => {
                carousel.scrollLeft -= slideWidth +20;
            });
        };
        if (windowWidth >= 701 && windowWidth <= 900) {
            nextBtn.addEventListener('click', () => {
                carousel.scrollLeft += slideWidth +40;
            });
            prevBtn.addEventListener('click', () => {
                carousel.scrollLeft -= slideWidth +40;
            });
        };
        if (windowWidth >= 901) {
            nextBtn.addEventListener('click', () => {
                const parentWidth = scrollLine.clientWidth;
                carousel.scrollLeft += slideWidth +40;
                const currentWidth = parseInt(window.getComputedStyle(progressLine).width, 10);
                const newWidth = currentWidth + 250;
                if (newWidth <= parentWidth) {
                    progressLine.style.width = newWidth + 'px'; // Збільшуємо ширину на 50 пікселів
                } else {
                    progressLine.style.width = parentWidth + 'px'; // Обмежуємо ширину до ширини батьківського елемента
                }
            });
            prevBtn.addEventListener('click', () => {
                carousel.scrollLeft -= slideWidth +40;
                const currentWidth = parseInt(window.getComputedStyle(progressLine).width, 10);
                progressLine.style.width = (currentWidth - 250) + 'px'; 
            });
        };
    };

});

