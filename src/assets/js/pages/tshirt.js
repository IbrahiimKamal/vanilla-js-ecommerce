// ##### import external libraries
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

// ##### import styles from scss
import '../../scss/styles.scss';

// ##### Global Imports #####
import '../shared/toggleNavbar';
import '../shared/stickyNavbar';
import '../cart/toggleCart';
import '../cart/setupCart';

// specific imports
import fetchData from '../utiles/fetchData';
import { setupStore, store } from '../utiles/store';
import displayData from '../utiles/displayData';
import { getElement } from '../utiles/getElement';

const init = async () => {
  const products = await fetchData();

  if (products) {
    setupStore(products);

    const tshirtProducts = store.filter((product) => product.title === 'shirt');
    displayData(tshirtProducts, getElement('#tshirt-store'));
  }
};

// init AOS (animation) library
AOS.init();

window.addEventListener('DOMContentLoaded', init);
