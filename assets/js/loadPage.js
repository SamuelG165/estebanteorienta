window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    preloader.style.pointerEvents = 'none';

    // Espera a que la transición (si deseas una) termine para quitarlo del DOM
    setTimeout(() => {
        preloader.remove();
    }, 500);
});