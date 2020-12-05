// ##### import external libraries
import AOS from 'aos';
import 'aos/dist/aos.css';
import Glide from '@glidejs/glide';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

// ##### import styles from scss
import '../scss/styles.scss';

// ##### Global Imports #####
import './shared/toggleNavbar';
import './shared/stickyNavbar';
import './cart/toggleCart';
import './cart/setupCart';

// specific imports
import fetchData from './utiles/fetchData';
import { setupStore, store } from './utiles/store';
import displayData from './utiles/displayData';
import { getElement } from './utiles/getElement';

const init = async () => {
  const products = await fetchData();

  if (products) {
    setupStore(products);

    const recommendProducts = store.filter(
      (product) => product.recommend === true
    );
    displayData(recommendProducts, getElement('#recommen-products'));
  }
};

// GlideJS Slider
new Glide(getElement('.featured-category__slider'), {
  perView: 5,
  draggable: true,
  type: 'carousel',
  autoplay: '2000',
  // that width of the window is <=600px.
  breakpoints: {
    576: {
      perView: 2,
    },
    // 768: {
    //   perView: 2,
    // },
    992: {
      perView: 3,
    },

    1024: {
      perView: 4,
    },
  },
}).mount();

// init AOS (animation) library
AOS.init();

window.addEventListener('DOMContentLoaded', init);
