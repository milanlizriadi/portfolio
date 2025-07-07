// section color change on scroll - leave it blank to use default color
const sectionColors = ["", "#FFFFFF"];
const navColors = ["#FFFFFF", "#000000"];

// get navbar height
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
