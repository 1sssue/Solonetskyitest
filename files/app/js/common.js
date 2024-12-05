let scrollInterval;

function scrollSlider(sliderId, direction) {
    const slider = document.getElementById(sliderId);

    // Визначаємо напрямок гортання
    const scrollAmount = direction === "left" ? -10 : 10;

    // Прокручуємо слайдер кожні 10 мс
    scrollInterval = setInterval(() => {
        slider.scrollLeft += scrollAmount;
    }, 10);
}

function stopScrolling() {
    // Зупиняємо прокручування
    clearInterval(scrollInterval);
}

// Додаємо обробники подій для кнопок
document.querySelectorAll('.arrow').forEach(button => {
    const sliderId = button.getAttribute('data-slider');
    const action = button.getAttribute('data-action');

    button.addEventListener('mousedown', () => {
        if (action === 'scrollLeft') {
            scrollSlider(sliderId, "left");
        } else if (action === 'scrollRight') {
            scrollSlider(sliderId, "right");
        }
    });

    button.addEventListener('mouseup', stopScrolling);
    button.addEventListener('mouseleave', stopScrolling); // Зупинка, якщо мишу забрали з кнопки
});
