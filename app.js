const btn = document.querySelector('.btn');
const square = document.querySelector('.square');

// Добавляем обработчик события клика на кнопке
btn.addEventListener('click', function() {
    // Переключаем видимость элемента square
    if (square.style.display === 'none' || square.style.display === '') {
        square.style.display = 'block';
    } else {
        square.style.display = 'none';
    }
});