# UKA Translations

Публічний каталог українських локалізацій ігор від [UKA Localization](https://github.com/UKA-Localization). Сторінка розміщена на GitHub Pages.

## Як додати проєкт

1. Переконайтеся, що репозиторій локалізації публічний і його `README.md` пояснює поточний стан перекладу та спосіб встановлення.
2. Додайте до `<div id="project-rows">` в `index.html` новий блок `<article class="project-row" data-name="Назва гри">` за зразком наявних. Змініть скріншот, назву, платформу, стан, опис, статистику, посилання на переклад і сторінку гри. Атрибут `data-name` використовується для пошуку. Скріншот покладіть у `assets/`.
3. Пошук, лічильник і пагінація оновляться автоматично. Кількість проєктів на сторінці задає `PAGE_SIZE` у `search.js`.
4. Створіть pull request або надішліть зміни в `main`. Після злиття GitHub Pages оновить сторінку.

Два блоки з `data-demo="true"` — тимчасові тестові ігри для перевірки пагінації. Після перегляду видаліть їх з `index.html` і поверніть потрібну кількість записів у `PAGE_SIZE` в `search.js` (до тесту було 4).

Patreon, Монобанка й Donatello у розділі «Підтримати проєкт» зараз вимкнені: адрес для них ще немає. Коли адреси будуть готові, замініть відповідні кнопки на посилання.

Це статичний сайт: для перегляду локально достатньо відкрити `index.html` у браузері. Залежностей і збірки немає.

Після зміни `styles.css`, `search.js` або `preview.js` збільшіть параметр `v` у відповідному посиланні в `index.html`, щоб GitHub Pages не віддавав відвідувачам попередню кешовану версію файлу.

Скріншоти для поточних записів взято з папок `publish/screenshots/` відповідних репозиторіїв [Barony](https://github.com/UKA-Localization/Barony-localization-uk-UA) і [Starship Troopers: Terran Command](https://github.com/UKA-Localization/Starship-Troopers-Terran-Command-localization-uk-UA).

Статистику рядків і вичитки взято з `README.md` цих двох проєктів. Вона оновлюється вручну, коли змінюється стан перекладу. Коли з’явиться запрошення до Discord, замініть вимкнену кнопку в секції «Ми у мережах» на посилання.

Знаки сервісів у `assets/icons/` отримані з офіційних джерел: [GitHub Brand Toolkit](https://brand.github.com/foundations/logo), [Steam](https://store.steampowered.com/), [Discord Brand Guidelines](https://discord.com/branding), [Patreon](https://www.patreon.com/brand), [monobank](https://monobank.ua/) і [Donatello](https://donatello.to/). Це лише позначки сервісів у відповідних кнопках.
