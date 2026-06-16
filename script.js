const nandi=document.getElementById("nandi")
const garuda=document.getElementById("garuda")
window.addEventListener("mousemove", (e) => {
    const moveY = window.scrollY / 10;
    const moveX = (e.clientX - window.innerWidth / 2) / 50;
    const moveY = (e.clientY - window.innerHeight / 2) / 50;
    nandi.style.transform = `translate(${moveX}px, ${moveY}px)`;
    garuda.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
