import { getElement } from '../utiles/getElement';
import { formatPrice } from '../utiles/formatePrice';
const cartItemsDOM = getElement('.cart__items');

const addToCartDOM = ({ id, name, price, amount, largeImage }) => {
  const div = document.createElement('div');
  div.classList.add('cart__product');
  div.setAttribute('data-id', id);

  div.innerHTML = `
    <div class="cart__product-image-container">
              <img
                src="${largeImage}"
                alt="${name}"
                class="cart__product-image"
              />
            </div>
            <div class="cart__product-info">
              <h4 class="cart__product-name">${name}</h4>
              <p class="cart__product-price">${formatPrice(price)}</p>
              <button class="cart__product-remove" data-id="${id}">remove</button>
            </div>
            <div class="cart__product-count-btns">
              <button
                class="cart__product-increase-icon cart__icons-amount"
                data-id="${id}"
              >
                <i class="fas fa-chevron-up"></i>
              </button>
             <p class="cart__product-amount" data-id="${id}">${amount}</p>
              <button
                class="cart__product-decrease-icon cart__icons-amount"
                data-id="${id}"
              >
                <i class="fas fa-chevron-down"></i>
              </button>
            </div>
  `;

  cartItemsDOM.appendChild(div);
};

export default addToCartDOM;
