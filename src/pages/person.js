import '@/pages/person.css';
import { App } from '@/utils/app';
import Swiper from 'swiper';

App.init().then(() => {
    const swiper = new Swiper('.swiper', {
        direction: 'vertical',
    });
    swiper.enable();
});
