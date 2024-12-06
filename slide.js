document.addEventListener('DOMContentLoaded', function() {
    const openNavBtn = document.querySelector('.open-nav-btn');
    const sideNav = document.querySelector('.side-nav');

    openNavBtn.addEventListener('click', function() {
        sideNav.classList.toggle('open'); // Переключаем класс "open" для боковой панели
    });
});
