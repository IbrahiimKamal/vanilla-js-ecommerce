import { getElement } from '../utiles/getElement';

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 400) {
    getElement('.site-header').classList.add('site-header--sticky');
  } else {
    getElement('.site-header').classList.remove('site-header--sticky');
  }
});
