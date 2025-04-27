document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".slider-container");

  sliders.forEach(slider => {
    const track = slider.querySelector(".slider-track");
    const btnNext = slider.querySelector(".slider-btn.next");
    const btnPrev = slider.querySelector(".slider-btn.prev");
    const items = slider.querySelectorAll(".slider-item");

    let index = 0;
    const itemsToShow = 4;
    const totalItems = items.length;

    function updateSlider() {
      const maxIndex = totalItems - itemsToShow;
      if (index < 0) index = 0;
      if (index > maxIndex) index = maxIndex;

      const percent = index * -25; // 25% por item
      track.style.transform = `translateX(${percent}%)`;
    }

    btnNext.addEventListener("click", () => {
      index++;
      updateSlider();
    });

    btnPrev.addEventListener("click", () => {
      index--;
      updateSlider();
    });

    updateSlider(); // Inicializa cada slider
  });
});