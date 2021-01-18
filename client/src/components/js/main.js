export const alertScroll = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const toggleNav = () => {
  const toggle = document.getElementById('toggle');
  const navMenu = document.querySelector('.site-navbar');

  if (toggle) {
    navMenu.classList.toggle('show-nav');
  }
};

// const navMenu = document.querySelector('.site-navbar');
// // Hide Modal on outside Click
// if(navMenu.classList == '.show-modal') {
//   window.addEventListener('click', (e) =>
//     e.target == navMenu ? navMenu.classList.remove('show-modal') : false
//   );

// }

export function currencyFormat(num) {
  return '₦' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
