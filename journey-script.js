document.addEventListener("DOMContentLoaded", () => {
    // Load journey.html content into the main container
    fetch("journey.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("journey-container").innerHTML = data;

            // Initialize car movement controls after content is loaded
            const car = document.querySelector(".car");
            const road = document.querySelector(".road");

            if (!car || !road) {
                console.error("Car or road elements not found. Ensure journey.html structure is correct.");
                return;
            }

            let position = 0;

            function moveCarLeft() {
                position = Math.max(0, position - 10);
                car.style.left = `${position}px`;
            }

            function moveCarRight() {
                const maxPosition = road.offsetWidth - car.offsetWidth;
                position = Math.min(maxPosition, position + 10);
                car.style.left = `${position}px`;
            }

            // Add keydown event listener for car movement
            document.addEventListener("keydown", (event) => {
                if (event.key === "ArrowLeft") moveCarLeft();
                if (event.key === "ArrowRight") moveCarRight();
            });
        })
        .catch(error => console.error("Error loading journey.html:", error));
});

// JavaScript for moving the car with swipe gestures
const car = document.querySelector('.car');
let carPosition = 10; // Starting position as a percentage
const milestones = [10, 55, 90]; // Milestone positions in percentages

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX) {
        // Swiped left
        moveCarLeft();
    } else if (touchEndX > touchStartX) {
        // Swiped right
        moveCarRight();
    }
}

function moveCarLeft() {
    // Find the previous milestone position
    const prevMilestone = milestones.filter((pos) => pos < carPosition).pop();
    if (prevMilestone !== undefined) {
        carPosition = prevMilestone;
        car.style.left = `${carPosition}%`;
    }
}

function moveCarRight() {
    // Find the next milestone position
    const nextMilestone = milestones.find((pos) => pos > carPosition);
    if (nextMilestone !== undefined) {
        carPosition = nextMilestone;
        car.style.left = `${carPosition}%`;
    }
}
