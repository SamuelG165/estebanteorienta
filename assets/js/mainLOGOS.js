const logos = document.querySelector('.main ul');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(() => {
        logos.classList.add('reveal');
    }, 1000); // Espera 1200ms para que se "dibuje" el estado inicial
});