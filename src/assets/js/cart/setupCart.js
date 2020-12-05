import { getElement } from '../utiles/getElement';
import { formatPrice } from '../utiles/formatePrice';
import { getStorageItem, setStorageItem } from '../utiles/localStorage';
import { openCart } from '../cart/toggleCart';
import fetchData from '../utiles/fetchData';
import { findProduct } from '../utiles/store';
import addToCartDOM from './addToCartDOM';

const cartItemCountDOM = getElement('.site-header__count');
const cartItemsDOM = getElement('.cart__product');
const cartTotalDOM = getElement('.cart__total');

let cart = getStorageItem('cart');

export const addToCart = (id) => {
  let item = cart.find((cartItem) => cartItem.id === id);

  if (!item) {
    let product = findProduct(id);
    // add item to the cart
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    // add item to the cartDOM
    addToCartDOM(product);
  } else {
    // update values
  }

  // add one  to the item count
  displayCartItemCount();
  //display cart total
  displayCartTotal();
  // set cart in local storage
  setStorageItem('cart', cart);

  openCart();
};

function displayCartItemCount() {
  const amount = cart.reduce((total, cartItem) => {
    return (total += cartItem.amount);
  }, 0);

  cartItemCountDOM.textContent = amount;
}

function displayCartTotal() {
  const total = cart.reduce((total, cartItem) => {
    return (total += cartItem.price * cartItem.amount);
  }, 0);

  cartTotalDOM.textContent = `Total: ${formatPrice(total)}`;
}

function displayCartItemsDOM() {
  cart.forEach((cartItem) => {
    addToCartDOM(cartItem);
  });
}

const init = () => {
  // display amount of cart items
  displayCartItemCount();
  // display total
  displayCartTotal();
  // add all cart items to the DOM
  displayCartItemsDOM();
};

init();
