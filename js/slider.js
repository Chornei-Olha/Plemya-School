let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll(".order1");
  const totalSlides = slides.length;

  // Обновляем текущий слайд
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  // Изменяем положение слайдов
  const offset = -currentSlide * 114; // Применяем сдвиг
  document.querySelector(".order_flex").style.transform =
    `translateX(${offset}%)`;
}
