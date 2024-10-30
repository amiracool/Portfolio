document.addEventListener("DOMContentLoaded", () => {
    fetch("journey.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("journey-container").innerHTML = data;

            const car = document.querySelector(".car");
            const road = document.querySelector(".road");

            if (!car || !road) {
                console.error("Car or road elements not found. Ensure journey.html structure is correct.");
                return;
            }

            // Align car's initial position with the left edge of the road
            const roadRect = road.getBoundingClientRect();
            let carPosition = 0;
            car.style.position = 'absolute';
            car.style.left = `${roadRect.left}px`;

            // Set movement boundaries based on road dimensions
            const maxPosition = roadRect.width - car.offsetWidth;

            function moveCarLeft() {
                carPosition = Math.max(0, carPosition - 20); // Ensure car stays within left boundary
                car.style.left = `${roadRect.left + carPosition}px`;
            }

            function moveCarRight() {
                carPosition = Math.min(maxPosition, carPosition + 20); // Ensure car stays within right boundary
                car.style.left = `${roadRect.left + carPosition}px`;
            }

            // Add keydown event listener for car movement
            document.addEventListener("keydown", (event) => {
                if (event.key === "ArrowLeft") moveCarLeft();
                if (event.key === "ArrowRight") moveCarRight();
            });

            // Swipe events for touchscreen devices
            let touchStartX = 0;
            let touchEndX = 0;

            document.addEventListener("touchstart", (e) => {
                touchStartX = e.changedTouches[0].screenX;
            });

            document.addEventListener("touchend", (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            });

            function handleSwipe() {
                if (touchEndX < touchStartX) {
                    moveCarLeft(); // Swiped left
                } else if (touchEndX > touchStartX) {
                    moveCarRight(); // Swiped right
                }
            }

            // Adjust milestone positions for mobile
            if (window.innerWidth <= 480) {
                document.querySelectorAll(".milestone").forEach(milestone => {
                    milestone.style.bottom = "200%";
                });
            }
        })
        .catch(error => console.error("Error loading journey.html:", error));
});

