function calculateSum(column) {
    // Вибираємо всі чекбокси для відповідної колонки
    const checkboxes = document.querySelectorAll(`.column:nth-child(${getColumnIndex(column)}) .checkboxes input[type=checkbox]`);
    
    // Ініціалізуємо суму
    let total = 0;

    // Підсумовуємо значення обраних чекбоксів
    checkboxes.forEach(cb => {
        if (cb.checked) {
            total += parseFloat(cb.value); // Приводимо значення до числа
        }
    });

    // Виведення суми в поле відповідної колонки
    document.getElementById(`${column}Display`).value = total.toFixed(2) + '%';
}

function clearDisplay() {
    // Скидаємо всі поля
    document.querySelectorAll('.display').forEach(display => display.value = '');

    // Знімаємо всі чекбокси
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach(cb => cb.checked = false);
}

// Допоміжна функція для отримання індексу колонки
function getColumnIndex(column) {
    switch (column) {
        case 'ukr': return 1;
        case 'treasury': return 2;
        case 'crypto': return 3;
        default: return 1;
    }
}
