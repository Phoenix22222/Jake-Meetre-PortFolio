document.addEventListener('DOMContentLoaded', (event) => {
    VANTA.WAVES({
        el: ".vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x171818,
        shininess: 43.00,
        waveHeight: 11.00,
        waveSpeed: 0.75,
        zoom: 1.04
    });
});
document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener('scroll', () => {
        const timelineItems = document.querySelectorAll('.timeline-item');
        const windowHeight = window.innerHeight;
        timelineItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            if(itemPosition < windowHeight - 200) {
                item.classList.add('slide-in');
            }
        });
    });
});
