const track = document.querySelector('.slider-track');
const btnNext = document.querySelector('.slider-btn.next');
const btnPrev = document.querySelector('.slider-btn.prev');

let index = 0;
const itemsToShow = 4;
const totalItems = document.querySelectorAll('.slider-item').length;

btnNext.addEventListener('click', () => {
  if (index < totalItems - itemsToShow) {
    index++;
    updateSlider();
  }
});

btnPrev.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateSlider();
  }
});

function updateSlider() {
  const percent = index * -25; // 25% por imagen
  track.style.transform = `translateX(${percent}%)`;
}