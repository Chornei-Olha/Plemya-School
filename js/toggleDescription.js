document.querySelectorAll(".module").forEach((module) => {
  module.addEventListener("click", function () {
    const dropdownDescription = this.querySelector(".dropdown-description");

    // Проверяем, открыто ли описание
    const isVisible = dropdownDescription.style.display === "block";

    // Скрываем все остальные описания
    document.querySelectorAll(".dropdown-description").forEach((desc) => {
      desc.style.display = "none"; // Скрываем другие описания
    });

    // Показываем/скрываем текущее описание
    dropdownDescription.style.display = isVisible ? "none" : "block";
  });
});

// Закрытие выпадающего меню при клике вне него
document.addEventListener("click", function (event) {
  if (!event.target.closest(".module")) {
    document.querySelectorAll(".dropdown-description").forEach((desc) => {
      desc.style.display = "none"; // Скрываем меню при клике вне
    });
  }
});
