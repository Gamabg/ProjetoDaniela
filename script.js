
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.header-menu ul');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
        hamburger.textContent = '✖';  // muda pra X
    } else {
        hamburger.textContent = '☰';  // volta pro hambúrguer
    }
});
