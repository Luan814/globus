
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const scrollY = window.scrollY;

  if (scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


gsap.registerPlugin(ScrollTrigger);

  const panels = gsap.utils.toArray(".main-swiper .panel");

  panels.forEach((panel, i) => {
    if (i !== panels.length - 1) {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: true,
      });
    }
  });

