
import animation from './animation';

const portfolio = (function() {

    const openPortfolio = () => {

        const portfolio_thumbnail_buttons = document.querySelectorAll('.portfolio-item__thumbnail-button');

        portfolio_thumbnail_buttons.forEach(portfolio_thumbnail_button => {

            portfolio_thumbnail_button.addEventListener('click', () => {

                let parent = portfolio_thumbnail_button.parentNode.parentNode.parentNode;
                let current_item = parent.querySelector('.portfolio-item__details');
                
                animation['portfolioOpen'](current_item).play();

                setTimeout(() => {
                    document.body.classList.toggle('overflow-hidden');
                },500);

            });
        });
    }

    const closePorfolio = () => {

        const portfolio_details_back_buttons = document.querySelectorAll('.portfolio-item__details-back-button');

        portfolio_details_back_buttons.forEach(portfolio_details_back_button => {

            portfolio_details_back_button.addEventListener('click', () => {

                let current_item = portfolio_details_back_button.parentNode;

                animation['portfolioClose'](current_item).play();

                document.body.classList.toggle('overflow-hidden');
            });
        });
    }

    const init = () => {

       openPortfolio();

       closePorfolio();

    }

    return {
        init
    }
})();

export default portfolio;