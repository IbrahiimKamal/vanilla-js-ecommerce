import { getElement } from '../utiles/getElement';

const cart = getElement('.cart');
const cartContent = getElement('.cart__content');
const shoppingCartIcon = getElement('.fa-shopping-cart');
const closeCartIcon = getElement('.cart__close-icon');

const toggleCart = () => {
  cart.classList.toggle('cart--show');
  cartContent.classList.toggle('cart__content--show');
};

const closeCart = () => {
  cart.classList.remove('cart--show');
  cartContent.classList.remove('cart__content--show');
};

export const openCart = () => {
  cart.classList.add('cart--show');
  cartContent.classList.add('cart__content--show');
};

shoppingCartIcon.addEventListener('click', toggleCart);
closeCartIcon.addEventListener('click', closeCart);
