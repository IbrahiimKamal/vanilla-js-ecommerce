import { formatPrice } from './formatePrice';
import { addToCart } from '../cart/setupCart';

const displayData = (products, element) => {
  // display products
  element.innerHTML = products
    .map((product) => {
      const {
        id,
        title,
        recommend,
        name,
        price,
        price2,
        description,
        largeImage,
        image1,
        image2,
        image3,
      } = product;

      return `
          <!-- single product -->
          <div
            class="col-6 col-md-4 col-lg-3 mx-auto"
            data-aos="fade-up"
            data-aos-delay="200">
            <article class="products__product">
              <div class="products__product-image-container">
                <img
                  src="${largeImage}"
                  alt="${title}"
                  class="products__product-image"
                />
                <div class="products__product-top-icons">
                  <span class="products__product-top-icon">
                    <i class="far fa-heart"></i>
                  </span>
                  <a href="single-product.html?id=${id}" class="products__product-top-icon">
                    <i class="fas fa-eye"></i>
                  </a>
                </div>
                <span class="products__product-cart-icon" data-id="${id}">
                  <i class="fas fa-shopping-bag"></i>
                </span>
              </div>
              <div class="products__product-footer">
                <p class="products__product-name">${name}</p>
                <p class="products__product-price">${formatPrice(
                  price
                )} - <span class="products__product-price--deleted">${formatPrice(
        price2
      )}</span></p>
              </div>
            </article>
          </div>
          <!-- end single product -->
    `;
    })
    .join('');

  element.addEventListener('click', function (e) {
    const parent = e.target.parentElement;

    if (parent.classList.contains('products__product-cart-icon')) {
      addToCart(parseInt(parent.dataset.id));
    }
  });
};

export default displayData;
