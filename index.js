import Carousel from './src/Carousel.vue';
import Slide from './src/Slide.vue';

const install = (app) => {
    app.component('carousel', Carousel);
    app.component('slide', Slide);
};

export default {
    install
};

export {Carousel, Slide};
