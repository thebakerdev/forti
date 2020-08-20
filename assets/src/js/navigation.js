const navigation = (function() {

    const navigation_button = document.querySelector('.navigation__button');
    const navigation_links = document.querySelector('.navigation__links');
    const navigation_overlay = document.querySelector('.navigation__overlay');
    const nav_menu_items = document.querySelectorAll('.navigation__links li a');

    /* Toggle active classes */
    const toggleNav = () => {

        navigation_links.classList.toggle('navigation__links--active');
        navigation_overlay.classList.toggle('navigation__overlay--active');
        navigation_button.classList.toggle('navigation__button--active');
        document.body.classList.toggle('overflow-hidden');
    }

    const init = () => {
        
        navigation_button.addEventListener('click', () => {
            toggleNav();
        });

        nav_menu_items.forEach(menu_item => {
            menu_item.addEventListener('click', (e) => { 

                e.preventDefault();

                toggleNav();
            });
        });
    }

    return {
        init
    }
})();

export default navigation;