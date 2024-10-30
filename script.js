// Highlight the current section link as you scroll
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


// Contact form submission alert
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Your message has been sent. Thank you!');
  this.reset();
});

// Inject journey content into the journey container
const journeyContainer = document.getElementById('journey-container');
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

// Set up arrow key movement for the car
const car = document.querySelector('.car');
let carPosition = 10;

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    carPosition = Math.min(carPosition + 5, 90); // Restrict to 90% max
    car.style.left = `${carPosition}%`;
  }
  if (event.key === 'ArrowLeft') {
    carPosition = Math.max(carPosition - 5, 0); // Restrict to 0% min
    car.style.left = `${carPosition}%`;
  }
});

// Basic swipe handling for touch screens (optional setup)
function handleSwipe(direction) {
  console.log("Swiped:", direction);
}

// Adjust milestone position for mobile screens
function adjustMilestonePosition() {
  const milestones = document.querySelectorAll(".milestone");
  if (window.innerWidth <= 480) {  // Check if mobile screen
    milestones.forEach(milestone => {
      milestone.style.bottom = "200%"; // Move up for mobile
    });
  } else {
    milestones.forEach(milestone => {
      milestone.style.bottom = ""; // Reset for larger screens
    });
  }
}

// Run milestone adjustment on load and resize
window.addEventListener("load", adjustMilestonePosition);
window.addEventListener("resize", adjustMilestonePosition);
