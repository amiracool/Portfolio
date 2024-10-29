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

// Get the journey container
const journeyContainer = document.getElementById('journey-container');

// Inject the road, car, and milestones
journeyContainer.innerHTML = `
    <div class="road-container">
        <div class="road">
            <img src="Images/car.png" alt="Pink Car" class="car">
            <div class="milestone" style="left: 10%;">University of Birmingham</div>
            <div class="milestone" style="left: 55%;">FamilyPod</div>
            <div class="milestone" style="left: 90%;">OhRahRah</div>
        </div>
    </div>
`;

// Set up arrow key movement
const car = document.querySelector('.car');
let carPosition = 10;

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        carPosition += 5;
        if (carPosition > 90) carPosition = 90;
        car.style.left = `${carPosition}%`;
    }
    if (event.key === 'ArrowLeft') {
        carPosition -= 5;
        if (carPosition < 0) carPosition = 0;
        car.style.left = `${carPosition}%`;
    }
});
