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
