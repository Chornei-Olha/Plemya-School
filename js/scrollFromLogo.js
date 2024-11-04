document.querySelectorAll(".logo-hero-desktop").forEach((image) => {
  image.addEventListener("click", () => {
    document.querySelector("#orderSection").scrollIntoView({
      behavior: "smooth",
    });
  });
});
