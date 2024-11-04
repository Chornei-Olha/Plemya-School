document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".card",
    { y: 200, opacity: 0, scale: 0.8 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".cards-container",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        toggleActions: "restart pause reverse pause",
      },
    }
  );
});
