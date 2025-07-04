const sectionColors = ["#000000", "#FFFFFF"];
const navColors = ["#FFFFFF", "#000000"];

// Ambil tinggi navbar secara dinamis
const navbar = document.querySelector(".navbarColor");
const navbarHeight = navbar ? navbar.offsetHeight : 0;

// apply the color to each section
gsap.set(".section-color", { backgroundColor: gsap.utils.wrap(sectionColors) });

const sections = gsap.utils.toArray(".section-color");

sections.forEach((section, index) => {
  ScrollTrigger.create({
    trigger: section,
    start: `top+=${navbarHeight} top`,
    end: `bottom+=${navbarHeight} top`,
    markers: false,
    animation: gsap.to(".navbarColor", {
      duration: 1,
      color: navColors[index],
      immediateRender: false,
    }),
    toggleActions: "restart none none reverse",
  });
});
