// Автоматическое заполнение карточки «Сегодня» на главной странице
document.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    // Массив 24 солнечных сезонов с привязкой к датам
    const solarTermsData = [
        { name: "Начало весны (Личунь)", num: 1, season: "Весна", startM: 2, startD: 4 },
        { name: "Дождевая вода (Юйшуй)", num: 2, season: "Весна", startM: 2, startD: 19 },
        { name: "Пробуждение насекомых (Цзинчжэ)", num: 3, season: "Весна", startM: 3, startD: 5 },
        { name: "День весеннего равноденствия (Чуньфэнь)", num: 4, season: "Весна", startM: 3, startD: 20 },
        { name: "Чисто и ясно (Цинмин)", num: 5, season: "Весна", startM: 4, startD: 4 },
        { name: "Хлебные дожжи (Гуюй)", num: 6, season: "Весна", startM: 4, startD: 20 },
        { name: "Начало лета (Лися)", num: 7, season: "Лето", startM: 5, startD: 5 },
        { name: "Малые зерна (Сяомань)", num: 8, season: "Лето", startM: 5, startD: 21 },
        { name: "Семена на полях (Манчжун)", num: 9, season: "Лето", startM: 6, startD: 5 },
        { name: "День летнего солнцестояния (Сячжи)", num: 10, season: "Лето", startM: 6, startD: 21 },
        { name: "Малая жара (Сяошу)", num: 11, season: "Лето", startM: 7, startD: 7 },
        { name: "Большая жара (Дашу)", num: 12, season: "Лето", startM: 7, startD: 22 },
        { name: "Начало осени (Лицюм)", num: 13, season: "Осень", startM: 8, startD: 7 },
        { name: "Предел жары (Чушу)", num: 14, season: "Осень", startM: 8, startD: 22 },
        { name: "Белая роса (Байлу)", num: 15, season: "Осень", startM: 9, startD: 7 },
        { name: "День осеннего равноденствия (Цюфэнь)", num: 16, season: "Осень", startM: 9, startD: 22 },
        { name: "Холодные росы (Ханьлу)", num: 17, season: "Осень", startM: 10, startD: 8 },
        { name: "Выпадение инея (Шуанцзян)", num: 18, season: "Осень", startM: 10, startD: 23 },
        { name: "Начало зимы (Лидун)", num: 19, season: "Зима", startM: 11, startD: 7 },
        { name: "Малые снега (Сяосюэ)", num: 20, season: "Зима", startM: 11, startD: 22 },
        { name: "Большие снега (Дасюэ)", num: 21, season: "Зима", startM: 12, startD: 7 },
        { name: "День зимнего солнцестояния (Дунчжи)", num: 22, season: "Зима", startM: 12, startD: 21 },
        { name: "Малые холода (Сяохань)", num: 23, season: "Зима", startM: 1, startD: 5 },
        { name: "Большие холода (Дахань)", num: 24, season: "Зима", startM: 1, startD: 20 }
    ];

    let currentTerm = solarTermsData[0];
    for (let i = solarTermsData.length - 1; i >= 0; i--) {
        let term = solarTermsData[i];
        if (month > term.startM || (month === term.startM && day >= term.startD)) {
            currentTerm = term;
            break;
        }
    }

    // Форматируем дату (например, "15 октября")
    const options = { day: 'numeric', month: 'long' };
    const dateString = today.toLocaleDateString('ru-RU', options);

    // Находим элементы карточки «Сегодня» и заполняем их
    const titleElem = document.getElementById("todayCardTitle");
    const descElem = document.getElementById("todayCardDesc");

    if (titleElem && descElem) {
        titleElem.innerText = `Сегодня: ${dateString}`;
        descElem.innerHTML = `Текущий сезон: <strong>${currentTerm.name}</strong>
Сезон №${currentTerm.num} из 24 (${currentTerm.season}). Нажмите, чтобы узнать подробные рекомендации.`;
    }
});