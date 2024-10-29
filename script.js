// Code to highlight current section link as you scroll
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active");
    }
  });
});
// Create the custom cursor element
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

// Update the cursor's position on mouse movement
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Your message has been sent. Thank you!');
  this.reset();
});
