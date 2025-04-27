document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.querySelector('.navBar');
    const triggerSection = document.querySelector('.carousel');
    const checkbox = document.getElementById('hamburguer-menu');
    const options = document.querySelector('.options');

    if (searchBar && triggerSection) {

        window.addEventListener('scroll', function() {
            const barHeight = searchBar.getBoundingClientRect().bottom;
            const carouselHeight = triggerSection.getBoundingClientRect().top;

            if (barHeight > carouselHeight) {
                searchBar.classList.add('scrolled');
                options.style.backgroundColor = '#122620';
            }else{
                searchBar.classList.remove('scrolled');
                options.style.backgroundColor = 'rgba(0, 0, 0, 0.253)';
            }

        });
    }

    
});