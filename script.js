// Smooth Scroll for Navigation Links
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a, .button-link');
    const body = document.body;

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            // Check if the link is internal (starts with '#')
            if (targetId.startsWith('#')) {
                e.preventDefault(); // Prevent default link behavior
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth' // Smooth scrolling
                    });
                }
            } else {
                e.preventDefault();
                body.style.transition = 'opacity 0.5s ease';
                body.style.opacity = 0;

                setTimeout(() => {
                    window.location.href = targetId;
                }, 500);
            }
        });
    });

    // Fade-in effect on page load
    window.addEventListener('load', () => {
        body.style.transition = 'opacity 0.5s ease';
        body.style.opacity = 1;
    });
});

// Add Transition Effect on Hover for Buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttonLinks = document.querySelectorAll('.beliefs-button', '.download-resume-button');
    
    buttonLinks.forEach(button => {
        button.addEventListener('mouseover', function () {
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'; // Darker background on hover
        });

        button.addEventListener('mouseout', function () {
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Original background color
        });
    });
});

// Add Transition Effect on Hover for Social Links
document.addEventListener('DOMContentLoaded', () => {
    const socialLinks = document.querySelectorAll('.social-links img');
    
    socialLinks.forEach(icon => {
        icon.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.2)'; // Slightly enlarge icon on hover
        });

        icon.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)'; // Reset size
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(container => {
        const img = container.querySelector('img');
        const overlay = container.querySelector('.image-overlay');
        
        // Set the width of the overlay to match the image's natural width
        img.onload = () => {
            overlay.style.width = `${img.clientWidth}px`;
        };
    });
});


// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const scrollToTopButton = document.getElementById("scrollToTopButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

// Scroll to the top of the document when the user clicks on the button
document.getElementById('scrollToTopButton').addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });
});

