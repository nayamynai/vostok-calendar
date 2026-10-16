// season-animation.js — Генератор падающих частиц для сезонов

document.addEventListener("DOMContentLoaded", () => {
    // Создаем контейнер для частиц
    const container = document.createElement("div");
    container.className = "particles-container";
    document.body.prepend(container);

    // Определяем тип сезона по классу body
    let particleSymbol = "❄️"; // по умолчанию зима (снежинки)
    let particleCount = 25;

    if (document.body.classList.contains("spring")) {
        particleSymbol = "🌸"; // лепестки сакуры/весны
        particleCount = 20;
    } else if (document.body.classList.contains("summer")) {
        particleSymbol = "🍀"; // летние искры / пыльца
        particleCount = 18;
    } else if (document.body.classList.contains("autumn")) {
        particleSymbol = "🍂"; // осенние листья
        particleCount = 22;
    } else if (document.body.classList.contains("winter")) {
        particleSymbol = "❄️"; // снежинки
        particleCount = 25;
    }

    // Генерируем частицы
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.innerText = particleSymbol;

        // Случайная позиция, размер, скорость и задержка
        const startLeft = Math.random() * 100; // от 0% до 100% ширины
        const fallDuration = Math.random() * 7 + 5; // от 5 до 12 секунд падение
        const swayDuration = Math.random() * 3 + 2; // от 2 до 5 секунд покачивание
        const size = Math.random() * 12 + 10; // от 10px до 22px размер
        const delay = Math.random() * 5; // случайная задержка старта

        particle.style.left = `${startLeft}%`;
        particle.style.fontSize = `${size}px`;
        particle.style.animationDuration = `${fallDuration}s, ${swayDuration}s`;
        particle.style.animationDelay = `${delay}s`;

        container.appendChild(particle);
    }
});