import anime from 'animejs';

const animation = {
    'hero': () => {

        let tl =  anime.timeline({
            easing: 'easeInOutQuint',
            duration: 500,
            autoplay: false
        });

        tl.add({
            targets: '.hero__slide',
            translateY: ['30px','-30px'],
            opacity: ['100%'],
            delay: anime.stagger(100),
            easing: 'easeOutSine'
        })
        .add({
            targets: '.hero__image-animation div',
            translateY: function(el) {
                return el.getAttribute('data-y');
            },
            delay: anime.stagger(20,{easing: 'easeOutCirc'}),
            duration: 1000
        },'-=800').add({
            targets: '.social-icons',
            opacity: ['100%']
        },'-=200');

        return tl;
    },
    'portfolioOpen': (portfolio_container) => {

        let tl = new anime.timeline({
            autoplay: false
        });
    
        tl.add({
            targets: portfolio_container,
            easing: 'easeInOutQuint',
            duration: 300,
            opacity: 1,
            zIndex: 3
        })
        .add({
            targets: portfolio_container.querySelector('.portfolio-item__details-heading-wrap'),
            opacity: ['0','100%'],
            translateY: ['10px','-10px'],
            translateZ: 0,
            easing: 'easeOutExpo',
        })
        .add({
            targets: portfolio_container.querySelector('.portfolio-item__details-text'),
            duration: 400,
            translateX: ['100%','-100%'],
            translateZ: 0,
            easing: 'easeOutCubic',
        },"-=800")
        .add({
            targets: portfolio_container.querySelectorAll('.portfolio-item__details-text .fade-up'),
            opacity: ['0','100%'],
            translateY: ['10px','-10px'],
            translateZ: 0,
            easing: 'easeOutExpo',
            delay: anime.stagger(70)
        },"-=200")
        .add({
            targets: portfolio_container.querySelector('.portfolio-item__details-img-bg'),
            opacity: ['0','100%'],
            translateX: ['20px','-20px'],
            translateZ: 0,
            easing: 'easeOutExpo',
        },'-=1500')
        .add({
            targets: portfolio_container.querySelector('.portfolio-item__details-img img'),
            opacity: ['0','100%'],
            translateX: ['20px','0'],
            translateZ: 0,
            easing: 'easeOutExpo',
        },'-=1200')
        .add({
            targets: portfolio_container.querySelector('.portfolio-item__details-back-button'),
            opacity: ['0','100%'],
            translateX: ['10px','-10px'],
            translateZ: 0,
            easing: 'easeOutExpo',
        },'-=1000');

        return tl;
    },
    'portfolioClose': (portfolio_container) => {

        let tl = new anime.timeline({
            duration: 500,
        })
        .add({
            targets: portfolio_container,
            easing: 'easeInOutQuint',
            duration: 500,
            opacity: 0,
            zIndex:'-1'
        })
        .add({
            targets: portfolio_container.querySelector('.portfolio-item__details-text'),
            translateX: '+100%'
        });

        return tl;
    }
};

export default animation;