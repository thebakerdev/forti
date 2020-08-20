import MoveTo from 'moveto';

const scroll = (function() {

    const scrollToTop = () => {
        const scroll_to_top_button = document.querySelector('.scroll-to-top-btn');

        window.onscroll = function() {

            if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
                scroll_to_top_button.style.opacity = 1;
              } else {
                scroll_to_top_button.style.opacity = 0;
            }
        };
    }

    const init = () => {

        scrollToTop();

        const moveTo = new MoveTo();

        const triggers = document.getElementsByClassName('js-trigger');
    
        for (let i = 0; i < triggers.length; i++) {
        
            moveTo.registerTrigger(triggers[i]);
        }
    }

    return {
        init
    }
})();

export default scroll;