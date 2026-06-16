const nandi = document.getElementById("nandi");
const garuda = document.getElementById("garuda");

window.addEventListener("scroll", () => {
  const moveY = window.scrollY / 10;
    garuda.style.transform = `translateY(${moveY}px)`;
  nandi.style.transform = `translateY(${moveY}px)`;
});
