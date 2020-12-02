import { getElement } from '../utiles/getElement';

// select elementDOM
const toggleNavbarIcon = getElement('.site-header__toggle');
const siteHeaderOverlay = getElement('.site-header__list-overlay');
const siteHeaderListContainer = getElement('.site-header__list-container');

// toggle navbar function
const toggleNavbar = () => {
  siteHeaderOverlay.classList.toggle('site-header__list-overlay--show');
  siteHeaderListContainer.classList.toggle('site-header__list-container--show');
};

// close navbar function
const closeNavbar = (e) => {
  if (e.target === siteHeaderOverlay && e.target !== siteHeaderListContainer) {
    siteHeaderOverlay.classList.remove('site-header__list-overlay--show');
    siteHeaderListContainer.classList.remove(
      'site-header__list-container--show'
    );
  }
};

toggleNavbarIcon.addEventListener('click', toggleNavbar);

siteHeaderOverlay.addEventListener('click', (e) => closeNavbar(e));
