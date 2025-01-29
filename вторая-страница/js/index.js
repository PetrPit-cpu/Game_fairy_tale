const instruments = document.querySelectorAll('.instrument');
const targets = document.querySelectorAll('.target');

let completed = 0;

// Функция перетаскивания
instruments.forEach((instrument) => {
    instrument.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', instrument.getAttribute('data-answer'));
    });
});

// Проверка правильности выбора инструмента
targets.forEach((target) => {
    target.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    target.addEventListener("drop", (e) => {
        e.preventDefault();
        const answer = e.dataTransfer.getData("text");

        if (answer === target.getAttribute("data-target")) {
            const draggedElement = document.querySelector(
                `.instrument[data-answer="${answer}"]`
            );

            if (draggedElement) {
                // Удаляем инструмент из списка после правильного расположения
                const instrumentText = draggedElement.textContent.trim();

            // Обновляем текст цели (target), например: "лиса - пакет"
            target.textContent = `${target.getAttribute("data-target")} - ${instrumentText}`;
            target.classList.add("correct"); // Добавляем класс оформления
            draggedElement.style.visibility = "hidden"; // Делаем инструмент невидимым
            }


            // Проигрываем звук соответствия первой пары
            if (answer === "Теремок") {
                const audio = new Audio("/вторая-страница/audio/ксилофон.mp3"); // Путь к вашему аудио-файлу
                audio.play();
            }

            if (answer === "Стук") {
                const audio = new Audio("/вторая-страница/audio/ложки.mp3"); // Путь к вашему аудио-файлу
                audio.play();
            }

            if (answer === "Мышь") {
                const audio = new Audio("/вторая-страница/audio/колокол.mp3"); // Путь к вашему аудио-файлу
                audio.play();
            }

            if (answer === "Лягушка") {
                const audio = new Audio("/вторая-страница/audio/трещетка.mp3"); // Путь к вашему аудио-файлу
                audio.play();
            }

            if (answer === "Заяц") {
                const audio = new Audio("/вторая-страница/audio/бубен.mp3"); // Путь к вашему аудио-файлу
                audio.play();
            }

            // Проигрываем звук соответствия второй пары
            if (answer === "Лиса") {
                const audio = new Audio("/вторая-страница/audio/пакет.mp3"); // Путь к вашему аудио-файлу
                audio.play();
            }

            if (answer === "Волк") {
                const audio = new Audio("/вторая-страница/audio/маракасы.mp3"); // Путь к вашему аудио-файлу
                audio.play();
            }

            if (answer === "Медведь") {
                const audio = new Audio("/вторая-страница/audio/барабан.mp3"); // Путь к вашему аудио-файлу
                audio.play();
            }

            if (answer === "Песни") {
                const audio = new Audio("/вторая-страница/audio/свистулька.mp3"); // Путь к вашему аудио-файлу
                audio.play();
            }

            if (answer === "Пилить") {
                const audio = new Audio("/вторая-страница/audio/расческа.mp3"); // Путь к вашему аудио-файлу
                audio.play();
            }

            completed += 1;

            if (completed === targets.length) {
                alert("Вы справились с заданием!");
            }
        } else {
            alert("Попробуйте выбрать другой инструмент.");
        }
    });
});

function shuffleList(containerId) {
    const container = document.getElementById(containerId); // Получаем контейнер
    const elements = Array.from(container.children); // Создаём массив из дочерних элементов

    // Перемешивание элементов массива
    for (let i = elements.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [elements[i], elements[j]] = [elements[j], elements[i]];
    }

    // Очищаем контейнер и добавляем элементы в случайном порядке
    container.innerHTML = '';
    elements.forEach((element) => container.appendChild(element));
}

// Вызываем функцию для перемешивания, при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    shuffleList('instruments-list'); // Перемешивание первого списка
    shuffleList('instruments-list-random'); // Перемешивание второго списка
});