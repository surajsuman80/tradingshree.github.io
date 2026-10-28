const navItems = document.querySelectorAll('.nav-item');
const rangeButtons = document.querySelectorAll('.range-btn');

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navItems.forEach((navItem) => navItem.classList.remove('active'));
    item.classList.add('active');
  });
});

rangeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    rangeButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
  });
});
