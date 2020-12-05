// ##### import external libraries
import AOS from 'aos';
import 'aos/dist/aos.css';
import Glide from '@glidejs/glide';
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
import { getElement } from '../utiles/getElement';
import fetchData from '../utiles/fetchData';
import { setupStore, store, findProduct } from '../utiles/store';
import { formatPrice } from '../utiles/formatePrice';
import { addToCart } from '../cart/setupCart';

// cart product
let productID;

window.addEventListener('DOMContentLoaded', async function () {
  let singleProductID = window.location.search;
  singleProductID = parseInt(singleProductID.slice(4));
  productID = singleProductID;

  try {
    const products = await fetchData();
    setupStore(products);
    const singleProduct = findProduct(singleProductID);
    console.log(singleProduct);

    document.title = `${singleProduct.name.toUpperCase()}`;

    getElement(
      '.single-product-info__title'
    ).textContent = `${singleProduct.name}`;

    getElement('.single-product-info__price').textContent = `${formatPrice(
      singleProduct.price
    )}`;

    getElement(
      '.single-product-info__price-delete'
    ).textContent = `${formatPrice(singleProduct.price2)}`;

    getElement(
      '.single-product-info__desc'
    ).textContent = `${singleProduct.description}`;

    getElement('#image-slider1').src = `${singleProduct.image1}`;
    getElement('#image-slider2').src = `${singleProduct.image2}`;
    getElement('#image-slider3').src = `${singleProduct.image3}`;

    getElement('#thumbnail1').src = `${singleProduct.image1}`;
    getElement('#thumbnail2').src = `${singleProduct.image2}`;
    getElement('#thumbnail3').src = `${singleProduct.image3}`;
  } catch (err) {
    console.log(err);
  }
});

getElement('.site-button--cart').addEventListener('click', function () {
  addToCart(productID);
});

// GlideJS Slider
new Glide(getElement('.glide'), {
  type: 'carousel',
  startAt: 0,
  perview: 1,
  animationDuration: 300,
  animationTimingFunc: 'linear',
}).mount();

// init AOS (animation) library
AOS.init();
