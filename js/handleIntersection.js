// Функция для обработки появления и исчезновения элемента
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible"); // Добавляем класс при попадании в зону видимости
    } else {
      entry.target.classList.remove("visible"); // Убираем класс, когда элемент уходит из зоны видимости
    }
  });
}

// Создаем наблюдатель
const observer = new IntersectionObserver(handleIntersection);

// Наблюдаем за каждым элементом с классом 'fade-in'
document.querySelectorAll(".fade-in").forEach((element) => {
  observer.observe(element);
});
