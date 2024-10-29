function initJourney() {
    const car = document.getElementById("car");
    let position = 0;

    // Movement controls
    function moveCarLeft() {
        position -= 10;
        if (position < 0) position = 0;
        car.style.left = `${position}px`;
    }

    function moveCarRight() {
        position += 10;
        if (position > document.querySelector(".road").offsetWidth - car.offsetWidth) {
            position = document.querySelector(".road").offsetWidth - car.offsetWidth;
        }
        car.style.left = `${position}px`;
    }

    // Keyboard events for controlling the car
    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") moveCarLeft();
        else if (event.key === "ArrowRight") moveCarRight();
    });
}

// Load journey.html and initialize controls
fetch("journey.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("journey-container").innerHTML = data;
        initJourney(); // Initialize controls after journey content is loaded
    });
