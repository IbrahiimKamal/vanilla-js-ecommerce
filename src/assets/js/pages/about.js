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

// init AOS (animation) library
AOS.init();
