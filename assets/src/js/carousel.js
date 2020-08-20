
import Glider from 'glider-js';

const carousel = (function() {

    const init = () => {
        new Glider(document.querySelector('.glider'),{
            slidesToShow: 1,
            dots: '.glider__dots',
            draggable: true,
        });
    }

    return {
        init
    }
})();

export default carousel;