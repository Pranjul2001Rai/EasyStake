const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselInner = document.querySelector('.carousel-inner');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let autoSlideInterval;

// Function to update the carousel display
function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
        dot.style.backgroundColor = index === currentIndex ? '#717171' : '#bbb';
    });
}

// Function to go to the next slide
function goToNextSlide() {
    currentIndex = (currentIndex + 1) % carouselInner.children.length;
    updateCarousel();
}

// Function to start the auto-slide interval
function startAutoSlide() {
    autoSlideInterval = setInterval(goToNextSlide, 3000); // Change slide every 3 seconds
}

// Function to stop the auto-slide interval
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Event listeners for manual controls
prevButton.addEventListener('click', () => {
    stopAutoSlide(); // Stop auto-slide when user interacts
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
    startAutoSlide(); // Restart auto-slide
});

nextButton.addEventListener('click', () => {
    stopAutoSlide(); // Stop auto-slide when user interacts
    if (currentIndex < carouselInner.children.length - 1) {
        currentIndex++;
        updateCarousel();
    }
    startAutoSlide(); // Restart auto-slide
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        stopAutoSlide(); // Stop auto-slide when user interacts
        currentIndex = index;
        updateCarousel();
        startAutoSlide(); // Restart auto-slide
    });
});

// Start the automatic slide when the page loads
startAutoSlide();

document.addEventListener("DOMContentLoaded", function() {
    // Select the REGISTER button
    var registerButton = document.querySelector(".register");

    // Add click event listener to the REGISTER button
    registerButton.addEventListener("click", function() {
        // Redirect to the specified URL
        window.location.href = "https://stake.games/?c=b8UdTgzx";
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('warningModal');
    const closeButton = document.querySelector('.close');

    // Open modal when page is loaded
    modal.style.display = 'block';

    // Close modal when close button is clicked
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close modal when user clicks outside of it
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

