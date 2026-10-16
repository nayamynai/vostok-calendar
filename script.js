const seasons = [
    "Начало весны (Личунь)", "Дождевая вода (Юйшуй)", "Пробуждение насекомых (Цзинчжэ)", 
    "Весеннее равноденствие (Чуньфэнь)", "Чистый свет (Цинмин)", "Хлебные дожди (Гуюй)",
    "Начало лета (Лися)", "Малые изобилия (Сяомань)", "Зерна в колосках (Манчжун)", 
    "Летнее солнцестояние (Сячжи)", "Малая жара (Сяошу)", "Большая жара (Дашу)",
    "Начало осени (Лицю)", "Конец жары (Чушу)", "Белая роса (Байлу)", 
    "Осеннее равноденствие (Цюфэнь)", "Холодная роса (Ханьлу)", "Иней выпадает (Шуанцзян)",
    "Начало зимы (Лидун)", "Малые снега (Сяосюэ)", "Большие снега (Дасюэ)", 
    "Зимнее солнцестояние (Дунчжи)", "Малые морозы (Сяохань)", "Большие морозы (Дахань)"
];

const zodiacSigns = ["立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "小雪", "大雪", "冬至", "小寒", "大寒 "];

// 1. Генерация внешнего кольца зодиака
const zodiacRing = document.getElementById('zodiacRing');
const radius = 300;
const totalZodiac = zodiacSigns.length;

zodiacSigns.forEach((sign, index) => {
    const angle = (index / totalZodiac) * 2 * Math.PI;
    const x = radius * Math.sin(angle);
    const y = -radius * Math.cos(angle);

    const div = document.createElement('div');
    div.className = 'zodiac-symbol';
    div.style.transform = `translate(${x}px, ${y}px) rotate(${index * (360 / totalZodiac)}deg)`;
    div.textContent = sign.split(' ')[0];
    div.title = sign;
    zodiacRing.appendChild(div);
});

// 2. Генерация кликабельных секторов-ссылок для 24 сезонов
const seasonsWheel = document.getElementById('seasonsWheel');
const seasonTitle = document.getElementById('seasonTitle');
const seasonDesc = document.getElementById('seasonDesc');
const totalSeasons = 24;

for (let i = 0; i < totalSeasons; i++) {
    // Создаем тег ссылки <a> вместо обычного div, чтобы открывать новую вкладку
    const sector = document.createElement('a');
    sector.className = 'season-sector';
    
    // Ссылки будут вести на файлы вида season-1.html, season-2.html и т.д.
    sector.href = `season${i + 1}.html`;
    
    const angle = (i * (360 / totalSeasons)) - 7.5;
    sector.style.transform = `rotate(${angle}deg)`;
    sector.style.width = `${480 * Math.tan(Math.PI / 24)}px`; 
    sector.style.marginLeft = `-${(480 * Math.tan(Math.PI / 24)) / 2}px`;

    const currentSeasonName = seasons[i];

    // Интерактив при наведении
    sector.addEventListener('mouseenter', () => {
        seasonTitle.textContent = currentSeasonName;
        seasonDesc.textContent = `Сезон #${i + 1} из 24 (Кликните для перехода)`;
    });

    seasonsWheel.appendChild(sector);
}