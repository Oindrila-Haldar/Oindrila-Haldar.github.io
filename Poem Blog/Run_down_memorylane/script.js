document.addEventListener('DOMContentLoaded', () => {
    const poemContainer = document.querySelector('.poem-container');
    const dots = document.querySelectorAll('.dot');

    poemContainer.addEventListener('scroll', () => {
        const scrollPosition = poemContainer.scrollLeft;
        const width = poemContainer.clientWidth;
        const currentIndex = Math.round(scrollPosition / width);
        updateDots(currentIndex);
    });

    function updateDots(index) {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    // Initial update
    updateDots(0);
});
