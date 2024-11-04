document.addEventListener("DOMContentLoaded", function () {
  const target = document.querySelector(".acf2"); // Найдите ваш элемент

  const observerOptions = {
    root: null, // Используйте область просмотра
    rootMargin: "0px",
    threshold: 0.1, // Срабатывает, когда 10% элемента видимо
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Добавить класс, когда элемент виден
        target.classList.add("visible");
      } else {
        // Убрать класс, когда элемент не виден
        target.classList.remove("visible");
      }
    });
  }, observerOptions);

  observer.observe(target); // Начать отслеживание
});
