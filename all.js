// 1. Smooth Scrolling to Profile Section
function scrollToProfile() {
    document.getElementById("profile").scrollIntoView({ behavior: 'smooth' });
}

// 2. Star Rating Interaction
document.querySelectorAll('.stars').forEach(starsContainer => {
    const stars = starsContainer.querySelectorAll('.star');
    
    stars.forEach((star, idx) => {
        // Highlight stars on hover
        star.addEventListener('mouseover', () => {
            stars.forEach((s, i) => s.classList.toggle('hover', i <= idx));
        });
        
        // Remove hover effect when mouse leaves
        star.addEventListener('mouseout', () => {
            stars.forEach(s => s.classList.remove('hover'));
        });
        
        // Select stars up to the clicked one
        star.addEventListener('click', () => {
            stars.forEach((s, i) => s.classList.toggle('selected', i <= idx));
        });
    });
});

// 3. "Follow Cursor" Button Interaction
const arrow = document.getElementById('scrollButton');

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const arrowRect = arrow.getBoundingClientRect();
    
    // Calculate distance and move towards cursor
    const offsetX = mouseX - (arrowRect.left + arrowRect.width / 2);
    const offsetY = mouseY - (arrowRect.top + arrowRect.height / 2);
    
    arrow.style.transform = `translate(${offsetX * 0.1}px, ${offsetY * 0.1}px)`;
});

// Reset position on mouse leave
arrow.addEventListener('mouseleave', () => {
    arrow.style.transform = 'translate(0, 0)';
});

// 4. Pizza Skills Chart Visibility on Scroll
document.addEventListener("DOMContentLoaded", function() {
    const slices = document.querySelectorAll('.slice');
    const totalSlices = slices.length;
    const pizzaContainer = document.querySelector('.pizza-container');
    
    function updateSlicesVisibility(scrollRatio) {
        const visibleSlicesCount = Math.floor(scrollRatio * totalSlices * 0.3);
        
        slices.forEach((slice, index) => {
            if (index < visibleSlicesCount) {
                slice.classList.add("visible");
            } else {
                slice.classList.remove("visible");
            }
        });
    }

    window.addEventListener("scroll", function() {
        const pizzaRect = pizzaContainer.getBoundingClientRect();
        const scrollStart = window.innerHeight / 1;
        const scrollEnd = pizzaRect.height + scrollStart - 30;

        if (pizzaRect.top <= scrollStart && pizzaRect.bottom >= 0) {
            const scrollRatio = (scrollStart - pizzaRect.top) / (scrollEnd - scrollStart);
            updateSlicesVisibility(scrollRatio);
        } else if (pizzaRect.top > scrollStart) {
            slices.forEach(slice => slice.classList.remove("visible"));
        }
    });
});

// 5. Tooltip Visibility on Page Load
document.addEventListener("DOMContentLoaded", function() {
    const slices = document.querySelectorAll('.slice');

    slices.forEach((slice, index) => {
        slice.style.transitionDelay = `${index * 0.2}s`; // Staggered delay
        setTimeout(() => {
            slice.classList.add('visible'); // Gradually show each slice
        }, index * 200);
    });
});

// 6. Image Slider
let currentIndex = 0;

function updateSlide() {
    const slides = document.getElementById("slides");
    const slideWidth = slides.children[0].clientWidth;
    slides.style.transform = 'translateX(' + (-currentIndex * slideWidth) + 'px)';
}

function nextSlide() {
    const slides = document.getElementById("slides");
    const totalSlides = slides.children.length;
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
}

function prevSlide() {
    const slides = document.getElementById("slides");
    const totalSlides = slides.children.length;
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
}

// Initialize slider on page load
document.addEventListener("DOMContentLoaded", () => {
    updateSlide();
});
