
import scroll from './scroll';
import navigation from './navigation';
import animation from './animation';
import carousel from './carousel';
import portfolio from './portfolio';
import validation from './validation';

(function(){

    setTimeout(()=> {

        animation['hero']().play();

    },500);

    const scripts = [
        scroll,
        navigation,
        carousel,
        portfolio,
        validation
    ];

    scripts.forEach(script => script.init());
    
})();